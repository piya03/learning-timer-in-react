import React, { useState, useEffect } from "react";

function useTimer({ initialval = null, startTrue = false }) {
  const [noOfSecond, setNoSeconds] = useState(initialval);
  const [start, setStart] = useState(startTrue);
  console.log("useTimer -> start", start);

  let hours = Math.floor(noOfSecond / (60 * 60));
  let secondsLeft = noOfSecond % (60 * 60);
  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  useEffect(() => {
    let runTime;

    runTime = setTimeout(() => {
      if (start) {
        setNoSeconds((pre) => pre - 1);
      }
    }, 1000);

    return () => clearTimeout(runTime);
  }, [noOfSecond, start]);

  function startFun() {
    setNoSeconds(48 * 60 * 60);
    setStart(true);
  }
  function stopFun() {
    setStart(false);
  }
  function resetFun() {
    setNoSeconds(null);
  }
  return {
    hours,
    minutes,
    seconds,
    startFun,
    stopFun,
    resetFun,
    noOfSecond,
    setNoSeconds,
  };
}

export default useTimer;
