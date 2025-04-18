import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import{ Link } from 'react-scroll';
const Navbar= () => {
    return (
       <nav className="navbar">
         <img src={logo} alt="Logo" className="logo" />
         <div className="desktopMenu">
            <Link className="desktopMenuList" to="home">
              Home
            </Link>
            <Link className="desktopMenuList" to="about" >
              About
            </Link>
            <Link className="desktopMenuList" to="projects" >
              Projects
            </Link>
            <Link className="desktopMenuList" to="portfolio" >
              Portfolio
            </Link>
         </div>
         <button className="desktopMenuBtn">
   <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
</button>

       </nav>
    );
};
export default Navbar