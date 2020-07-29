import React, { useState, useEffect } from "react";
import "./App.css";
import CommonButton from "./CommonButton";

function Timer() {
  return (
    <>
      <div className="timer">
        <div className="hour">
          <div>
            <div>0</div>
            <div>2</div>
          </div>
          <div>Hours</div>
        </div>
        <div className="dot">:</div>
        <div className="minutes">
          <div>
            <div>2</div>
            <div>4</div>
          </div>
          <div>Min</div>
        </div>
        <div className="dot">:</div>
        <div className="seconds">
          <div>
            <div>1</div>
            <div>6</div>
          </div>
          <div>sec</div>
        </div>
      </div>

      <div className="btn_container">
        <CommonButton value="Start" />
        <CommonButton value="Stop" />
        <CommonButton value="Reset" />
      </div>
    </>
  );
}

export default Timer;
