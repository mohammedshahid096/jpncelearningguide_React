import React from 'react';
import {NavLink} from 'react-router-dom';


function Navbar() {

  return (
    <>
    <div id='navabar' className='mt-4'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <a className="navbar-brand" href="/programming">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item active">
        <NavLink to="/programming/clang" className="nav-link" data-toggle="collapse" data-target="#navbarNav"  >C Lang</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/programming/cplusplus" className="nav-link" data-toggle="collapse" data-target="#navbarNav" >C++</NavLink>
      </li>
      <li className="nav-item"> 
      <NavLink to="/programming/java" className="nav-link" data-toggle="collapse" data-target="#navbarNav" >Java</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/programming/htmlcss" className="nav-link" data-toggle="collapse" data-target="#navbarNav" >Html/Css</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/programming/javascript" className="nav-link" data-toggle="collapse" data-target="#navbarNav" >JavaScript</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/programming/php" className="nav-link" data-toggle="collapse" data-target="#navbarNav" >Php</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/programming/reactjs" className="nav-link" data-toggle="collapse" data-target="#navbarNav" >React JS</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/programming/mysql" className="nav-link" data-toggle="collapse" data-target="#navbarNav" >MySql</NavLink>

      </li>
      <li className="nav-item">
        <NavLink to="/programming/python" className="nav-link" data-toggle="collapse" data-target="#navbarNav" >Python</NavLink>

      </li>
      <li className="nav-item">
        <NavLink to="/programming/bootstrap" className="nav-link" data-toggle="collapse" data-target="#navbarNav" >Bootstrap</NavLink>

      </li>
    </ul  >
  </div>
</nav>
    </div>
    </>
  )
}

export default Navbar