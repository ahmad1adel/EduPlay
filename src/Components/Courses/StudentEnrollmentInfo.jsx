import React from 'react';

const StudentEnrollmentInfo = ({
  enrollmentType,
  students,
  moreCount
}) => {
  return (
    <div className="mt-3">
      <p className="continuous-enrollment mb-2">{enrollmentType}</p>
      <div className="d-flex align-items-center">
        <div className="d-flex">
          {students.map((student) => (
            <img
              key={student.id}
              src={student.avatarUrl}
              className="student-avatar"
              alt={`Student ${student.name}`}
              title={student.name}
            />
          ))}
        </div>
        <span className="ms-2 more-students">+{moreCount} more</span>
      </div>
    </div>
  );
};

export default StudentEnrollmentInfo;