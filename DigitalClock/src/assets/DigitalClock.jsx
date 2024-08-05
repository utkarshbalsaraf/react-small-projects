import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, settime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number){
    return (number < 10 ? "0" : "")+ number;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-2xl border border-white border-opacity-20 rounded-lg p-6 w-2/3 h-1/2">
        <span className="text-white texl-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">Time</span>
        <span className="text-white text-2xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black">{formatTime()}</span>
      </div>
    </>
  );
}

export default DigitalClock;
