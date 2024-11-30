import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx"
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default HomePage