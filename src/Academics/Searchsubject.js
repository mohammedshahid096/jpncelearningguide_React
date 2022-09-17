import React, { useState } from "react";

function Searchsubject() {
  const [searchvalue, setsearchvalue] = useState("");

  const data = require("./search.json");
  const searchbar = (event) => {
    setsearchvalue(event.target.value);
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

function Display(s_code,s_name,s_link)
{
  var setfontincrease;
 (s_name.split(" ").length)<=2 ? setfontincrease = {fontSize:'3rem'}: setfontincrease = {fontSize:'2rem'};
  return (
    <div key={s_code}>
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

  const showbutton =
    data
      .filter((item) => {
        return item.SUBJECT_NAME === searchvalue;
      })
      .map((item) => {
        if(! item.YOUTUBE2){
          console.log("present");
          return Display(item.SUBJECT_CODE,item.SUBJECT_NAME,item.YOUTUBE);
        }
        else{
          console.log("not present");
          return(
          <>
          <div className="row">
            {Display(item.SUBJECT_CODE,item.SUBJECT_NAME,item.YOUTUBE)}
          </div>
          <div className="row mt-5">
            {Display(item.SUBJECT_CODE,item.SUBJECT_NAME,item.YOUTUBE2)}
          </div>
          </>
            
          );
        }
       
      });

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
