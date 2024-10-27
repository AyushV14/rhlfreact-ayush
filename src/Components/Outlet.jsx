import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton'; // Import the WhatsApp button

function Layout() {
  return (
    <div className="w-full">
        <Header />
        <Outlet />
        <Footer />
        <WhatsAppButton /> {/* Add the WhatsApp button here */}
    </div>
  );
}

export default Layout;
