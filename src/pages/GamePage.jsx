import React from 'react'
import Money from '../components/Money'
import Quiz from '../components/Quiz'

function GamePage({correctAnswers, questions, questionNumber,setQuestionNumber, setTimeOut, handleCorrectAnswer }) {
  return (
    <div className="game-container">
    <Money correctAnswers={correctAnswers} /> 

    <div className="quiz-container"> 
     
      <Quiz
        data={questions}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        setTimeOut={setTimeOut}
        onCorrectAnswer={handleCorrectAnswer}
      />
    </div>
  </div>
  )
}

export default GamePage