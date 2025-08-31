// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-start flex-wrap px-3 pt-4">
      {/* Left - Title and Search */}
      <div className="flex-grow-1 mb-2">
        <h2 className="fw-bold text-primary">Courses</h2>
        <input
          type="text"
          placeholder="Search"
          className="form-control mt-2 rounded-pill shadow-sm border-0 bg-light"
          style={{ maxWidth: '600px' }}
        />
      </div>

      {/* Right - Notifications and Profile */}
      <div className="mt-5 d-flex align-items-center gap-4">
        <i className="fas fa-bell fs-5 text-secondary"></i>
        <i className="fas fa-envelope fs-5 text-secondary"></i>

        <div className="d-flex align-items-center">
          <img
            src="https://i.imgur.com/DP0pU5M.png" // placeholder image
            alt="User"
            className="rounded-circle"
            width="40"
            height="40"
            style={{ objectFit: 'cover', backgroundColor: 'gold' }}
          />
          <div className="ms-2">
            <strong>Sara Ahmed</strong>
            <div className="text-muted small">Child</div>
          </div>
          <i className="fas fa-chevron-down ms-2 text-muted"></i>
        </div>
      </div>

      {/* Courses Category Title */}
      <div className="w-100 text-center mt-4">
        <h3 className="coursecategorytitle fw-bold text-primary position-relative d-inline-block category-title">
          Courses Category
        </h3>
      </div>
    </div>
  );
};

export default Header;
