import React from "react";
import bubblesort from "./BubbleSort.png";
import selectionsort from "./SelectionSort.png";
import insertionsort from "./InsertionSort.png";
import $ from "jquery";

function Allalgorithms() {
  function slidedown(e) {
    let x = e;
    $(x).slideUp();
    x = x.replace("1", "2");
    $(x).slideDown();
  }

  function slideup(e) {
    let x = e;
    $(x).slideUp();
    x = x.replace("2", "1");
    $(x).slideDown();
  }
  return (
    <div className="allalgorithms">
        {/* ----------bubble sort--------------- */}
      <div className="row mt-3">
        <div
          className="col-md-6 offset-md-3 algorithmsbutton"
          id="bubblesort1"
          onClick={() => slidedown("#bubblesort1")}
        >
          <span> Bubble Sort Algorithm</span>
          <i className="fas fa-angle-down"></i>
        </div>
        <div className="w-100 mt-2"></div>
        <div className="col-md-6 offset-md-3 imgdiv" id="bubblesort2">
          <i
            className="fas fa-sort-up"
            onClick={() => slideup("#bubblesort2")}
          ></i>
          <img src={bubblesort} alt="" />
        </div>
      </div>

            {/* ----------selection sort--------------- */}
      <div className="row mt-3">
        <div
          className="col-md-6 offset-md-3 algorithmsbutton"
          id="selectionsort1"
          onClick={() => slidedown("#selectionsort1")}
        >
          <span> Selection Sort Algorithm</span>
          <i className="fas fa-angle-down"></i>
        </div>
        <div className="w-100 mt-4"></div>
        <div className="col-md-6 offset-md-3 imgdiv" id="selectionsort2">
          <i
            className="fas fa-sort-up"
            onClick={() => slideup("#selectionsort2")}
          ></i>
          <img src={selectionsort} alt="" />
        </div>
      </div>
                {/* ----------insertion sort--------------- */}
      <div className="row mt-3">
        <div
          className="col-md-6 offset-md-3 algorithmsbutton"
          id="insertionsort1"
          onClick={() => slidedown("#insertionsort1")}
        >
          <span> insertion Sort Algorithm</span>
          <i className="fas fa-angle-down"></i>
        </div>
        <div className="w-100 mt-4"></div>
        <div className="col-md-6 offset-md-3 imgdiv" id="insertionsort2">
          <i
            className="fas fa-sort-up"
            onClick={() => slideup("#insertionsort2")}
          ></i>
          <img src={insertionsort} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Allalgorithms;
