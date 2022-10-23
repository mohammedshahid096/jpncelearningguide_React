import React, { useState } from "react";
import Navsearch from "./Navsearch";
import { v4 as uuidv4 } from 'uuid';

function Searchsubject() {
  const [searchvalue, setsearchvalue] = useState("");
  const [subjectnotfound, setsubjectnotfound] = useState(false);

  const data = require("./search.json");
  const searchbar = (event) => {
    setsearchvalue(event.target.value);
    setsubjectnotfound(true);
  };

  const suggestionbutton = (x) => {
    setsearchvalue(x);
  };
  const renderdropdownlist = data
    .filter((item) => {
      const searchterm = searchvalue.toLowerCase();
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
          key={item.SUBJECT_CODE}
        >
          {item.SUBJECT_NAME}
        </div>
      );
    });

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
      let showbutton;
       if(searchvalue in data2[0])
      {
        data2 =data2[0][searchvalue];
        console.log("length="+data2.length);
         showbutton = data2.map((item)=>{
          return(
            <div className="row mt-5">
              {Display(searchvalue,item)}
           </div>
          )
        });
      }
      else{
        showbutton  = subjectnotfound ?<center> <h2 className="mt-3">No PDF's are published</h2> </center>
         : <center> <h2 className="mt-3">search subject for youtube playlist</h2> </center> ;
      }
    
      const styles ={
        height: '2px',
        marginTop: '20px'
      }
      const stylebg ={
        minHeight: '45rem',
      }

  return (
    <div className="container-fluid" id="searchbar" style={stylebg}>
      <hr style={styles}/>
      <Navsearch/>
      <div className="row pt-4">
        <center><h1>Search  The Subject For You<i className="fab fa-youtube"></i>Tube Channel </h1></center>
        <div className="col-md-4 offset-md-4 pt-3">
          <div className="p-1 bg-ligth  shadow-sm mb-4">
            <div className="input-group">
              <input
                type="search"
                placeholder="Enter your subject"
                aria-describedby="button-addon1"
                className="form-control border-0 bg-light"
                value={searchvalue}
                onChange={searchbar}
              />
              <div className="input-group-append">
                {/* <button className="btn btn-primary" id="searchyoutubebutton"> */}
                  <i className="fa fa-search"> </i>
                {/* </button> */}
              </div>
            </div>
          </div>

          <div className="dropdown">{renderdropdownlist}</div>
        </div>
      </div>

      <div className="row pt-4">{showbutton}</div>
    </div>
  );
}
export default Searchsubject;