import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import AssignmentActivity from '../AssignmentActivity/AssignmentActivity';
import FileUpload from '../FileUpload/FileUpload';

const Assignment = () => {
  return (
    <div className="min-h-screen">
      <Header title="Assignment" />
      <Container className="mt-4">
        <div className="assignment-content">
          <AssignmentActivity />
          <FileUpload />
          <Row className="mt-4">
            <Col className="d-flex">
              <Button 
                variant="primary" 
                className="primary-btn action-btn me-2"
              >
                Save changes
              </Button>
              <Button 
                variant="light" 
                className="cancel-btn action-btn"
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Assignment;