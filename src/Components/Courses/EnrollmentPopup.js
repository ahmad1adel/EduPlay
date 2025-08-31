import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EnrollmentPopup = ({ show, onClose, onEnroll, userId, course }) => {
  const handleEnroll = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/enrollment/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          courseId: course.id,
          courseName: course.title
        })
      });

      const data = await response.json();
      if (data.success) {
        onEnroll(); // go to course page
      } else {
        console.error("Enrollment failed:", data.message);
      }
    } catch (err) {
      console.error("Error enrolling:", err);
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enroll in {course.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to enroll in this course?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleEnroll}>Enroll Now</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EnrollmentPopup;
