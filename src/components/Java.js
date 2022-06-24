import React from 'react';
import Navbar from './Navbar';
import bgimg from './java.png';


const mystyle ={
    backgroundImage: `url(${bgimg})`,
    // backgroundImage: "url('https://brandslogos.com/wp-content/uploads/images/large/java-logo-1.png')',
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
    <center>
    {/* <div className="row w-50" id='youtubeblock'>heheh</div> */}

    </center>
    <div className="row p-4" id='rowDiv1'>
      {/* ---------------------------------------------------------- */}
        <div className="col-md-6" >
          <div className="row p-2" id='youtubeblock'>
          <center><h2> You<i className="fab fa-youtube"></i>Tube:</h2></center>
          <hr />
          <h4>1. Complete Neso Academy C Language Video Series :</h4>
          <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to watch the playlist (English)</button>
          </a>   

          <center><h3>or</h3></center>
          <h4>2. Complete Jenny's Lectures C Language Video Series : </h4>
          <a href="https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to watch the playlist</button>
          </a>

          <center><h3>or</h3></center>
          <h4>3. Basic  C Language concepts from Telusko : </h4>
          <a href="https://youtube.com/playlist?list=PLsyeobzWxl7oBxHp43xQTFrw9f1CDPR6C" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to watch the playlist</button>
          </a>
          </div>
        </div>

        {/* ---------------------------------------------- */}
        <div className="col-md-5  offset-md-1 " >
          <div className="row p-2" id='websiteblock'>
          <center> <h2>Web<i className="fas fa-laptop-code"></i>sites:</h2></center>
          <hr />
          <h4>1. Learn C Programming :</h4>
          <a href="https://www.programiz.com/c-programming" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to open Website</button>
          </a>

          <h4>2. W3 Schools :</h4>
          <a href="https://www.w3schools.com/c/index.php" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to open Website</button>
          </a>

          <hr />
          <center> <h2>Comp<i className="fas fa-file-code"></i>iler:</h2></center>
          <hr />
          <h4> &nbsp; C online Compiler</h4>
          <a href="https://www.programiz.com/c-programming/online-compiler/" target="_blank" 
          rel="noopener noreferrer">
          <button type="button" className="btn btn-info m-2">Click here to open online C compiler</button>
          </a>

          </div>
        </div>
    </div>

    </div>    
    </>
  )
}

export default Java