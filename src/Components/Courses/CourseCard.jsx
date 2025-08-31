

import React, { useState } from 'react';
import StudentEnrollmentInfo from './StudentEnrollmentInfo';
import { useNavigate } from 'react-router-dom';
import EnrollmentPopup from './EnrollmentPopup';

const CourseCard = ({ course, userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!userId) {
      alert("Please log in to access courses.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/enrollment/check`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, courseId: course.id })
      });

      if (!res.ok) throw new Error('Failed to check enrollment');
      const data = await res.json();

      if (data.enrolled) {
        navigate(`/courses/${course.id}`);
      } else {
        setShowModal(true);
      }
    } catch (err) {
      console.error('Error checking enrollment:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="card h-100 shadow-sm"
        onClick={handleClick}
        style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
      >
        <div className="position-relative">
          <img
            src={course.imageUrl}
            className="card-img-top"
            alt={`${course.title} banner`}
          />
          <div className="position-absolute top-0 end-0 p-2">
            <img
              src={course.instructor.avatarUrl}
              className="instructor-avatar"
              alt={course.instructor.name}
              title={course.instructor.name}
            />
          </div>
          <div className="department-label">{course.title}</div>
        </div>
        <div className="card-body">
          <h5 className="course-title">{course.title}</h5>
          <StudentEnrollmentInfo
            enrollmentType={course.enrollmentType}
            students={course.enrolledStudents}
            moreCount={course.moreStudentsCount}
          />
        </div>
      </div>

      <EnrollmentPopup
        show={showModal}
        onClose={() => setShowModal(false)}
        onEnroll={() => {
          setShowModal(false);
          navigate(`/courses/${course.id}`);
        }}
        userId={userId}
        course={course}
      />
    </>
  );
};

export default CourseCard;
