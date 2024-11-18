import React from 'react'
import Time from '../components/Time'
import Quiz from '../components/Quiz'
import { data } from '../data/data'
import { useState } from 'react'
import Money from '../components/Money'


function Trivia({userName}) {
  
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const handleCorrectAnswer = () => {
      setCorrectAnswers((prev) => prev + 1);
    };




    if (timeOut) {
      
      return (
        <div>
          <h1 style={{ textAlign: 'center', color: 'red' }}>Game Over! Better luck next time, { userName }!</h1>
        </div>
      );
    }
  return (
    <>
    <div className="main">
    <h1 style={{ textAlign: 'center', color: 'purple' }}>
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
  <Money 
  questionNumber={questionNumber}
  correctAnswers={correctAnswers} />
  
  </>
  )
}

export default Trivia