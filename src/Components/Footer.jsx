import React from 'react'
import '../CSS/Footer.css'
import LOGO1 from '../assets/images/LOGO1.png'
import mastercard from '../assets/images/mastercard.svg'
import paytm from '../assets/images/Paytm New.svg'
import visa from '../assets/images/visa.svg'
import secures from '../assets/images/securelogo.svg'
import americanexpress from '../assets/images/Americanexpresslogo.jpeg'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='container' >
      <div className="fullsection flex border">
        <div className="section-1">
          <div className="logo">
            <img src={LOGO1} alt="" />
          </div>
          <div className='details mb-0.5'>
            <p className='text-gray-500 leading-relaxed'>H.no . 4453, Sathe Nagar near Manoj Kirana Store Narpoli, Bhiwandi, Thane, Maharashtra-421305</p>
            <p className='text-gray-500 leading-relaxed'>PAN no. AALCR3060M</p>
            <p className='text-gray-500 leading-relaxed'>Registration no. U85300MH2021NPL368070 </p>
          </div>
          <NavLink to="#" className='text-custompink'>View Map <i className="fa-solid fa-paper-plane"></i> </NavLink>
        </div>
        <div className="section-2">
            <h3 className='font-bold text-xl'>Get in Touch!</h3>
            <div className="locationdetails">
              <p className='leading-loose'><span className='px-1'><i className="fa-solid fa-location-dot text-custompink inline-block w-4"></i></span><span className='text-gray-500 leading-relaxed'>THANE, MAHARASHTRA, INDIA</span></p>
              <p className='leading-loose'><span className='px-1'><i className="fa-solid fa-phone-volume text-custompink"></i></span><span className='text-gray-500 leading-relaxed'>+91 9607753148</span></p>
              <p className='leading-loose'><span className='px-1'><i className="fa-solid fa-envelope text-custompink"></i></span><span className='text-gray-500 leading-relaxed'>info@rhlf.org</span></p>
            </div>
        </div>
        <div className="section-3">
          <h3 className='font-bold text-xl'>Quick Links</h3>
          <div>
            <p className='text-gray-500 leading-relaxed'>Privacy Policy</p>
            <p className='text-gray-500 leading-relaxed'>Terms & Condition</p>
            <p className='text-gray-500 leading-relaxed'>Refund Policy</p>
            <p className='text-gray-500 leading-relaxed'>Child Protection Policy</p>
            <p className='text-gray-500 leading-relaxed'>Posh Policy</p>
          </div>
        </div>
      </div>
      <div className="logos flex w-full justify-end h-1/6">
        <img srcSet={visa} alt=""  className='h-14'/>
        <img src={mastercard} alt=""  className='h-14'/>
        <img src={paytm} alt=""  className='h-14'/>
        <img src={secures} alt=""  className='h-14'/>
        <img src={americanexpress} alt=""  className='h-14'/>
      </div>
    </div>
  )
}

export default Footer
