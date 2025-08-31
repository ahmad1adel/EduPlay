// src/components/CourseCategories.js
import React from 'react';

const categories = [
  {
    title: 'Mathematics',
    icon: '➗',
    description: 'Dive into numbers, equations, and problem-solving techniques.',
    button: 'Explore courses',
    variant: 'primary',
  },
  {
    title: 'Science',
    icon: '🔬',
    description: 'From physics to biology, unravel the mysteries of the natural world.',
    button: 'Explore courses',
    variant: 'success',
  },
  {
    title: 'History',
    icon: '🏰',
    description: 'Travel through time and understand the events that shaped our world.',
    button: 'Explore courses',
    variant: 'info',
  },
  {
    title: 'Languages',
    icon: '🗣️',
    description: 'Learn new languages to communicate globally and enrich your mind.',
    button: 'Explore courses',
    variant: 'warning',
  },
];


const CourseCategories = () => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {categories.map((cat, idx) => (
          <div className="col-md-3" key={idx}>
            <div className="card text-center shadow-sm category-card h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <div className="display-4 mb-3">{cat.icon}</div>
                  <h5 className="text-capitalize fw-bold text-success">{cat.title}</h5>
                  <p className="text-muted small">{cat.description}</p>
                </div>
                <button className={`btn btn-${cat.variant} rounded-pill mt-3`}>
                  {cat.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;
