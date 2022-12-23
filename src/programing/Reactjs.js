import React from 'react';
import bgimg from '../images/react.png';

function Reactjs() {
  const mystyle ={
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition:"50% 90%",
    backgroundSize: "25rem",
    backgroundAttachment:"fixed"
  };
  const style2 ={
    color: "#61dafb"
  }
  return (
    <>

      <div className="mt-2" style={mystyle} id="changeComponent">
        <center>
          <h1 className="mt-3" style={style2}>
            React JS
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
              <h4 >1. Complete React js setup and video :</h4>
              <a
                href="https://nodejs.org/en/download/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open nodejs download link
                </button>
              </a>
              
              <a
                href="https://youtu.be/-mJFZp84TIY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch setup link 
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
              <h4 className='m-0 '>1. React Js playlist from Code Step By Step :
              <br /><small style={{fontSize:"medium"}}>based on functional based component (recomanded)</small>
              </h4>
              
              <a
                href="https://youtube.com/playlist?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist (hindi)
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4 >2. React js playlist from Codevolution :
                <br /> <small style={{fontSize:"medium"}}>based on class based component </small>
                 </h4>
              
              <a
                href="https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"
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
              <h4>3. React js playlist from  Telugu Skillhub : </h4>
              
              <a
                href="https://youtube.com/playlist?list=PLWnZ0qt0PImVaDkDbF96dnRGO0_lXVLKf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist (Telugu)
                </button>
              </a>
            </div>
          </div>

          {/* ------------------website block---------------------------- */}
          <div className="col-md-5  offset-md-1 ">
            <div className="row p-2" id="websiteblock">
              <center>
                <h2>
                  Web<i className="fas fa-laptop-code"></i>sites:
                </h2>
              </center>
              <hr />
              <h4>1. React js official documentation :</h4>
              <a
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>2. W3 Schools :</h4>
              <a
                href="https://www.w3schools.com/REACT/DEFAULT.ASP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <hr />
              {/* ---------compiler block ------------------ */}
              <center>
                <h2>
                  Comp<i className="fas fa-file-code"></i>iler:
                </h2>
              </center>
              <hr />
              <center>
              <h4> &nbsp; CodeSandbox</h4>
              <a
                href="https://codesandbox.io/s/react-new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open online Terminal
                </button>
              </a>
              </center>
            </div>
          </div>

          <div className="1-100"></div>

          <div className="col-md-6 mt-3">

            {/* ----------practice questions block---------- */}
            <div className="row" id="practiceQuestionBlock">
              <center>
                <h2>
                  Questions<i className="fas fa-question-circle"></i>practice:
                </h2>
              </center>
              <hr />
              <center>
              <h2><i className="fas fa-times-circle"></i>
                <br />
                <small>Not yet posted</small>    
                </h2>
              </center>
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
              <center>
              <h2><i className="fas fa-times-circle"></i>
                <br />
                <small>Not yet posted</small>    
                </h2>
              </center>
            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default Reactjs