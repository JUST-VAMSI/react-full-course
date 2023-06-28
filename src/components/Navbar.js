import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaHome, FaUserCircle, FaUser} from 'react-icons/fa';
const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/"><FaHome/>Home</NavLink>
            <NavLink to="/about"><FaUserCircle/>About</NavLink>
            <NavLink to="/contact"><FaUser/>Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar