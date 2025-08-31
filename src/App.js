
// // import React, { useEffect, useState } from 'react';
// // import './App.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.js';
// // import '@fortawesome/fontawesome-free/css/all.min.css';

// // import Layout from './Components/Layout/Layout';
// // import Home from './Components/Home/Home';
// // import Register from './Components/Register/Register';
// // import Login from './Components/Login/Login';
// // import Library from './Components/pdf/pdf.jsx';
// // import VideoLearning from './Components/VideoLearning/VideoLearning.jsx';
// // import Games from './Components/Games/Games.jsx';
// // import Assignment from './Components/Assignment/Assignment.jsx';
// // import CourseContentPage from './Components/Courses/CourseContentPage.jsx';
// // import CourseDetailPage from './Components/Courses/CourseDetailPage.jsx';
// // import ScrollToTop from './Components/ScrollToTop.jsx';

// // import Exams from './Components/Exams/Exams.jsx';
// // import QuizQuestion from './Components/QuizQuestion/QuizQuestion.jsx';
// // import ParentDashboard from './Components/ParentDashboard/ParentDashboard.jsx';
// // import ProgressPage from './Components/ProgressPage/ProgressPage.jsx';
// // import ExamEditor from './Components/ExamEditor/ExamEditor.jsx';

// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// // function getRole() {
// //   const userStr = localStorage.getItem('user');
// //   if (!userStr) return null;
// //   try {
// //     const user = JSON.parse(userStr);
// //     return user.role;
// //   } catch {
// //     return null;
// //   }
// // }

// // function App() {
// //   const [role, setRole] = useState(null);

// //   useEffect(() => {
// //     const userStr = localStorage.getItem('user');
// //     if (userStr) {
// //       try {
// //         const user = JSON.parse(userStr);
// //         setRole(user.role);
// //       } catch {
// //         setRole(null);
// //       }
// //     } else {
// //       setRole(null);
// //     }
// //   }, []);

// //   if (role === null) return <div>Loading...</div>;

// //   const roleBasedRoutes = [];

// //   if (role === 'Child') {
// //     roleBasedRoutes.push(
// //       { path: 'courses', element: <CourseContentPage /> },
// //       { path: 'courses/:courseId', element: <CourseDetailPage /> },
// //       { path: 'exams', element: <Exams /> },
// //       { path: 'games', element: <Games /> },
// //       { path: 'quiz', element: <QuizQuestion /> },
// //       { path: 'assignment', element: <Assignment /> }
// //     );
// //   }

// //   if (role === 'Parent') {
// //     roleBasedRoutes.push(
// //       { path: 'parent-dashboard', element: <ParentDashboard /> },
// //       { path: 'progress', element: <ProgressPage /> }
// //     );
// //   }

// //   if (role === 'Organizer') {
// //     roleBasedRoutes.push(
// //       { path: 'exam-editor', element: <ExamEditor /> }
// //     );
// //   }

// //   const routers = createBrowserRouter([
// //     {
// //       path: '',
// //       element: (
// //         <>
// //           <ScrollToTop />
// //           <Layout />
// //         </>
// //       ),
// //       children: [
// //         { index: true, element: <Home /> },
// //         { path: 'register', element: <Register /> },
// //         { path: 'login', element: <Login /> },
// //         { path: 'pdf', element: <Library /> },
// //         { path: 'video', element: <VideoLearning /> },
// //         ...roleBasedRoutes,
// //         { path: '*', element: <div style={{ padding: "2rem" }}><h2>404 - Page Not Found</h2></div> }
// //       ]
// //     }
// //   ]);

// //   return <RouterProvider router={routers} />;
// // }


// // export default App;
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Layout from './Components/Layout/Layout';
// import Home from './Components/Home/Home';
// import Register from './Components/Register/Register';
// import Login from './Components/Login/Login';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Library from './Components/pdf/pdf.jsx';
// import VideoLearning from './Components/VideoLearning/VideoLearning.jsx';
// import Games from './Components/Games/Games.jsx';
// import Assignment from './Components/Assignment/Assignment.jsx';
// // import Courses from './Components/Courses/Courses.jsx';
// // import CourseDetailPage from './Components/Courses/CourseContent/CourseDetailPage';
// import Courses from './Components/Courses/Courses.jsx';
// import Header from './Components/Courses/Header.jsx';
// import CourseCategories from './Components/Courses/CourseCategories.jsx';
// import CourseContentPage from './Components/Courses/CourseContentPage.jsx';
// import CourseDetailPage from './Components/Courses/CourseDetailPage.jsx';
// import ScrollToTop from './Components/ScrollToTop.jsx';
// import ExamEditor from './Components/ExamEditor/ExamEditor.jsx';
// import ProgressPage from './Components/ProgressPage/ProgressPage.jsx';

