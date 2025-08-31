import React from 'react';
import { Form } from 'react-bootstrap';

const AssignmentActivity = () => {
  return (
    <div className="mb-4">
      <h5 className="mb-3">Assignment Activity</h5>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write a short about your assignment"
          className="border-1"
        />
      </Form.Group>
    </div>
  );
};

export default AssignmentActivity;