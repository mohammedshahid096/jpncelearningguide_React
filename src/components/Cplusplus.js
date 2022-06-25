import React from 'react';
import Navbar from './Navbar';
import bgimg from '../images/C++.png';

function Cplusplus() {
  const mystyle ={
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition:"50% 90%",
    backgroundSize: "25rem",
    backgroundAttachment:"fixed"
  };
  const style2 ={
    color: "#1e8ee4d3"
  }
  return (
    <>
         <Navbar />
      <div className="mt-2" style={mystyle} id="changeComponent">
        <center>
          <h1 className="mt-3" style={style2}>
            C++
          </h1>
        </center>

        <div className="row p-4" id="rowDiv1">

          {/* ------------------Editors Block---------------------------------- */}
          <div className="col-md-6 offset-md-3">
            <div className="row" id="editorBlock">
              <center>
                <h2>Edi <i className="fas fa-terminal"></i>tor</h2>
              </center>
              <hr />
              
              <h4>1.code blocks download link :</h4>
              <a
                href="https://www.codeblocks.org/downloads/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to visit the download page
                </button>
              </a>
              <a
                href="https://youtu.be/TmT8zXy7zU8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to visit the youtube page to setup environment variables
                </button>
              </a>
            </div>
          </div>

          {/* ----------------------empty------------------------------------ */}
          <div className="w-100 m-3"></div> 


          {/* ----------------------youtube block------------------------------------ */}
          <div className="col-md-6">
            <div className="row p-2" id="youtubeblock">
              <center>
                <h2>
                  You<i className="fab fa-youtube"></i>Tube:
                </h2>
              </center>
              <hr />
              <h4>1. Complete Neso Academy Cpp Language Video Series :</h4>
              <a
                href="https://youtube.com/playlist?list=PLBlnK6fEyqRh6isJ01MBnbNpV3ZsktSyS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist (English)
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4>2. Complete cpp basics  : </h4>
              <a
                href="https://youtu.be/vLnPwxZdW4Y"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the video
                </button>
              </a>

            </div>
          </div>

          {/* ------------------website block---------------------------- */}
          <div className="col-md-5  offset-md-1 ">
            <div className="row p-2" id="websiteblock">
              <center>
                <h2>
                  Websites<i className="fas fa-laptop-code"></i>  :
                </h2>
              </center>
              <hr />
              <h4>1. Learn Cpp Programming :</h4>
              <a
                href="https://www.programiz.com/cpp-programming"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>2. W3 Schools :</h4>
              <a
                href="https://www.w3schools.com/c/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <center>
                <h2>
                Compiler <i className="fas fa-file-code"></i>  :
                </h2>
              </center>
              <hr />
              <h4> &nbsp; Cpp online Compiler</h4>
              <a
                href="https://www.programiz.com/c-programming/online-compiler/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open online Cpp compiler
                </button>
              </a>
            </div>
          </div>

          <div className="1-100"></div>

          <div className="col-md-6 mt-3">
            <div className="row" id="practiceQuestionBlock">
              <center>
                <h2>
                Practice Questions<i className="fas fa-question-circle"></i>
                </h2>
              </center>
              <hr />
              <h4>1. 85+ Cpp Questions to practice: </h4>
              <a
                href="https://www.w3resource.com/cpp-exercises/basic/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to start practining
                </button>
              </a>
            </div>
          </div>

          {/* -----------------interview block------------------------------- */}
          <div className="col-md-5  offset-md-1 ">
            <div className="row p-2 mt-3" id="websiteblock">
              <center>
                <h2>
                  interview<i className="fas fa-star"></i>Questions:
                </h2>
              </center>
              <hr />
              <h4>1. Learn Cpp Programming :</h4>
              <a
                href="https://www.programiz.com/cpp-programming"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>2. W3 Schools :</h4>
              <a
                href="https://www.w3schools.com/cpp/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>
            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default Cplusplus