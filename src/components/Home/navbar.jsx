import React, { Component } from 'react';
import { FaLaptopHouse } from 'react-icons/fa';

const Navbar = () => {
     return ( 
          <nav className="nav_container">
               <div className="logo">
               <FaLaptopHouse  className='logo-icon'/> 
               <p className="logo-name">
                    Software developer 
               </p>
               </div>
               <ul className="nav-menu">
                    <li className="nav-item">
                         <a href="" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                         <a href="" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                         <a href="" className="nav-link">Contact</a>
                    </li>
               </ul>
          </nav>
      );
}
 
export default Navbar;