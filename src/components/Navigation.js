import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link activeClass="nav-item-active" to="hero" spy={true} smooth={true} offset={-70} duration={500} className="nav-item">Home</Link></li>
        <li><Link activeClass="nav-item-active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-item">About</Link></li>
        <li><Link activeClass="nav-item-active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-item">Projects</Link></li>
        <li><Link activeClass="nav-item-active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-item">Skills</Link></li>
        <li><Link activeClass="nav-item-active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-item">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;