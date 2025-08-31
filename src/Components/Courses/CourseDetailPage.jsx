import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FaPlay, FaPause, FaVolumeUp, FaExpand, FaCog, FaDownload } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './CourseDetailPage.css';

const CourseDetailPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [course, setCourse] = useState(null);
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const videoRef = useRef(null);
  const [userId, setUserId] = useState(null);
  const { courseId } = useParams();

  const assignments = [
    { subject: 'Algebra Quiz', time: '10:00 AM', status: 'Completed' },
    { subject: 'Practice Problems', time: '11:40 AM', status: 'Pending' },
    { subject: 'Chapter Test', time: '11:58 AM', status: 'Pending' }
  ];


  
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.warn('No token found in localStorage');
        return;
      }
  
      try {
        const res = await axios.get('http://localhost:5000/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        console.log("user from token:", res.data);
        setUserId(res.data._id);
        localStorage.setItem('user', JSON.stringify(res.data));
      } catch (err) {
        console.error('Failed to fetch user from token:', err);
      }
    };
  
    fetchUser();
  }, [courseId]);
  
  



  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        setCourse(res.data);
      } catch (err) {
        console.error(err);
      }
    };


    const fetchWatched = async () => {
      if (!userId || !courseId) {
        console.warn('Missing userId or courseId in fetchWatched');
        return;
      }
    
      try {
        const res = await axios.get(`http://localhost:5000/api/watched?userId=${userId}&courseId=${courseId}`);
        
        if (Array.isArray(res.data)) {
          const watchedIndexes = res.data.map(item => item.videoIndex);
          setWatchedVideos(watchedIndexes);
        } else {
          console.warn('Unexpected response format:', res.data);
          setWatchedVideos([]);
        }
    
      } catch (err) {
        console.error('Failed to fetch watched videos:', err);
        setWatchedVideos([]);
      }
    };
    

    fetchCourse();
    fetchWatched();
  }, [courseId, userId]);

  if (!course) return <p>Loading...</p>;

  const recordedVideos = course.chapters || [];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeChange = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
  };

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleVideoSelect = (index) => {
    setCurrentVideo(index);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleMarkAsWatched = async (videoIndex) => {
    console.log("Marking as watched:", { userId, courseId, videoIndex });

    if (!userId || !courseId || videoIndex === undefined) {
      setMessage('❌ Missing required info to mark video as watched.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }
  
    try {
      await axios.post('http://localhost:5000/api/watched', {
        userId,
        courseId,
        videoIndex
      });
      setWatchedVideos(prev => [...prev, videoIndex]);
      setMessage('Marked as watched!');
    } catch (err) {
      console.error('Failed to mark as watched', err);
      setMessage('Failed to mark as watched.');
    } finally {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };
  

  return (
    <Container fluid className="p-4">
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 20,
          right: 20,
          backgroundColor: '#333',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          zIndex: 9999
        }}>
          {message}
        </div>
      )}

      <Row>
        <Col lg={8}>
          <div className="position-relative bg-dark rounded overflow-hidden mb-4">
            <video
              ref={videoRef}
              className="w-100"
              style={{ height: '400px', objectFit: 'cover' }}
              src={recordedVideos[currentVideo].url}
              onTimeUpdate={handleVideoTimeUpdate}
              onEnded={handleVideoEnded}
            />
            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark">
              <div className="d-flex align-items-center justify-content-between text-white">
                <Button variant="link" className="text-white" onClick={togglePlay}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </Button>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center">
                    <FaVolumeUp className="me-2" />
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      style={{ width: '100px' }}
                    />
                  </div>
                  <FaCog />
                  <Button variant="link" className="text-white p-0" onClick={toggleFullscreen}>
                    <FaExpand />
                  </Button>
                </div>
              </div>
              <input
                type="range"
                className="form-range mt-2"
                min="0"
                max={videoRef.current?.duration || 0}
                value={currentTime}
                onChange={handleTimeChange}
              />
              <div className="d-flex justify-content-between text-white small">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(videoRef.current?.duration || 0)}</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2>{recordedVideos[currentVideo].title}</h2>
            <p className="text-muted">
              Learn the fundamentals of {recordedVideos[currentVideo].title.toLowerCase()} with our comprehensive course.
            </p>

            <h3 className="mt-4">Course Overview</h3>
            <p className="text-muted">
              This course covers essential concepts in {course.title.toLowerCase()}, providing a strong foundation for advanced topics.
            </p>

            <Card className="mt-4 border-0 bg-light">
              <Card.Body>
                <div className="d-flex gap-3">
                  <img 
                    src={course.instructor?.avatarUrl || "https://randomuser.me/api/portraits/men/32.jpg"}
                    alt="Instructor"
                    className="rounded-circle"
                    width="64"
                    height="64"
                  />
                  <div>
                    <h4>{course.instructor?.name || 'Instructor Name'}</h4>
                    <div className="text-warning mb-2">★★★★★</div>
                    <p className="text-muted mb-0">
                      Expert instructor in {course.title}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-4">
                <img 
                  src={course.imageUrl}
                  alt="Department"
                  className="rounded-circle me-3"
                  width="48"
                  height="48"
                />
                <div>
                  <h5 className="mb-0">{course.title}</h5>
                </div>
              </div>

              <Button 
                variant="primary" 
                className="w-100 mb-4"
                onClick={() => handleVideoSelect(currentVideo)}
              >
                Resume Current Video
              </Button>

              <h5>Course Videos</h5>
              <ListGroup variant="flush">
                {recordedVideos.map((video, index) => (
                  <ListGroup.Item 
                    key={index} 
                    className={`px-0 py-2 border-0 ${currentVideo === index ? 'bg-light' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleVideoSelect(index)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-medium">{video.title}</div>
                        <small className="text-muted">{video.duration}</small>
                      </div>
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-success"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMarkAsWatched(index);
                          }}
                          disabled={watchedVideos.includes(index)}
                        >
                          {watchedVideos.includes(index) ? "Watched" : "Mark as Watched"}
                        </Button>

                        <Button 
                          variant="light" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(video.url, '_blank');
                          }}
                        >
                          <FaDownload />
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <Button variant="outline-primary" className="w-100 mt-3">
                Open Course Material
              </Button>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm mt-4">
            <Card.Body>
              <h5 className="mb-3">Assignments</h5>
              <ListGroup variant="flush">
                {assignments.map((assignment, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    as={Link}
                    to="/assignment"
                    state={{ assignment }}
                    className="px-0 py-3 border-0 text-decoration-none"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-medium">{assignment.subject}</div>
                        <small className="text-muted">Due Today</small>
                      </div>
                      <div className="text-end">
                        <div className="small">{assignment.time}</div>
                        <small className={assignment.status === 'Completed' ? 'text-success' : 'text-warning'}>
                          {assignment.status}
                        </small>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetailPage;