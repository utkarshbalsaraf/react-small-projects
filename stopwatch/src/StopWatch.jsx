import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (100 * 60 * 60));
    let minutes = Math.floor(elapsedTime / 1000/ 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");
    
    const updatedTime = {
      hour : hours,
      minute : minutes,
      second: seconds,
      milisecond:miliseconds 
    }
    return updatedTime;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 w-2/3 h-1/2">
        <div className="mb-2">
          <span className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black">
            {formatTime().hour} : {formatTime().minute} : {formatTime().second} : {formatTime().milisecond}
          </span>
        </div>
        <div>
          <button
            type="button"
            class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-lg px-5 py-2 text-center me-2 mb-2"
            onClick={start}
          >
            Start
          </button>

          <button
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-lg px-5 py-2 text-center me-2 mb-2"
            onClick={stop}
          >
            Stop
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-lg px-5 py-2 text-center me-2 mb-2"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
