import React from 'react';
import { Outlet } from 'react-router-dom';
// import Home from '../programing/Home';
import Navbar from '../programing/Navbar';


function Programming() {
    document.body.style.backgroundColor ="white";
  return (
    <div>
      <Navbar />
        {/* <Home/> */}
        <Outlet/>
    </div>
  )
}

export default Programming;