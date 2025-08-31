import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setRole(user.role);
      } catch {
        setRole(null);
      }
    }
  }, []);

  const examLink = role === 'Organizer' ? '/exam-editor' : '/exams';

  return (
    <div className="sidebar d-flex flex-column p-3">
      <div className="d-flex align-items-center mb-4">
        <i className="fas fa-graduation-cap me-2"></i>
        <span className="CourseSpan">Courses</span>
      </div>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/pdf" className="nav-link text-white">
            <i className="fas fa-landmark me-2"></i> Library
          </Link>
        </li>
        <li>
          <Link to="/courses" className="nav-link active">
            <i className="fas fa-star me-2"></i> Courses
          </Link>
        </li>
        <li>
          <Link to={examLink} className="nav-link text-white">
            <i className="fas fa-file-lines me-2"></i> Exams
          </Link>
        </li>
        <li>
          <Link to="/assignment" className="nav-link text-white">
            <i className="fas fa-user-check me-2"></i> Assignment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
