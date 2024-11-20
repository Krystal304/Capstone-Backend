
import { set } from "mongoose";
import { useState, useEffect } from "react";

const Time = ({ setTimeOut, questionNumber }) => {
  const [time, setTime] = useState(30);
  const [timerActive, setTimerActive] = useState(false);


  useEffect(() => {

    setTime(30); 
    // setTimerActive(true);
  }, [questionNumber]); 


  useEffect(() => {
    if (time === 0) {
      setTimeOut(true); 
      // setTimerActive(false);
      return;
    }
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1); // Decrease time every second
    }, 1000);

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [time, setTimeOut]);

  return <div className="timer">{time}</div>;
};

export default Time;