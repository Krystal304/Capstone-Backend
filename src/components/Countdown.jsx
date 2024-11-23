import React from "react";
import { useState, useEffect } from "react";

function Countdown() {
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCountdown((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);

          console.log("Countdown complete!");
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);
  return <div>
    <h1>Countdown:{countdown}</h1>
    </div>;
}

export default Countdown;
