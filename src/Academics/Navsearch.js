import React from 'react';
import {NavLink} from 'react-router-dom';

function Navsearch() {
  return (
    <div>
        <center>
        <NavLink to="/academic" > <button className='btn btn-primary mx-4'>YouTube</button></NavLink>
        <NavLink to="/academic/pdfsearch" > <button className='btn btn-danger mx-4'>PDF'S</button></NavLink>
        </center>
    </div>
  )
}

export default Navsearch