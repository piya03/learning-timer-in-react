import { useState, useEffect } from "react";

function useTimer({ initialval = null, startTrue = false }) {
  const [noOfSecond, setNoSeconds] = useState(initialval);
  console.log("useTimer -> noOfSecond", noOfSecond);
  const [start, setStart] = useState(startTrue);
  console.log("useTimer -> start", start);

  let hours = Math.floor(noOfSecond / (60 * 60));
  let secondsLeft = noOfSecond % (60 * 60);
  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  useEffect(() => {
    let runTime;
    if (noOfSecond === 0) {
      alert("Time Up");
      return;
    }
    runTime = setTimeout(() => {
      if (start && noOfSecond) {
        setNoSeconds((pre) => pre - 1);
      }
    }, 1000);

    return () => clearTimeout(runTime);
  }, [noOfSecond, start]);

  function startFun() {
    setNoSeconds(initialval);
    setStart(true);
    if (noOfSecond === null) return;
  }
  function stopFun() {
    if (noOfSecond == null) {
      setNoSeconds(initialval);
    }
    if (noOfSecond === 0) return;
    setStart(!start);
  }
  function resetFun() {
    setNoSeconds(null);
    setStart(false);
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
