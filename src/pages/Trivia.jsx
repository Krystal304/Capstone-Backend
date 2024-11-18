import React from 'react'
import Time from '../components/Time'
import Quiz from '../components/Quiz'
import { data } from '../data/data'
import { useState } from 'react'
import Money from '../components/Money'


function Trivia({userName}) {
  
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
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
    />
  </div>
  <div className="timer">
    <Time setTimeOut={setTimeOut} questionNumber={questionNumber} />
    

  </div>
  <Money questionNumber={questionNumber} />
  
  </>
  )
}

export default Trivia