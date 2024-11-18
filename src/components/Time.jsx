
import { set } from "mongoose";
import { useState, useEffect } from "react";

const Time = ({ setTimeOut, questionNumber }) => {
  const [time, setTime] = useState(30);
  const [timerActive, setTimerActive] = useState(false);


  useEffect(() => {

    setTime(30); 
    setTimerActive(true);
  }, [questionNumber]); 


  useEffect(() => {
    if (time === 0) {
      setTimeOut(true); 
      setTimerActive(false);
      return;
    }

    if (timerActive) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1); 
      }, 1000);

    return () => clearInterval(interval); 
    }
  }, [time, setTimeOut, timerActive]); 

  return <div className="timer">{time}</div>;
};

export default Time;