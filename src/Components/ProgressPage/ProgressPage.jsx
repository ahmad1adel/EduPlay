import React, { useEffect, useState } from 'react';
import './ProgressPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBarsProgress, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

function ProgressPage() {
  const [progressData, setProgressData] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [user, setUser] = useState(null);
  const [childUser, setChildUser] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (!localUser) return;

    setUser(localUser);

    const fetchChildAndProgress = async () => {
      try {
        const parentRes = await axios.get(`http://localhost:5000/api/parents/${localUser._id}/children`);
        const children = parentRes.data;

        if (!children || children.length === 0) {
          console.warn('No children linked.');
          return;
        }

        const firstChild = children[0]; 
        setChildUser(firstChild);

        const progressRes = await axios.get(`http://localhost:5000/api/student/${firstChild._id}/progress`);

        if (progressRes.data.progress.length === 0) {
          setProgressData([
            {
              courseName: 'No Courses',
              enrolledAt: new Date(),
              videosWatched: 0,
              totalExamPoints: 0
            }
          ]);
          setTotalPoints(0);
        } else {
          setProgressData(progressRes.data.progress);
          setTotalPoints(progressRes.data.totalPoints);
        }
      } catch (err) {
        console.error('Error fetching child progress:', err);
      }
    };

    fetchChildAndProgress();
  }, []);

  return (
    <>
    <Navbar />

    <div className='EditPage'>
      <div className="user-profile">
      <img className="profileImg" src="https://avatar.iran.liara.run/public" />
      <div className="user-info">
          <h1 className="user-name">{childUser?.username || 'Child'}</h1>
          <h2 className="user-role">Child</h2>
        </div>
        <FontAwesomeIcon icon={faChevronDown} size="sm" className="chevron-icon" />
      </div>

      <div className="page-wrapper">
        <div className="simple-account-view">
          <div className="progress-section">
            <FontAwesomeIcon icon={faBarsProgress} style={{ color: "#32363e" }} />
            <span className="progress-title">Progress</span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="progress-page">
          <div className='st'>
            <p className="header">Progress</p>
            <div className="total-points mt-4">
            <h4>Total Points: {totalPoints} pts</h4>
          </div>
            <p className="subheader">Latest activity may take 10 mins to show below.</p>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Enrolled Date</th>
                <th>Level</th>
                <th>Watched Videos</th>
                <th>Exam Points</th>
              </tr>
            </thead>
            <tbody>
              {progressData.map((d, i) => (
                <React.Fragment key={i}>
                  <tr>
                    <td>
                      <span className="activity-icon">
                        <FontAwesomeIcon icon={faPlay} style={{ color: "#46494e" }} />
                      </span>
                      {d.courseName}
                    </td>
                    <td>{new Date(d.enrolledAt).toLocaleDateString()}</td>
                    <td>Level 1</td>
                    <td>{d.videosWatched ?? 0}</td>
                    <td><b>{d.totalExamPoints ?? 0} pts</b></td>
                  </tr>

                  {d.videoTitles && d.videoTitles.length > 0 && (
                    <tr className="video-titles-row">
                      <td colSpan="5">
                        <div className="video-titles-list">
                          <strong>Watched Videos:</strong>
                          <ul>
                            {d.videoTitles.map((title, idx) => (
                              <li key={idx}>{title}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>




        </div>
      </div>
    </div>
    </>
  );
}

export default ProgressPage;
