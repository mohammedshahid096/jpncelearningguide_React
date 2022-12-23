import React from 'react';
import bgimg from '../images/mysql.png';

function Mysql() {
  const mystyle ={
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition:"50% 90%",
    backgroundSize: "35rem",
    backgroundAttachment:"fixed"
  };
  const style2 ={
    color: "#005478"
  }
  return (
    <>

      <div className="mt-2" style={mystyle} id="changeComponent">
        <center>
          <h1 className="mt-3" style={style2}>
            MySql
          </h1>
        </center>

        <div className="row p-4" id="rowDiv1">

          {/* ------------------Editors Block---------------------------------- */}
          <div className="col-md-6 offset-md-3">
            <div className="row" id="editorBlock">
              <center>
                {/* mysqlshell work bench */}
                <h2>Edi <i className="fas fa-terminal"></i>tor</h2>
              </center>
              <hr />
              <h4>MySql workbench Download Setup  :</h4>
              <a
                href="https://dev.mysql.com/downloads/installer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  click here to open mysql workbench link
                </button>
              </a>

              <a
                href="https://youtu.be/2c2fUOgZMmY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  click here to watch video to for setup
                </button>
              </a>
              {/* xampp server */}
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
              <h4>1. Complete MySql Series from yahoobaba :</h4>
              <a
                href="https://youtube.com/playlist?list=PL0b6OzIxLPbzf12lu5etX_vjN-eUxgxnr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist (Hindi)
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
                href="https://www.w3schools.com/mysql/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
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

export default Mysql