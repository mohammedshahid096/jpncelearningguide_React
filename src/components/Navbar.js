import React from 'react';
import {NavLink} from 'react-router-dom';


function Navbar() {
  return (
    <div id='navabar' className='mt-4'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item active">
        <NavLink to="/clang" className="nav-link">C Lang</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/cplusplus" className="nav-link">C++</NavLink>
      </li>
      <li className="nav-item"> 
      <NavLink to="/java" className="nav-link">Java</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/htmlcss" className="nav-link">Html/Css</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/javascript" className="nav-link">JavaScript</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/php" className="nav-link">Php</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/reactjs" className="nav-link">React JS</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/mysql" className="nav-link">MySql</NavLink>

      </li>
      <li className="nav-item">
        <NavLink to="/python" className="nav-link">Python</NavLink>

      </li>
      <li className="nav-item">
        <NavLink to="/bootstrap" className="nav-link">Bootstrap</NavLink>

      </li>
    </ul  >
  </div>
</nav>

    </div>
  )
}

export default Navbar