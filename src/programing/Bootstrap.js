import React from 'react';
// import bgimg from '../images/bootstrap.png';
import bgimg from '../images/bootstrap.png';

function Bootstrap() {
  const mystyle ={
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition:"50% 90%",
    backgroundSize: "25rem",
    backgroundAttachment:"fixed"
  };
  const style2 ={
    color: "#7709f7"
  }
  return (
    <>

      <div className="mt-2" style={mystyle} id="changeComponent">
        <center>
          <h1 className="mt-3" style={style2}>
            Bootstrap
          </h1>
        </center>

        <div className="row p-4" id="rowDiv1">

          {/* ------------------Editors Block---------------------------------- */}
          <div className="col-md-6 offset-md-3">
            <div className="row" id="editorBlock">
              <center>
                <h2>About<i className="fas fa-info-circle"></i>Bootstrap</h2>
              </center>
              <hr />
              <h4>Bootstrap 5 is the newest version of Bootstrap frame work with new components, faster stylesheet(css) and more responsiveness.</h4>
              <a
                href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-dark m-2">
                  Official page Documentation of Bootstrap
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
              <h4>1. Complete Bootstrap series from yahoobaba</h4>
              <a
                href="https://youtube.com/playlist?list=PL0b6OzIxLPbz1cgxiH5KCBsyQij1HsPtG"
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
              <h4>2. Complete playlist from Code4Education</h4>
              <a
                href="https://youtube.com/playlist?list=PLdPwRNmUlk0ka9Woqt3Xz4YKr5Fy5wjQT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist(hindi)
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
              <h4>Bootstrap Website</h4>
              <a
                href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                 click here open website
                </button>
              </a>

              <h4>2. W3 Schools :</h4>
              <a
                href="https://www.w3schools.com/bootstrap5/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>
             
            </div>
          </div>

          <div className="1-100"></div>

        </div>
      </div>

    </>
  )
}

export default Bootstrap