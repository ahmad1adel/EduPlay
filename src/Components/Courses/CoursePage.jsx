import React from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { id } = useParams();
  return (
    <div className="p-5">
      <h2>Course Details Page</h2>
      <p>Course ID: {id}</p>
    </div>
  );
};

export default CoursePage;
