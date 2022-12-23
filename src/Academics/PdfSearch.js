import React, { useState } from "react";
import Navsearch from "./Navsearch";
import { v4 as uuidv4 } from "uuid";

function PdfSearch() {
  const [searchpdf, setsearchpdf] = useState("");
  const [showallpdf, setshowallpdf] = useState(false);
  const styles = {
    height: "2px",
    marginTop: "20px",
  };
  const searchInput = (e) => {
    setsearchpdf(e.target.value);
    setshowallpdf(false);
  };

  const data = require("./search.json");
  const suggestionbutton = (x) => {
    // console.log(x);
    setsearchpdf(x);
  };
  const renderdropdownlist = data
    .filter((item) => {
      const searchterm = searchpdf.toLowerCase();
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
  // console.log("after it will perfomr"+searchpdf);
  let showfun;
  const showButton = () => {
    setshowallpdf(true);
  };
  let data2 = require("./PDFList.json");
  if (searchpdf in data2[0]) {
    data2 = data2[0][searchpdf];
    showfun = data2.map((item) => {
      let key = Object.keys(item)[0];

      return (
        <div className="col-md-4 bg-gray d-flex  p-3" key={uuidv4()}>
          <i className="far fa-file-pdf"></i>
          <h2 className="m-auto">
            {key}
          </h2>
          <a
            href= {item[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="align-self-center px-4"
          >
            <button className="btn btn-dark">
              view
            </button>
          </a>
        </div>
      );
    });
  } else {
    showfun = (
      <center>
        {" "}
        <h2 className="mt-3">No PDF's are published</h2>{" "}
      </center>
    );
  }

  return (
    <div id="pdfsearch" className="">
      <hr style={styles} />
      <Navsearch />
      <br />
      <center>
        <h1>Search a subject for pdf's</h1>
      </center>
      <div className="row mt-3 justify-content-center">
        <div className="col-sm-5 ">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="search subject here"
              value={searchpdf}
              onChange={searchInput}
            />
            <div className="input-group-append">
              <button
                className="btn btn-dark"
                type="button"
                onClick={showButton}
              >
                Search
              </button>
            </div>
          </div>

          <div className="dropdown" style={{ marginTop: "-10px" }}>
            {renderdropdownlist}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">

        {showallpdf ? <center> <h1 className="mt-4 text-success">{searchpdf}</h1>  </center>: ""}
        {showallpdf ? showfun : ""}
      </div>
    </div>
  );
}

export default PdfSearch;
