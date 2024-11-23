import React, { useState, useEffect } from "react";
import Money from "../components/Money";
import Quiz from "../components/Quiz";
import { useNavigate } from "react-router-dom";
import Time from "../components/Time";
import Countdown from "../components/Countdown";
import { useLocation } from "react-router-dom";

function GamePage({
  correctAnswers,
  questions,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
  handleCorrectAnswer,
  setCorrectAnswers,
  
}) {
  const [isGameOver, setIsGameOver] = useState(false);
  const [lifelines, setLifelines] = useState({ delete: 3 });
  const [currentQuestions, setCurrentQuestions] = useState(questions);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(20);
  const location = useLocation();
  const userName = location.state?.userName || "Anonymous";

  useEffect(() => {
    if (countdown == 0) {
      setIsGameOver(true);
      // setCorrectAnswers(0);
      setLifelines({ delete: 3 });
    }
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
  }, [countdown]);
  const endGame = () => {
    setIsGameOver(true);
    // setCorrectAnswers(0);
    setLifelines({ delete: 3 });

  };

  const useDeleteLifeline = () => {
    if (lifelines.delete > 0) {
      setLifelines((prev) => ({ ...prev, delete: prev.delete - 1 }));

      const newQuestions = currentQuestions.filter(
        (_, index) => index !== questionNumber - 1
      );

      setCurrentQuestions(newQuestions);

      setQuestionNumber((prev) => prev + 1);
    } else {
      alert("No delete lifelines left!");
    }
  };

  return (
    <div className="game-container">
      {!isGameOver ? (
        <>
        {/* {console.log(userName, correctAnswers)} */}

          {/* <Time
            setTimeOut={setTimeOut}
            questionNumber={currentQuestions}
            isAnswerCorrect={true}
          /> */}
          <h1>Time Left: {countdown}</h1>
          <Money correctAnswers={correctAnswers} />
          <div className="quiz-container">
            <Quiz
              data={currentQuestions}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setTimeOut={() => {
                setTimeOut();
                endGame();
              }}
              onCorrectAnswer={handleCorrectAnswer}
              lifelines={lifelines}
              useDeleteLifeline={useDeleteLifeline}
             countdown={countdown}
             setCountdown={setCountdown}

            />

            <button
              onClick={useDeleteLifeline}
              disabled={lifelines.delete <= 0}
            >
              {lifelines.delete > 0
                ? `Delete Question (${lifelines.delete} left)`
                : "No Lifelines Left"}
            </button>
          </div>
        </>
      ) : (
        <div className="game-over-container">
          <h1>Game Over</h1>
          <button
            onClick={() => {
              console.log(userName, correctAnswers);
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
