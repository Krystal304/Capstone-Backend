

import React, { useState, useEffect } from "react";
import axios from "axios";  
import Time from "../components/Time";
import Quiz from "../components/Quiz";
import Money from "../components/Money";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../api";

function Trivia({ userName }) {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questions, setQuestions] = useState([]); 
  const nav = useNavigate();

  

  useEffect(() => {
    const getQuestions = async () => {
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions);
    };

    getQuestions();
  }, []);
 
  const handleCorrectAnswer = () => {
    setCorrectAnswers((prev) => prev + 1);
  };


  useEffect(() => {
    if (timeOut) {
      nav("/final", { state: { userName, correctAnswers } });
    }
  }, [timeOut, nav, userName, correctAnswers]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "purple" }}>
        Good luck, {userName}!
      </h1>
      



      <div className="main">
        {questions.length > 0 ? (
          <Quiz
            data={questions}  
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setTimeOut={setTimeOut}
            onCorrectAnswer={handleCorrectAnswer}
          />
        ) : (
          <div>Loading Questions...</div>  
        )}
      </div>

      <div className="timer">
        <Time setTimeOut={setTimeOut} questionNumber={questionNumber} />
      </div>

      <Money correctAnswers={correctAnswers} />
    </div>
  );
}

export default Trivia;
