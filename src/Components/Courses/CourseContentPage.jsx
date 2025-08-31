import React, { useEffect, useState } from "react";
import LoginPopup from "./LoginPopup";
import CourseCard from "./CourseCard";
import { courses } from "./courseData";

const CourseContentPage = () => {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth(false);
      setLoading(false);
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const extractedUserId = payload.userId || payload.email || payload.id;
      if (!extractedUserId) throw new Error("userId not found in token");

      setUserId(extractedUserId);
      setAuth(true);
      setLoading(false);
    } catch (err) {
      console.error("Token decode failed:", err);
      setAuth(false);
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!auth) return <LoginPopup />;

  return (
    <div className="container py-5">
      <h2 className="mb-4">Courses Category</h2>
      <div className="row g-4">
        {courses.map((course) => (
          <div key={course.id} className="col-12 col-md-6 col-lg-3">
            <CourseCard course={course} userId={userId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentPage;
