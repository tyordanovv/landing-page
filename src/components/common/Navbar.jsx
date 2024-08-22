import React, { useState, useEffect } from "react";
import './Navbar.css';
import '../../fonts.css';
import Logo from '../../images/Accademium_Logo_Cropped.png';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
       setIsBurgerMenu(true);
    } else if(window.innerWidth <= 1024){
      setIsBurgerMenu(true);
    }else{
      setIsBurgerMenu(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <img src={Logo} className="accademium-logo"/>
      {isBurgerMenu && (
        <div className="burger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      )}
      <div className={`menu ${isBurgerMenu && isMenuOpen ? 'active' : ''}`}>
        <div className="dropdown-container">
          <button onClick={() => toggleDropdown('dropM1')} className="dropdown-toggle">
            Universities &#11167;
          </button>
          {activeDropdown === 'dropM1' && (
            <div className="dropdown">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          )}
        </div>
        <div className="dropdown-container">
          <button onClick={() => toggleDropdown('dropM2')} className="dropdown-toggle">
            Studying abroad &#11167;
          </button>
          {activeDropdown === 'dropM2' && (
            <div className="dropdown">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          )}
        </div>
        <div className="dropdown-container">
          <button onClick={() => toggleDropdown('dropM3')} className="dropdown-toggle">
            Career Orientation &#11167;
          </button>
          {activeDropdown === 'dropM3' && (
            <div className="dropdown">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          )}
        </div>
        <div>
          <a href="#">
            <button className="about-us">About us</button>
          </a>
        </div>
        <div>
          <a href="#">
            <button className="contact">Contact</button>
          </a>
        </div>
        <div>
          <a href="#">
            <button className="sign-in">Sign In</button>
          </a>
        </div>
        <div>
          <a href="#">
            <button className="sign-up">Sign Up</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
