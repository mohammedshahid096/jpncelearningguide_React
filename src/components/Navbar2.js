import React from 'react';
import {NavLink} from 'react-router-dom';
import '../images/nav2.css';


function Navbar2() {
  function openNav(){
    document.getElementById("mySidenav").style.width = "260px";
  // document.getElementById("navabar").style.marginLeft = "250px";
  // document.getElementById("changeComponent").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  // document.getElementById("searchyoutubebutton").style.visibility="hidden";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("navabar").style.marginLeft= "0";
    // document.getElementById("changeComponent").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    // document.getElementById("searchyoutubebutton").style.visibility="visible";
  }
  const tempclick =()=>{
    document.body.style.backgroundColor = "white";
    document.getElementById("changeComponent").style.marginLeft= "0";

  }
  
  return (
    <div>
      <div id="mySidenav" className="sidenav">
      <i className="fas fa-times closebtn" id='closemenuicon' onClick={closeNav}></i>
  
  <NavLink to="/programming" onClick={tempclick} ><i className="fas fa-laptop-code"></i>Programming</NavLink>
  <NavLink to="/interview" onClick={tempclick} ><i className="fab fa-stack-overflow"></i> Interview</NavLink>
  <NavLink to="academic" onClick={tempclick}><i className="fas fa-book-open"></i> Academics</NavLink>
  <NavLink to="/*" onClick={tempclick} ><i className="fas fa-laptop"></i> Specifications</NavLink>
  <NavLink to="algorithms" onClick={tempclick} ><i className="fas fa-brain"></i> Algorithms</NavLink>

</div>
<div>
  <i className="fas fa-bars" id='menuopenicon' onClick={openNav}> <span>M <br /> E <br /> N <br /> U</span></i>

</div>

    </div>
  )
}

export default Navbar2;