// import ParentDashboard from './Components/ParentDashboard/ParentDashboard.jsx';


// function App() {
//   let routers=createBrowserRouter([
//     {path:'',element: (
//       <>
//         <ScrollToTop />
//         <Layout />
//       </>
//     ),children:
//     [ {index:true, element:<Home/>},
//       {path:'register', element:<Register/>},
//       {path:'login', element:<Login/>},
//       {path:'pdf', element:<Library/>},
//       {path:'video', element:<VideoLearning/>},
//       { path: 'exam-editor', element: <ExamEditor /> },
//       { path: 'progress', element: <ProgressPage /> },
//       { path: 'parent-dashboard', element: <ParentDashboard /> },

//       {
//         path: 'courses',
//         element: <Courses />,
//         children: [
//           {
//             index: true,
//             element: (
//               <>
//                 <Header />
//                 <CourseCategories />
//                 <CourseContentPage />
//               </>
//             ),
//           },
//           {
//             path: ':courseId',
//             element: <CourseDetailPage />,
//           },
//         ],
//       },
//       {path:'games', element:<Games/>},
//       {path:'Assignment', element:<Assignment/>}
//      ]} 
    
//   ])

//   return <>
//    <RouterProvider router={routers}></RouterProvider>
  
//   </>
// }

// export default App;


import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Library from './Components/pdf/pdf.jsx';
import VideoLearning from './Components/VideoLearning/VideoLearning.jsx';
import Games from './Components/Games/Games.jsx';
import Assignment from './Components/Assignment/Assignment.jsx';
import CourseContentPage from './Components/Courses/CourseContentPage.jsx';
import CourseDetailPage from './Components/Courses/CourseDetailPage.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

import Exams from './Components/Exams/Exams.jsx';
import QuizQuestion from './Components/QuizQuestion/QuizQuestion.jsx';
import ParentDashboard from './Components/ParentDashboard/ParentDashboard.jsx';
import ProgressPage from './Components/ProgressPage/ProgressPage.jsx';
import ExamEditor from './Components/ExamEditor/ExamEditor.jsx';
import Courses from './Components/Courses/Courses.jsx';
import Header from './Components/Courses/Header.jsx';
import ChatWidget from './Components/ChatWidget/ChatWidget.jsx';

import CourseCategories from './Components/Courses/CourseCategories.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function getRole() {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  try {
    const user = JSON.parse(userStr);
    return user.role;
  } catch {
    return null;
  }
}

function App() {
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
    } else {
      setRole(null);
    }
  }, []);


  const roleBasedRoutes = [];

  if (role === 'Child') {
    roleBasedRoutes.push(
      { path: 'courses', element: <CourseContentPage /> },
      { path: 'courses/:courseId', element: <CourseDetailPage /> },
      { path: 'exams', element: <Exams /> },
      { path: 'games', element: <Games /> },
      { path: 'quiz', element: <QuizQuestion /> },
      { path: 'assignment', element: <Assignment /> }
    );
  }

  if (role === 'Parent') {
    roleBasedRoutes.push(
      { path: 'parent-dashboard', element: <ParentDashboard /> },
      { path: 'progress', element: <ProgressPage /> },
      { path: 'exams', element: <Exams /> }

    );
  }

  if (role === 'Organizer') {
    roleBasedRoutes.push(
      { path: 'exam-editor', element: <ExamEditor /> }
    );
  }

  const routers = createBrowserRouter([
    {
      path: '',
      element: (
        <>
          <ScrollToTop />
          <Layout />
          <ChatWidget/>
        </>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'pdf', element: <Library /> },
        { path: 'video', element: <VideoLearning /> },
        {
          path: 'courses',
          element: <Courses />,
          children: [
            {
              index: true,
              element: (
                <>
                  <Header />
                  <CourseCategories />
                  <CourseContentPage />
                </>
              ),
            },
            {
              path: ':courseId',
              element: <CourseDetailPage />,
            },
          ],
        },
  
        // { path: 'courses', element: <CourseContentPage /> },
        { path: 'courses/:courseId', element: <CourseDetailPage /> },
        { path: 'exams', element: <Exams /> },
        { path: 'games', element: <Games /> },
        { path: 'quiz', element: <QuizQuestion /> },
        { path: 'parent-dashboard', element: <ParentDashboard /> },
        { path: 'assignment', element: <Assignment /> },
        { path: 'progress', element: <ProgressPage /> },
        { path: 'exam-editor', element: <ExamEditor /> },
        
        ...roleBasedRoutes,
        { path: '*', element: <div style={{ padding: "2rem" }}><h2>404 - Page Not Found</h2></div> }
      ]
    }
  ]);

  return <RouterProvider router={routers} />;
}


export default App;