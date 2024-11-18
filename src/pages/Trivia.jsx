import React, { useState, useEffect } from "react";
import Time from "../components/Time";
import Quiz from "../components/Quiz";
import { data } from "../data/data";
import Money from "../components/Money";
import { useNavigate } from "react-router-dom";

function Trivia({ userName }) {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const nav = useNavigate();

  const handleCorrectAnswer = () => {
    setCorrectAnswers((prev) => prev + 1);
  };

  // Navigate to "final" page when timeOut is true
  useEffect(() => {
    if (timeOut) {
      nav("/final", { state: { userName, correctAnswers } });
    }
  }, [timeOut, nav, userName, correctAnswers]);

  return (
    <>
      <div className="main">
        <h1 style={{ textAlign: "center", color: "purple" }}>
          Good luck, {userName}!
        </h1>
        <Quiz
          data={data}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setTimeOut={setTimeOut}
          onCorrectAnswer={handleCorrectAnswer}
        />
      </div>
      <div className="timer">
        <Time setTimeOut={setTimeOut} questionNumber={questionNumber} />
      </div>
      <Money questionNumber={questionNumber} correctAnswers={correctAnswers} />
    </>
  );
}

export default Trivia;