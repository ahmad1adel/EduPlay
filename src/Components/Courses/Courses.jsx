// src/components/Courses.js
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from '../Navbar/Navbar';
import Header from './Header';
import CourseCategories from './CourseCategories.jsx';
import PublishedCourses from './PublishedCourses';
import CourseContentPage from './Course/CourseContentPage.jsx';
import { Outlet } from 'react-router-dom';


const Courses = ({ children }) => {
  return (
     <div className="d-flex flex-column min-vh-100">
       {/* Top Navbar (includes Courses title, search, profile) */}
       <Navbar />

       {/* Body: Sidebar + Content */}
       <div className="d-flex flex-grow-1">
         <Sidebar />

         <div className="flex-grow-1">
           {/* Header with "Courses Category" and underline */}
         <main className="p-4 bg-light min-vh-100">
          <Outlet />
        </main>
           {/* Main content */}
           {/* <main className="p-4 bg-light min-vh-100">
             {children}
           </main> */}
         </div>
       </div>
     </div>
  );
};

export default Courses;
