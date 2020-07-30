import React, { useState, useEffect } from "react";
import "./App.css";
import CommonButton from "./CommonButton";

function Timer() {
  const [noOfSecond, setNoSeconds] = useState(60 * 60 * 48);
  console.log("Timer -> noOfSecond", noOfSecond);
  let hours = Math.floor(noOfSecond / (60 * 60));
  console.log("Timer -> hours", hours);
  let secondsLeft = noOfSecond % (60 * 60);
  console.log("Timer -> secondsLeft", secondsLeft);
  let minutes = Math.floor(secondsLeft / 60);
  console.log("Timer -> minutes", minutes);
  let seconds = secondsLeft % 60;
  console.log("Timer -> seconds", seconds);

  useEffect(() => {
    let runTime = setTimeout(() => {
      setNoSeconds((pre) => pre - 1);
    }, 1000);

    return () => clearTimeout(runTime);
  }, [noOfSecond]);
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
