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
        <a className="nav-link" href="/*">Html/Css</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/*">JavaScript</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/*">Php</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/*">Reactjs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/*">MySql</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/*">Python</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/*">Bootstrap</a>
      </li>
    </ul  >
  </div>
</nav>

    </div>
  )
}

export default Navbar