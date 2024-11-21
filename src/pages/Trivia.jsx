

import React, { useState, useEffect } from "react";
import axios from "axios";  
import Time from "../components/Time";
import Quiz from "../components/Quiz";
import Money from "../components/Money";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../api";
import QuestionForm from "../components/QuestionForm";
import { prizeMoney } from "../data/data";




function Trivia({ userName }) {
  console.log(userName);
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

// navigate to leaderboard at the end of the game
useEffect(() => {
  if (timeOut) {
    // Save score in localStorage
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({ name: userName, score: correctAnswers });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    // Navigate to the leaderboard page
    nav("/leaderboard", { state: { userName, correctAnswers } });
  }
}, [timeOut, nav, userName, correctAnswers]);


//replaced code with useEffect
  // useEffect(() => {
  //   if (timeOut) {
  //     nav("/final", { state: { userName, correctAnswers } });
  //   }
  // }, [timeOut, nav, userName, correctAnswers]);
  



  return (
    <div className="App">
      <h1>Good luck!</h1>
      <Money correctAnswers={correctAnswers} /> 
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
  );
}

export default Trivia;

 