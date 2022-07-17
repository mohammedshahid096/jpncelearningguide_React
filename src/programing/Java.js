import React from "react";
import bgimg from "../images/java.png";

const mystyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 73%",
  backgroundSize: "29rem",
  backgroundAttachment: "fixed",
};
const style2 = {
  color: "#cb2d2e",
};

function Java() {
  return (
    <>
      <div className="mt-2" style={mystyle} id="changeComponent">
        <center>
          <h1 className="mt-3" style={style2}>
            JAVA
          </h1>
        </center>
        {/* <div> */}

        <div className="row p-4" id="rowDiv1">
          {/* --------------------Editor block-------------------------------------- */}
          <div className="col-md-6 offset-md-3">
            <div className="row" id="editorBlock">
              <center>
                <h2>
                  Edi <i className="fas fa-terminal"></i>tor
                </h2>
              </center>
              <hr />
              <h4>Download JAVA and Set Environment Variables</h4>
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
                  Click here to visit the youtube page to setup environment
                  variables
                </button>
              </a>
            </div>
          </div>

          {/* ----------------------empty------------------------------------ */}
          <div className="w-100 m-3"></div>

          {/* --------------------yout tube block-------------------------------------- */}
          <div className="col-md-6">
            <div className="row p-2" id="youtubeblock">
              <center>
                <h2>
                  {" "}
                  YouTube:<i className="fab fa-youtube"></i>
                </h2>
              </center>
              <hr />
              <h4>1. Complete Neso Academy java Language Video Series :</h4>
              <a
                href="https://youtube.com/playlist?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5"
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
              <h4>2. Basic java Language concepts from Telusko : </h4>
              <a
                href="https://youtu.be/8cm1x4bC610"
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
              <h4>3. Basic java from Sundeep Saradhi Kanthety : </h4>
              <a
                href="https://youtube.com/playlist?list=PLLOxZwkBK52BaOQCJrVvkc97uzeMsx9TT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist
                </button>
              </a>
              <br />
              <br />
              <br />

              <h4>4. Java IO streams from Hari Krishna : </h4>
              <a
                href="https://youtube.com/playlist?list=PLVlQHNRLflP_ccU_tekCCCy3aQMXB9q-c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to refer all the IO Stream concepts
                </button>
              </a>
            </div>
          </div>

          {/* ---------------------------------------------- */}
          <div className="col-md-5  offset-md-1 ">
            <div className="row p-2" id="websiteblock">
              <center>
                {" "}
                <h2>
                  Web<i className="fas fa-laptop-code"></i>sites:
                </h2>
              </center>
              <hr></hr>
              <h4>1.Java Tpoint :</h4>
              <a
                href="https://www.programiz.com/java-programming"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>2. W3 Schools :</h4>
              <a
                href="https://www.w3schools.com/java/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>3. Learn java Programming :</h4>
              <a
                href="https://www.javatpoint.com/java-tutorial"
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
                  Compiler:<i className="fas fa-file-code"></i>
                </h2>
              </center>
              <hr />
              <h4>1. &nbsp; java online Compiler</h4>
              <a
                href="https://www.programiz.com/java-programming/online-compiler/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open online java compiler
                </button>
              </a>
              <h4>2. &nbsp; java JDoole Compiler</h4>
              <a
                href="https://www.jdoodle.com/online-java-compiler/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open online java compiler
                </button>
              </a>
            </div>
          </div>
          {/* -----------------question practice block--------------------------------------------- */}
          <div className="1-100"></div>

          <div className="col-md-6 mt-3">
            <div className="row" id="practiceQuestionBlock">
              <center>
                <h2>
                  Questions<i className="fas fa-question-circle"></i>practice:
                </h2>
              </center>
              <hr />
              <h4>1. 250+ java Questions to practice: </h4>
              <a
                href="https://techstudy.org/java/java-program-examples-with-output/#more-2834"
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
              <center>
                <h2>
                  <i className="fas fa-times-circle"></i>
                  <br />
                  <small>Not yet posted</small>
                </h2>
              </center>
            </div>
          </div>
        </div>
      </div>

      {/* </div>     */}
    </>
  );
}

export default Java;
