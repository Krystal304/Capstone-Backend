
import { useState, useEffect } from "react";

const Timer = ({ setTimeOut, questionNumber }) => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (time === 0) {
      setTimeOut(true);
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval); // Clean up on unmount or question change
  }, [time, setTimeOut]);

  useEffect(() => {
    setTime(30); // Reset the timer whenever the questionNumber changes
  }, [questionNumber]);

  return <div className="timer">{time}</div>;
};

export default Timer;