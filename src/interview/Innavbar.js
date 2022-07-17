import React from 'react';
import {NavLink} from 'react-router-dom';


export default function Innavbar() {
  return (
    <>

    <div  className='mt-4' id='interviewnavbg'  >
        <nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/interview/home">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav" >
    <ul className="navbar-nav mx-auto" >

      <li className="nav-item active">
        <NavLink to="/interview/quantitative" className="nav-link">Quantitative </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/interview/logical" className="nav-link">Logical Reasoning</NavLink>
      </li>

      <li className="nav-item" style={{border:"none"}}>
        <NavLink to="/interview/Verbal" className="nav-link">Verbal Ability</NavLink>
      </li>

    </ul  >
  </div>
</nav>
    </div>
    </>
  )
}
