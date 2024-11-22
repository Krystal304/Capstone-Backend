
// import React, { useState } from "react";
// import Money from "../components/Money";
// import Quiz from "../components/Quiz";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'; 

// function GamePage({
//   correctAnswers,
//   questions,
//   questionNumber,
//   setQuestionNumber,
//   setTimeOut,
//   handleCorrectAnswer,
//   userName,
// }) {
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [lifelines, setLifelines] = useState({ delete: 3 }); 
//   const navigate = useNavigate();

//   const endGame = () => {
//     setIsGameOver(true);
//   };

//   const useDeleteLifeline = async () => {
//     if (lifelines.delete > 0) {
//       try {
        
//         setLifelines((prev) => ({ ...prev, delete: prev.delete - 1 }));

 
//         const currentQuestion = questions[questionNumber - 1];
//         console.log("Deleting question with ID:", currentQuestion._id); 
        
     
//         await axios.delete(`http://localhost:3000/questions/${currentQuestion._id}`);

      
//         setQuestionNumber((prev) => prev + 1);
//       } catch (error) {
//         console.error("Error deleting the question:", error);
//         alert("Failed to delete the question. Please try again.");
//       }
//     } else {
//       alert("No delete lifelines left!");
//     }
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
//               lifelines={lifelines}
//               useDeleteLifeline={useDeleteLifeline} 
//             />
//           </div>
//         </>
//       ) : (
//         <div className="game-over-container">
//           <h1>Game Over</h1>
//           <button
//             onClick={() => {
//               navigate("/leaderboard", { state: { userName, correctAnswers } });
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

function GamePage({
  correctAnswers,
  questions,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
  handleCorrectAnswer,
  userName,
}) {
  const [isGameOver, setIsGameOver] = useState(false);
  const [lifelines, setLifelines] = useState({ delete: 3 }); // Track remaining delete lifelines
  const [currentQuestions, setCurrentQuestions] = useState(questions); // A local state for the list of questions
  const navigate = useNavigate();

  const endGame = () => {
    setIsGameOver(true);
  };

  const useDeleteLifeline = () => {
    if (lifelines.delete > 0) {
      // Decrease the remaining delete lifelines
      setLifelines((prev) => ({ ...prev, delete: prev.delete - 1 }));

      // Remove the current question from the list (based on questionNumber)
      const newQuestions = currentQuestions.filter((_, index) => index !== questionNumber - 1);

      // Update the questions state to reflect the removal
      setCurrentQuestions(newQuestions);

      // Move to the next question
      setQuestionNumber((prev) => prev + 1);
    } else {
      alert("No delete lifelines left!");
    }
  };

  return (
    <div className="game-container">
      {!isGameOver ? (
        <>
          <Money correctAnswers={correctAnswers} />
          <div className="quiz-container">
            <Quiz
              data={currentQuestions} // Pass the updated questions list to Quiz
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setTimeOut={() => {
                setTimeOut();
                endGame();
              }}
              onCorrectAnswer={handleCorrectAnswer}
              lifelines={lifelines}
              useDeleteLifeline={useDeleteLifeline} // Pass the lifeline function to Quiz
            />
            {/* Button to use the delete lifeline */}
            <button onClick={useDeleteLifeline} disabled={lifelines.delete <= 0}>
              {lifelines.delete > 0 ? `Delete Question (${lifelines.delete} left)` : "No Lifelines Left"}
            </button>
          </div>
        </>
      ) : (
        <div className="game-over-container">
          <h1>Game Over</h1>
          <button
            onClick={() => {
              navigate("/leaderboard", { state: { userName, correctAnswers } });
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




