import React from 'react';
import Navbar from './Navbar';
import bgimg from '../images/java.png';


const mystyle ={
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition:"50% 73%",
    backgroundSize: "29rem",
    backgroundAttachment: "fixed"
  };
  const style2 ={
    color: "#cb2d2e"
  }

function Java() {
  return (
    <>
    <Navbar/>
   <div className='mt-2' style={mystyle}  id="changeComponent">
    <center><h1 className='mt-3' style={style2}>JAVA</h1></center>
  <div>
    <div className="row" id="editorBlock">
              <center>
                <h2>Edi <i className="fas fa-terminal"></i>tor</h2>
              </center>
              <hr />
              <h4>DOWNLOAD JAVE AND SET ENVIRONMENT VARIABLES</h4>
              <a
                href="https://www.oracle.com/java/technologies/downloads/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to visit the download page
                </button>
              </a>
              <a
                href="https://youtu.be/zAyIqbBAUxQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to visit the youtube page to setup environment variables
                </button>
              </a>
            </div>
          </div>
    <center>
    {/* <div className="row w-50" id='youtubeblock'>heheh</div> */}

    </center>
    <div className="row p-4" id='rowDiv1'>
      {/* ---------------------------------------------------------- */}
        <div className="col-md-6" >
          <div className="row p-2" id='youtubeblock'>
          <center><h2> YouTube:<i className="fab fa-youtube"></i></h2></center>
          <hr />
          <h4>1. Complete Neso Academy java Language Video Series :</h4>
          <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to watch the playlist (English)</button>
          </a>   
          <center><h3>or</h3></center>
          <h4>3. Basic  java Language concepts from Telusko : </h4>
          <a href="https://youtu.be/8cm1x4bC610" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to watch the playlist</button>
          </a>

          </div>
        </div>

        {/* ---------------------------------------------- */}
        <div className="col-md-5  offset-md-1 " >
          <div className="row p-2" id='websiteblock'>
          <center> <h2>Web<i className="fas fa-laptop-code"></i>sites:</h2></center>
          <hr></hr>
          <h4>1.Java Tpoint :</h4>
          <a href="https://www.programiz.com/java-programming" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to open Website</button>
          </a>

          <h4>2. W3 Schools :</h4>
          <a href="https://www.w3schools.com/java/" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to open Website</button>
          </a>

          <h4>3. Learn java Programming :</h4>
          <a href="https://www.javatpoint.com/java-tutorial" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to open Website</button>
          </a>


          <hr />
          <center> <h2>Compiler:<i className="fas fa-file-code"></i></h2></center>
          <hr />
          <h4> &nbsp; java online Compiler</h4>
          <a href="https://www.programiz.com/java-programming/online-compiler/" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to open online java compiler</button>
          </a>

          </div>
        </div>
    </div>

    </div>    
    </>
  )
}

export default Java