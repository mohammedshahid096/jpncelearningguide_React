import React from 'react';
import Navbar from './Navbar';
import bgimg from './background.png';

let mystyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 100%",
  backgroundSize: "85rem",
  backgroundAttachment: "fixed",
  height:"500px"
};

function Home() {
  return (
    <div>
        <Navbar/>
        <div style={mystyle}>
        <center><h1>page is on workinggg</h1></center>

        </div>
    </div>
  )
}

export default Home