// import React from 'react'
// import Money from '../components/Money'
// import Quiz from '../components/Quiz'

// function GamePage({correctAnswers, questions, questionNumber,setQuestionNumber, setTimeOut, handleCorrectAnswer }) {
//   return (
//     <div className="game-container">
//     <Money correctAnswers={correctAnswers} /> 

//     <div className="quiz-container"> 
     
//       <Quiz
//         data={questions}
//         questionNumber={questionNumber}
//         setQuestionNumber={setQuestionNumber}
//         setTimeOut={setTimeOut}
//         onCorrectAnswer={handleCorrectAnswer}
//       />
//     </div>
//   </div>
//   )
// }

// export default GamePage

// import React from 'react';
// import Money from '../components/Money';
// import Quiz from '../components/Quiz';
// import { useState } from 'react'; 

// function GamePage({ correctAnswers, questions, questionNumber, setQuestionNumber, setTimeOut, handleCorrectAnswer }) {
//   const [isGameOver, setIsGameOver] = useState(false);


//   const endGame = () => {
//     setIsGameOver(true);
//   };

//   return (
//     <div className="game-container">
//       {!isGameOver ? (
//         <>
//           <Money correctAnswers={correctAnswers} />

//           <div className="quiz-container">
//             <Quiz
//               data={questions}
//               questionNumber={questionNumber}
//               setQuestionNumber={setQuestionNumber}
//               setTimeOut={() => {
//                 setTimeOut();
//                 endGame();
//               }}
//               onCorrectAnswer={handleCorrectAnswer}
//             />
//           </div>
//         </>
//       ) : (
//         <div className="game-over-container">
//           <h1>Game Over</h1>
//           <button
//             onClick={() => {
//               window.location.href = '/leaderboard'; // Redirect to leaderboard
//             }}
//           >
//             View Leaderboard
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GamePage;

import React, { useState } from "react";
import Money from "../components/Money";
import Quiz from "../components/Quiz";
import { useNavigate } from "react-router-dom";

function GamePage({ correctAnswers, questions, questionNumber, setQuestionNumber, setTimeOut, handleCorrectAnswer, userName }) {
  const [isGameOver, setIsGameOver] = useState(false);
  const navigate = useNavigate();

  const endGame = () => {
    setIsGameOver(true);
  };

  return (
    <div className="game-container">
      {!isGameOver ? (
        <>
          <Money correctAnswers={correctAnswers} />
          <div className="quiz-container">
            <Quiz
              data={questions}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setTimeOut={() => {
                setTimeOut();
                endGame();
              }}
              onCorrectAnswer={handleCorrectAnswer}
            />
          </div>
        </>
      ) : (
        <div className="game-over-container">
          <h1>Game Over</h1>
          <button
            onClick={() => {
              // Passing username and correctAnswers to Leaderboard
              navigate('/leaderboard', { state: { userName, correctAnswers } });
            }}
          >
            View Leaderboard
          </button>
        </div>
      )}
    </div>
  );
}

export default GamePage;

