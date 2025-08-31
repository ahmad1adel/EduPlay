import React, { useState } from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import myImage from '../../images/image.png'; 
import Navbar from '../Navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function VideoLearning() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'ABC Train',
      thumbnail: '/images/2dc681f49b5aee3b8011d81aedbf2952.jpg',
      videoUrl: '/video/ABC song _ Alphabet adventure _ The abc train _ Kids Tv Show _ Learn Alphabet _ Nursery Rhymes.mp4'
    },
    {
      id: 2,
      title: 'Numbers',
      thumbnail: '/images/0d4373a3a42049caa6166402fc587f10.jpg',
      videoUrl: '/video/videoplayback.mp4'
    },
    {
      id: 3,
      title: 'Girl and the beast',
      thumbnail: '/images/fe92b08a450a0715be9ebbe74234077a.jpg',
      videoUrl: '/video/Beauty & the Beast  Full Story in English _ Fairy Tales for Children _ Bedtime Stories for Kids.mp4'
    },
    {
      id: 4,
      title: 'Planet Song',
      thumbnail: '/images/680007214fd81350738a38cddae486b4.jpg',
      videoUrl: '/video/Planet Song _ Nursery Rhymes For Children _ Kids TV popular kids song _ Kindergarten Nursery Rhymes.mp4'
    },
    {
      id: 5,
      title: 'Short man',
      thumbnail: '/images/423bb91330f69a9b58170736822f3de8.jpg',
      videoUrl: '/video/Saint Patricks Day.mp4'
    },
    {
      id: 6,
      title: 'Wheels on the Bus',
      thumbnail: '/images/f53aaee5a3dc5a2d28c07242089199b3.jpg',
      videoUrl: '/video/Wheels On The Bus With Animals _ Animal Song _ Nursery Rhymes & Kids Songs _ NuNu Tv.mp4'
    }
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return <>
  <Navbar/>
  
  <div className="container-fluid bg-light min-vh-100 py-4 overflow-hidden ">
      {/* Header */}
      <div className="container mb-4">
        <div className='row '>
          <div className='col-md-8'>

         
        <div className="d-flex align-items-center mb-3 p-2">
          <button className="btn btn-link text-primary p-0 mb-5">
            <ChevronLeft size={24} />
          </button>
          <h6 className="h4 mb-0 mt-5 ">
            <span className="text-primary">Funny Learning</span>{' '}
            <span className="text-purple">Videos</span>
          </h6>
        </div>
        
        {/* Introduction text */}
        <p className="text-dark ">
          Introducing Free Learning Videos for Kids! These educational videos are tailored to young students in 
          Preschool, Kindergarten, Grade 1, Grade 2, Grade 3. Kids will learn essential skills such as math, science, 
          and language while having a blast with fun and interactive videos! We believe access to quality 
          education is a fundamental human right and that's why we offer our videos free of charge!
        </p>
        </div>
        <div className='col-md-4 '>
          <img src={ myImage} className='w-75 p-1 ' alt="" />

        </div>
        
        </div>
      </div>

      {/* Video Grid */}
      <div className="container">
        <div className="row g-4">
          {videos.map((video) => (
            <div key={video.id} className="col-12 col-md-6 col-lg-4 ">
              <div className="card h-100 border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src={video.thumbnail}
                    className="card-img-top"
                    alt={video.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <button
                    className="btn btn-primary rounded-circle position-absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '48px',
                      height: '48px',
                      padding: 0
                    }}
                    onClick={() => handleVideoClick(video)}
                  >
                    <Play size={24} />
                  </button>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-3">{video.title}</h5>
                  <button
                    className="btn btn-primary px-4 rounded-pill"
                    onClick={() => handleVideoClick(video)}
                  >
                    Watch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setSelectedVideo(null)}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">{selectedVideo.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedVideo(null)}
                ></button>
              </div>
              <div className="modal-body p-0">
                <div className="ratio ratio-16x9">
                  <video controls className="rounded-0">
                    <source src={selectedVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
}

export default VideoLearning;