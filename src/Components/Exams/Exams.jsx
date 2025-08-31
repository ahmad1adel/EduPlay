
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Courses/Sidebar';
import './Exams.css';
import axios from 'axios';

function Exams() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (localUser) setUser(localUser);

    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/courses');
        setCourses(res.data);
      } catch (err) {
        console.error('❌ Error fetching courses:', err);
      }
    };

    fetchCourses();
  }, []);

  const handlePreviewClick = (courseId, courseName) => {
    localStorage.setItem('selectedCourseId', courseId);
    localStorage.setItem('selectedCourseName', courseName); // ✅ Store course name

    if (user?.role === 'Organizer') {
      navigate('/exam-editor');
    } else {
      navigate('/quiz');
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="exams">
          {courses.map((course) => (
            <div className="exam-card" key={course._id}>
              <div className="exam-info">
                <p className="exam-title">Final exam</p>
                <p className="subject">{course.name}</p>
                <button className="term-btn">1st Term</button>
                <p className="details">10 Questions<br />100 points</p>
              </div>
              <div className="exam-actions">
                <button
                  className="preview-btn"
                  onClick={() => handlePreviewClick(course._id, course.name)}
                >
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Exams;
