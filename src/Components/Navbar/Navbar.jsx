import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const handleAvatarClick = () => {
    if (user?.role === 'Parent') {
      navigate('/parent-dashboard');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <img src="/imgs/logo.png" alt="EduPlay Logo" />
              <span>Edu<b>Play</b></span>
            </div>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/pdf">Books</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/video">Videos</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/games">Games</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            </ul>

            {user?.role === 'Parent' && (
              <div
                style={{ cursor: 'pointer', marginRight: '15px' }}
                onClick={handleAvatarClick}
              >

              <img
                src="/imgs/default-avatar.png"
                alt="Parent Avatar"
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #007bff'
                }}
              />

              </div>
            )}

            <div className="search-box">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
