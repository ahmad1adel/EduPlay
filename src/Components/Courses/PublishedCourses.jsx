import React from 'react';
import './PublishedCourses.css';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Maths Department',
    img: '/images/children_PNG17999.png',
    teacher: '/images/f53aaee5a3dc5a2d28c07242089199b3.jpg',
    students: [
      '/images/0d4373a3a42049caa6166402fc587f10.jpg',
      '/images/0d4373a3a42049caa6166402fc587f10.jpg',
      '/images/0d4373a3a42049caa6166402fc587f10.jpg',
      '/images/0d4373a3a42049caa6166402fc587f10.jpg',
    ],
  },
  {
    title: 'Chemistry Department',
    img: '/images/children_PNG17999.png',
    teacher: '/images/f53aaee5a3dc5a2d28c07242089199b3.jpg',
    students: [
      '/images/0d4373a3a42049caa6166402fc587f10.jpg',
      '/images/0d4373a3a42049caa6166402fc587f10.jpg',
      '/images/0d4373a3a42049caa6166402fc587f10.jpg',
    ],
  },
  {
    title: 'Physics Department',
    img: '/images/children_PNG17999.png',
    teacher: '/images/f53aaee5a3dc5a2d28c07242089199b3.jpg',
    students: [],   // no students yet
  },
  // …and so on for your remaining courses
];

export default function PublishedCourses() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Published courses</h4>
        <Link to="#" className="text-primary fw-semibold text-decoration-none">
          See all
        </Link>
      </div>

      <div className="row g-4">
        {courses.map((course, idx) => {
          const allStudents = course.students || [];
          const visible = allStudents.slice(0, 2);
          const extraCount = allStudents.length - visible.length;

          return (
            <div className="col-md-4" key={idx}>
              <Link to={`/courses/${idx}`} className="text-decoration-none">
                <div className="card published-card h-100">
                  {/* Banner + teacher avatar */}
                  <div className="card-image-wrapper">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="card-img-top"
                    />
                    <img
                      src={course.teacher}
                      alt="teacher"
                      className="teacher-img"
                    />
                  </div>

                  {/* Card body */}
                  <div className="card-body pt-4">
                    <h6 className="course-title">{course.title}</h6>
                    <p className="enrolment-text">Continuous enrolment</p>

                    <div className="d-flex align-items-center">
                      {visible.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`student ${i + 1}`}
                          className="student-img"
                        />
                      ))}
                      {extraCount > 0 && (
                        <span className="more text-muted ms-2">
                          +{extraCount} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
