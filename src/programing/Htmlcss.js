import React from 'react';
import bgimg from "../images/htmlcss.png";

let mystyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 85%",
  backgroundSize: "35rem",
  backgroundAttachment: "fixed",
};

const style2 = {
  color: "#2254c9",
  textShadow: '3px 4px 3px #e44d26'
};
function Htmlcss() {
  return (
    <div>
        <>
      <div className="mt-2" style={mystyle} id="changeComponent">
        <center>
          <h1 className="mt-3" style={style2}>
            Html &amp; Css
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
              <h4>VSCode download and setup  :</h4>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to download the vs code
                </button>
              </a>
              <a
                href="https://youtu.be/fWzp5lZ5CEA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the video (English)
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
              <h4>1. Complete playlist from Code with:</h4>
              <a
                href="https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the video (HINDI)
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4>2. Complete Lecture html and css Video  : </h4>
              <a
                href="https://youtu.be/G3e-cpL7ofc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the video (6 hours)
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4>3. HTML playlist from Yahoo Baba : </h4>
              <a
                href="https://youtube.com/playlist?list=PL0b6OzIxLPbxStBQ21C2toa5uQMqHEoRT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist of only HTML(hindi)
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4>4. CSS playlist from Yahoo Baba : </h4>
              <a
                href="https://youtube.com/playlist?list=PL0b6OzIxLPbzDsI5YXUa01QzxOWyqmrWw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist of only CSS(hindi)
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
              <h4>1. HTML from w3schools :</h4>
              <a
                href="https://www.w3schools.com/html/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>2.CSS from W3 Schools :</h4>
              <a
                href="https://www.w3schools.com/css/css_intro.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>
              
              <hr />
              <center>
                <h2>
                  Comp<i className="fas fa-file-code"></i>iler:
                </h2>
              </center>
              <hr />
              <h4>1.Pen Code</h4>
              <a
                href="https://codepen.io/pen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Pen Code
                </button>
              </a>
              <h4>2.JDoole for html/css/js</h4>
              <a
                href="https://www.jdoodle.com/html-css-javascript-online-editor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open jDoodle
                </button>
              </a>
            </div>
          </div>

          <div className="1-100"></div>

          <div className="col-md-6 mt-3">
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
    </div>
  )
}

export default Htmlcss