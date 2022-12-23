import React,{useState} from "react";
import Navsearch from "./Navsearch";
import { v4 as uuidv4 } from 'uuid';

function Searchsubject() {
  const [searchplaylist, setsearchplaylist] = useState("");
  const [showplaylist, setshowplaylist] = useState(false);
  const styles = {
    height: "2px",
    marginTop: "20px",
  };
  const searchInput =(e)=>{
    setsearchplaylist(e.target.value);
    setshowplaylist(false);
  }

  const data = require("./search.json");
  const suggestionbutton = (x) => {
    // console.log(x);
    setsearchplaylist(x);
  };
  const renderdropdownlist = data
  .filter((item) => {
    const searchterm = searchplaylist.toLowerCase();
    const fullName = item.SUBJECT_NAME.toLowerCase();
    return (
      searchterm && fullName.startsWith(searchterm) && fullName !== searchterm
    );
  })
  .slice(0, 10)
  .map((item) => {
    return (
      <div
        className="dropdownrow"
        onClick={() => suggestionbutton(item.SUBJECT_NAME)}
        key={uuidv4()}
      >
        {item.SUBJECT_NAME}
      </div>
    );
  });
  // console.log("after it will perfomr"+searchplaylist);
  let showfun;
  const showButton =()=>{
    setshowplaylist(true);
  }
  function Display(s_name,s_link)
{
  var setfontincrease;
 (s_name.split(" ").length)<=2 ? setfontincrease = {fontSize:'3rem'}: setfontincrease = {fontSize:'2rem'};
  return (
    <div key={uuidv4()}>
      <div className="col-md-4 offset-md-4" id="showdiv" style={setfontincrease}>
        <span>{s_name}</span>
      </div>
      <div className="w-100"></div>
      <div className="col-md-4 offset-md-4" id="channel">
        <span>
          <a
            href={s_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s_link}
          </a>
        </span>
      </div>
    </div>
  );
}
  let data2 = require("./YoutubeList.json");
  if(searchplaylist in data2[0])
  {
    data2 =data2[0][searchplaylist];
     showfun = data2.map((item)=>{
      return(
        <div className="col-md-  p-3" key={uuidv4()}>
         {Display(searchplaylist,item)}
    </div>
      )
    });
  }
  else{
    showfun = <center> <h2 className="mt-3" >No Playlist are Available</h2> </center>;
  }


  return (
    <div id="searchbar">
      <hr style={styles} />
      <Navsearch />
      <br />
      <center>
        <h1>Search  The Subject For YouTube Channel</h1>
      </center>
      <div className="row mt-3 justify-content-center">
        <div className="col-sm-5 ">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="search subject here"
              value={searchplaylist}
              onChange={searchInput}
            />
            <div className="input-group-append">
              <button className="btn btn-dark" type="button" onClick={showButton}>
                Search
              </button>
            </div>
          </div>

          <div className="dropdown" style={{marginTop:"-10px"}}>{renderdropdownlist}</div>

        </div>
      </div>
      <div className="row justify-content-center">
      {showplaylist?showfun:""}
      </div>
    </div>
  );
}

export default Searchsubject;
