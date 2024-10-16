import React, { useRef, useState, useEffect } from 'react';
import Logo from '../assets/images/LOGO1.png';
import { NavLink, useLocation } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
  const [navcount, setnavcount] = useState(0);
  const navdiv = useRef(null);
  const hamburger = useRef(null);
  const location = useLocation();

  const handlenav = () => {
    if (navcount === 0) {
      navdiv.current.style.display = 'block'; // Ensure it's set to block for the first time
      navdiv.current.style.transform = 'translateX(0)'; // Directly show the sidebar
      setnavcount(1);
      document.body.style.overflowX = 'hidden'; // Prevent horizontal scrolling
    } else {
      navdiv.current.style.transform = 'translateX(100%)';
      setnavcount(0);
      document.body.style.overflowX = 'hidden'; // Allow horizontal scrolling again
    }
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (navdiv.current && !navdiv.current.contains(event.target) && !hamburger.current.contains(event.target)) {
        navdiv.current.style.transform = 'translateX(100%)';
        setnavcount(0);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navdiv, hamburger]);

  // Close sidebar when navigating
  useEffect(() => {
    if (navcount === 1) {
      navdiv.current.style.transform = 'translateX(100%)';
      setnavcount(0);
    }
  }, [location]);

  const closeSidebar = () => {
    navdiv.current.style.transform = 'translateX(100%)';
    setnavcount(0);
    navdiv.current.style.display = 'none'; // Hide the sidebar after closing
  };

  return (
    <nav className='w-full px-10 pt-3 max-md:mr-10 max-md:mb-5'>
      <ul className='w-full flex justify-between items-center'>
        <div className='w-[100%] z-10 md:w-1/5 max-md:mr-10'>
          <li><img src={Logo} alt="Logo" className='w-[110px] h-auto max-md:w-24 max-md:h-20' /></li>
        </div>
        <div className='navpage hidden md:flex items-center gap-4 font-medium ml-72'>
          <NavLink to="/" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>About us</NavLink>
          <div className="relative group">
            <NavLink to="/programmes" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Programmes</NavLink>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold">Main Programmes</h4>
                  <ul className="space-y-1">
                    <li><NavLink to="/programmes/emergency-medical-support" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Emergency Medical Support</NavLink></li>
                    <li><NavLink to="/programmes/mission-zero-hunger" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Mission Zero Hunger</NavLink></li>
                    <li><NavLink to="/programmes/mission-education" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Mission Education Program</NavLink></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Health & Wellness</h4>
                  <ul className="space-y-1">
                    <li><NavLink to="/programmes/public-health-and-nutrition" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Public Health and Nutrition</NavLink></li>
                    <li><NavLink to="/programmes/mission-smile" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Mission Smile Program</NavLink></li>
                    <li><NavLink to="/programmes/disability-elimination" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Disability Elimination Program</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/clinic" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Our Clinics</NavLink>
          <NavLink to="/getinvolved" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Get Involved</NavLink>
          <NavLink to="/media" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Media</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Contact Us</NavLink>
        </div>

          

        <button className='flex px-3 py-2 rounded-3xl bg-custompink text-white items-center gap-1' >
        <span>Donate Now</span>
         <span className='pt-1'>
          <svg width="20" height="18" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_220_604" fill="white">
            <path d="M11.876 16.3306C12.3103 17.0433 12.5253 17.8531 12.4976 18.6716C12.4699 19.4901 12.2006 20.2857 11.719 20.9717C11.2374 21.6577 10.5621 22.2076 9.76678 22.5614C8.97148 22.9152 8.08679 23.0593 7.2093 22.9779C6.3318 22.8965 5.49526 22.5928 4.79102 22.1C4.08677 21.6071 3.5419 20.9441 3.2159 20.1832C2.88991 19.4224 2.79532 18.5929 2.94247 17.7856C3.08963 16.9782 3.47286 16.2239 4.05032 15.605L4.61241 16.0572C4.12419 16.5804 3.80018 17.2182 3.67577 17.9008C3.55136 18.5834 3.63133 19.2846 3.90694 19.9279C4.18256 20.5712 4.64323 21.1318 5.23864 21.5485C5.83405 21.9651 6.54131 22.2219 7.2832 22.2907C8.02508 22.3595 8.77306 22.2377 9.44545 21.9386C10.1178 21.6394 10.6888 21.1745 11.096 20.5945C11.5031 20.0146 11.7309 19.3419 11.7543 18.6499C11.7777 17.9579 11.5959 17.2733 11.2287 16.6707L11.876 16.3306Z"/>
            </mask>
            <path d="M11.876 16.3306C12.3103 17.0433 12.5253 17.8531 12.4976 18.6716C12.4699 19.4901 12.2006 20.2857 11.719 20.9717C11.2374 21.6577 10.5621 22.2076 9.76678 22.5614C8.97148 22.9152 8.08679 23.0593 7.2093 22.9779C6.3318 22.8965 5.49526 22.5928 4.79102 22.1C4.08677 21.6071 3.5419 20.9441 3.2159 20.1832C2.88991 19.4224 2.79532 18.5929 2.94247 17.7856C3.08963 16.9782 3.47286 16.2239 4.05032 15.605L4.61241 16.0572C4.12419 16.5804 3.80018 17.2182 3.67577 17.9008C3.55136 18.5834 3.63133 19.2846 3.90694 19.9279C4.18256 20.5712 4.64323 21.1318 5.23864 21.5485C5.83405 21.9651 6.54131 22.2219 7.2832 22.2907C8.02508 22.3595 8.77306 22.2377 9.44545 21.9386C10.1178 21.6394 10.6888 21.1745 11.096 20.5945C11.5031 20.0146 11.7309 19.3419 11.7543 18.6499C11.7777 17.9579 11.5959 17.2733 11.2287 16.6707L11.876 16.3306Z" stroke="white" strokeWidth="2" mask="url(#path-1-inside-1_220_604)"/>
        <path d="M4.08824 15.5139L2.32514 11.6112C1.81495 10.4819 1.94945 9.16569 2.67753 8.1629L4.71693 5.35399C5.1492 4.75862 5.76044 4.31698 6.46144 4.09354L15.6878 1.15265C16.0005 1.05296 16.3346 1.04405 16.6499 1.13555C17.2846 1.31979 18.4555 1.68032 19.6176 2.14583C21.1525 2.76062 23.5 4.4375 23.5 4.4375L20.9118 7.875C20.9118 7.875 19.6176 9.78472 18.7549 12.4583C17.8922 15.1319 12.2843 15.8958 12.2843 15.8958L8.25811 17.8403C7.80207 18.0606 7.2723 18.0693 6.80921 17.8643L5.47381 17.2731C5.13433 17.1228 4.85238 16.8671 4.66983 16.5438L4.08824 15.5139ZM4.08824 15.5139L7.10784 13.2222M7.10784 13.2222L9.54659 12.1426C9.64537 12.0988 9.73506 12.0369 9.81099 11.9601L11.4431 10.3086C11.9534 9.79214 11.6365 8.91466 10.9139 8.84357L9.39267 8.69392C9.05267 8.66047 8.72496 8.8308 8.55697 9.12829L8.15976 9.83168C8.03936 10.0449 7.83404 10.1969 7.59498 10.2498L7.17088 10.3437C6.67433 10.4536 6.3801 10.967 6.53628 11.451L7.10784 13.2222Z" stroke="white"/></svg>
        </span> 
      </button>

        <div className="mobileview z-10 block lg:hidden" ref={hamburger} onClick={handlenav}>
          <i className="fa-solid fa-bars text-3xl"></i>
        </div>

        <div className='sidebar h-[80%] mt-[550px] bg-white absolute w-screen transform translate-x-full transition-transform duration-300 ease-in-out' ref={navdiv}>
          <ul className='flex h-full w-full flex-col justify-center items-center space-y-6 text-black text-xl pl-8'>
            <li><NavLink to="/" onClick={closeSidebar}>Home</NavLink></li>
            <li className='text-center'><NavLink to="/about" onClick={closeSidebar}>About us</NavLink></li>
            <li><NavLink to="/programmes" onClick={closeSidebar}>Programmes</NavLink></li>
            <li className='text-center'><NavLink to="/clinic" onClick={closeSidebar}>Our Clinics</NavLink></li>
            <li className='text-center'><NavLink to="/getinvolved" onClick={closeSidebar}>Get Involved</NavLink></li>
            <li><NavLink to="/media" onClick={closeSidebar}>Media</NavLink></li>
            <li className='text-center'><NavLink to="/contact" onClick={closeSidebar}>Contact Us</NavLink></li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
