// src/components/CourseContentPage.jsx
import React from 'react';
import { Grid2X2 } from 'lucide-react';
import CourseCard from './CourseCard';
import { courses } from './courseData';
import './common.css'
const CourseContentPage = () => {
  return (
    <div className="container py-5">
      <header className="published-courses-header mb-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Grid2X2 className="me-2" size={24} />
          <h2 className="mb-0">Published courses</h2>
        </div>
        <a href="#" className="see-all-link">See all</a>
      </header>

      <div className="row g-4">
        {courses.map((course) => (
          <div key={course.id} className="col-12 col-md-6 col-lg-4">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentPage;
