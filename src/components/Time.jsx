

import { useState, useEffect } from "react";

const Time = ({ setTimeOut, questionNumber, isAnswerCorrect }) => {
  
  const [time, setTime] = useState(30);

  useEffect(() => {
    setTime(30); 
  }, [questionNumber]);

  useEffect(() => {

    if (isAnswerCorrect === false) {
      setTimeOut(true);
      return;
    }

    if (time === 0) {
      setTimeOut(true); 
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1); 
    }, 1000);

    return () => clearInterval(interval);  
  }, [time, setTimeOut, isAnswerCorrect, questionNumber]);  

  return <div className="timer">{time}</div>;
};

export default Time;




