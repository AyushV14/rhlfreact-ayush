import React, { useRef,  useState } from 'react'
import Logo from '../assets/images/LOGO1.png'
import '../CSS/Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  const [navcount, setnavcount] = useState(0)
  const navdiv=useRef(null)
  const hamburger=useRef(null)
  function handlenav() {
    if (navdiv.current) {
      if(navcount==0){
        navdiv.current.style.display='block'
        navdiv.current.style.transform = 'translateX(0px)';
        setnavcount(1)
        console.log(navcount)
      }
      else{
        navdiv.current.style.transform = 'translateX(1800px)'
        setnavcount(0)
        console.log(navcount)
      }
    }
    console.log('Sidebar clicked!'); // Correct log statement
  }
  return (
    <nav className='w-full px-7'>
      <ul className='w-full flex justify-around items-center'>
        <div className='w-1/5 z-10'>
          <li><img src={Logo} alt="" /></li>
        </div>
        <div className='navpage flex items-center gap-3 font-medium'>
      <NavLink 
        to="/" 
        className={({ isActive }) => `relative text-black`}
      >
        {({ isActive }) => (
          <span className="relative">
            Home
            {isActive && <span className="absolute left-0 -bottom-1 h-0.5 bg-black w-full" />}
          </span>
        )}
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => `relative text-black`}
      >
        {({ isActive }) => (
          <span className="relative">
            About us
            {isActive && <span className="absolute left-0 -bottom-1 h-0.5 bg-black w-full" />}
          </span>
        )}
      </NavLink>

      <NavLink 
        to="/programmes" 
        className={({ isActive }) => `relative text-black`}
      >
        {({ isActive }) => (
          <span className="relative">
            Programmes
            {isActive && <span className="absolute left-0 -bottom-1 h-0.5 bg-black w-full" />}
          </span>
        )}
      </NavLink>

      <NavLink 
        to="/clinic" 
        className={({ isActive }) => `relative text-black`}
      >
        {({ isActive }) => (
          <span className="relative">
            Our Clinics
            {isActive && <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black " />}
          </span>
        )}
      </NavLink>

      <NavLink 
        to="/getinvolved" 
        className={({ isActive }) => `relative text-black`}
      >
        {({ isActive }) => (
          <span className="relative">
            Get Involved
            {isActive && <span className="absolute left-0 -bottom-1 h-0.5 bg-black w-full" />}
          </span>
        )}
      </NavLink>

      <NavLink 
        to="/media" 
        className={({ isActive }) => `relative text-black`}
      >
        {({ isActive }) => (
          <span className="relative">
            Media
            {isActive && <span className="absolute left-0 -bottom-1 h-0.5 bg-black w-full" />}
          </span>
        )}
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) => `relative text-black`}
      >
        {({ isActive }) => (
          <span className="relative">
            Contact Us
            {isActive && <span className="absolute left-0 -bottom-1 h-0.5 bg-black w-full" />}
          </span>
        )}
      </NavLink>
    </div>
        <div>
          <li className='text-center donatebtn cursor-pointer font-bold px-3 py-1 bg-custompink text-white rounded-3xl'>Donate Now</li>
        </div>
        <div className="mobileview z-10" ref={hamburger} onClick={handlenav}>
          <i className="fa-solid fa-bars text-3xl"></i>
        </div>
        <div className='sidebar h-screen bg-white absolute w-screen ' ref={navdiv} >
            <ul className='flex h-full w-full flex-col justify-center items-center space-y-6 text-black text-xl pl-8'>
            <li><NavLink to="/">Home</NavLink></li>
            <li className='text-center'><NavLink to="/about">About us</NavLink></li>
            <li><NavLink to="/programmes">Programmes</NavLink></li>
            <li className='text-center'><NavLink to="/clinics">Our Clinics</NavLink></li>
            <li className='text-center'><NavLink to="/get-involved">Get Involved</NavLink></li>
            <li><NavLink to="/media">Media</NavLink></li>
            <li className='text-center'><NavLink to="/contact">Contact Us</NavLink></li>
            </ul> 
        </div>

      </ul>
    </nav>
)
}

export default Header