import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ParentDashboard.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Courses/Sidebar';

function ParentDashboard() {
  const [children, setChildren] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [childEmail, setChildEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const parent = JSON.parse(localStorage.getItem('user'));

  const fetchChildren = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/parents/${parent._id}/children`);
      setChildren(res.data);
    } catch (err) {
      console.error('Error fetching children:', err);
    }
  };

  useEffect(() => {
    if (parent?._id) {
      fetchChildren();
    }
  }, [parent]);

  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const res = await axios.post(`http://localhost:5000/api/parents/${parent._id}/add-child`, {
        childEmail
      });
      setSuccessMessage('Child linked successfully!');
      setChildEmail('');
      setShowForm(false);
      fetchChildren();
    } catch (err) {
      if (err.response && err.response.data?.message) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage('Something went wrong.');
      }
    }
  };

  const handleViewProgress = (child) => {
    navigate('/progress', { state: { child } });
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="container">
          <div className="dashboard">

            <div className="header">
              <div className="welcome-section">
                <h1 className="welcome-title">Welcome, {parent?.username}</h1>
              </div>
              <div className="resources-section">
                <span className="resources-text">Parent Resources</span>
              </div>
            </div>

            <div className="info-banner">
              <div className="info-content">
                <h3 className="info-title">Welcome To EduPlay</h3>
                <p className="info-description">Learn what you can do with EduPlay as a parent</p>
              </div>
              <button className="got-it-button">Got It!</button>
            </div>

            <div className="children-section">
              <div className="children-header">
                <div>
                  <h2 className="children-title">Your Children</h2>
                  <p className="children-description">These are your children’s accounts. Click the name to view progress.</p>
                </div>
                <button className="add-child-button" onClick={() => setShowForm(true)}>+ Add Child</button>
              </div>

              <div className="children-list">
                {children.map(child => (
                  <div key={child._id} className="child-card">
                    <div className="child-info">
                      <span className="child-name">{child.username}</span>
                      <span className="child-age">Age: {child.age}</span>
                    </div>
                    <div className="child-actions">
                      <button className="view-button" onClick={() => handleViewProgress(child)}>
                        View Progress
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {showForm && (
              <div className="modal-overlay" onClick={() => setShowForm(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <h3 className="modal-title">Link a Child</h3>

                  <form onSubmit={handleSubmit} className="form">
                    <input
                      type="email"
                      placeholder="Child's Email"
                      value={childEmail}
                      onChange={e => setChildEmail(e.target.value)}
                      className="input"
                      required
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}

                    <div className="modal-buttons">
                      <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>Cancel</button>
                      <button type="submit" className="save-button">Link Child</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default ParentDashboard;
