import React from 'react'
import styles from './Layout.module.css';
import Navbar from '../Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';


export default function Layout() {
  return <>
    
     <div className="Container">
      <Outlet></Outlet>
     </div>

    </>
}
