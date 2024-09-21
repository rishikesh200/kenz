import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from './../assets/logo.png';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar-container ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='navbar-logo'>
        <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
        <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      
      <div className={`navcontainer ${isMenuOpen ? 'active' : ''}`}>
        <ul className='navul'>
         
          <li><NavLink to="About" className={({ isActive }) => (isActive ? 'active-link' : '')}>About Us</NavLink></li>
          <li><NavLink to="Water Treatment" className={({ isActive }) => (isActive ? 'active-link' : '')}>Water Treatment</NavLink></li>
          <li><NavLink to="Alkaline Water Purifier" className={({ isActive }) => (isActive ? 'active-link' : '')}>Alkaline Water Purifier</NavLink></li>
          <li><NavLink to="Construction-works" className={({ isActive }) => (isActive ? 'active-link' : '')}>Construction works</NavLink></li>
         
        </ul>
        <div className='navcar'>
        <li><NavLink to="Contsctus" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact Us</NavLink></li>

        </div>
      </div>
    </div>
  );
};
