import React from "react";
import bgimg from "../images/phpelephant.png";

let mystyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 100%",
  backgroundSize: "30rem",
  backgroundAttachment: "fixed",
};

const style2 = {
  color: "#505e9b",
  textShadow: '3px 4px 2px black',
  fontSize:"6rem"
};
function Php() {
  return (
    <>
      <div className="mt-2" style={mystyle} id="changeComponent">
        <center>
          <h1 className="mt-3" style={style2}>
            Php
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
              <h4>XAMPP Server to download and setup  :</h4>
              <a
                href="https://www.apachefriends.org/download.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to download the  XAMPP server
                </button>
              </a>
              <a
                href="https://youtu.be/PeAFYfVGL68"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the yahoobaba video(Hindi)
                </button>
              </a>
              <a
                href="https://youtu.be/at19OmH2Bg4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the video of codeWithHarry (hindi)
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
              <h4>1. php playlist from Yahoo Baba :</h4>
              <a
                href="https://youtube.com/playlist?list=PL0b6OzIxLPbyrzCMJOFzLnf_-_5E_dkzs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist (Hindi)
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4>2. php playlist from codeWithHarry : </h4>
              <a
                href="https://youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4>3. Learn PHP The Right Way from program with Gio <b>(new)</b>  </h4>
              <a
                href="https://youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-https://youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist
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
              <h4>1. W3 Schools :</h4>
              <a
                href="https://www.w3schools.com/php/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>2. Guru99</h4>
              <a
                href="https://www.guru99.com/php-tutorials.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

            
              <hr />
              {/*------------------ compiler block -------------- */}
              <center>
                <h2>
                  Comp<i className="fas fa-file-code"></i>iler:
                </h2>
              </center>
              <hr />
              <h4> &nbsp; php jdoodle Compiler</h4>
              <a
                href="https://www.jdoodle.com/php-online-editor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open online  compiler
                </button>
              </a>
            </div>
          </div>

          <div className="1-100"></div>

            {/* ------------practice questions block --------------- */}
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
  );
}

export default Php;
