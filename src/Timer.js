import React, { useState, useEffect } from "react";
import "./App.css";
import CommonButton from "./CommonButton";
import useTimer from "./useTimer";

function Timer() {
  const { hours, minutes, seconds, startFun, stopFun, resetFun } = useTimer({
    initialval: 60 * 60 * 48,
  });
  let [active, setActive] = useState("");
  let leftHour = hours < 10 ? 0 : hours.toString().split("")[0];
  let rightHour = hours < 10 ? hours : hours.toString().split("")[1];
  let leftMin = minutes < 10 ? 0 : minutes.toString().split("")[0];
  let rightMin = minutes < 10 ? minutes : minutes.toString().split("")[1];
  let leftSec = seconds < 10 ? 0 : seconds.toString().split("")[0];
  let rightSec = seconds < 10 ? seconds : seconds.toString().split("")[1];

  return (
    <>
      <div className="timer">
        <div className="hour">
          <div>
            <div>{leftHour}</div>
            <div>{rightHour}</div>
          </div>
          <div>Hours</div>
        </div>
        <div className="dot">:</div>
        <div className="minutes">
          <div>
            <div>{leftMin}</div>
            <div>{rightMin}</div>
          </div>
          <div>Min</div>
        </div>
        <div className="dot">:</div>
        <div className="seconds">
          <div>
            <div>{leftSec}</div>
            <div>{rightSec}</div>
          </div>
          <div>sec</div>
        </div>
      </div>

      <div className="btn_container">
        <CommonButton
          btnStyle={{
            //  box-shadow: 0px 0px 5px #9c8383;
            background: active === "Start" ? "green" : "",
            boxShadow: active === "Start" ? "0px 0px 5px #9c8383" : "",
          }}
          value="Start"
          onClick={() => {
            setActive("Start");
            startFun();
          }}
        />
        <CommonButton
          btnStyle={{
            background: active === "Stop" ? "green" : "",
            boxShadow: active === "Stop" ? "0px 0px 5px #9c8383" : "",
          }}
          value="Stop"
          onClick={() => {
            setActive("Stop");
            stopFun();
          }}
        />
        <CommonButton
          btnStyle={{
            background: active === "Reset" ? "green" : "",
            boxShadow: active === "Reset" ? "0px 0px 5px #9c8383" : "",
          }}
          value="Reset"
          onClick={() => {
            setActive("Reset");
            resetFun();
          }}
        />
      </div>
    </>
  );
}

export default Timer;
