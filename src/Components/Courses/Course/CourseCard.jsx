// src/components/CourseCard.jsx
import React from 'react';
import StudentEnrollmentInfo from './StudentEnrollmentInfo';

const CourseCard = ({ course }) => {
  return (
    <div className="card h-100 shadow-sm">
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
        <div className="department-label">
          {course.title}
        </div>
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
  );
};

export default CourseCard;
