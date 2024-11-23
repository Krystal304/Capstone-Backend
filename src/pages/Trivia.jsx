
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../App.css";
// import Time from "../components/Time";

// function Trivia({ questions, userName }) {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [timeOut, setTimeOut] = useState(false);
//   const [timer, setTimer] = useState(15); 
//   const nav = useNavigate();

//   useEffect(() => {
//     if (timer === 0) {
//       setTimeOut(true);
//       redirectToLeaderboard();
//     }
//     const interval = setInterval(() => {
//       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timer]);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setCorrectAnswers((prev) => prev + 1);
//       setCurrentQuestion((prev) => prev + 1);
//       setTimer(15); 
//     } else {
//       redirectToLeaderboard();
//     }
//   };

//   const redirectToLeaderboard = () => {
//     const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
//     leaderboard.push({ name: userName, score: correctAnswers });
//     localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
//     nav("/leaderboard", { state: { userName, correctAnswers } });
//   };

//   if (timeOut || currentQuestion >= questions.length) {
//     redirectToLeaderboard();
//   }

//   return (
//     <div className="trivia">
//       <h1>Trivia Game</h1>
//       <h2>{userName}</h2>
//       {currentQuestion < questions.length && (
//         <div>
//           <h3>{questions[currentQuestion].question}</h3>
//           <div>
//             {questions[currentQuestion].answers.map((answer, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswer(answer.isCorrect)}
//               >
//                 {answer.text}
//               </button>
//             ))}
//           </div>
//           <p>Time Remaining: {timer} seconds</p>
          
//         </div>
//       )}
//     </div>
//   );
// }

// export default Trivia;


 
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Time from "../components/Time";

function Trivia({ questions, userName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeOut, setTimeOut] = useState(false);
  const [timer, setTimer] = useState(15); 
  const nav = useNavigate();

  useEffect(() => {
    if (timer === 0) {
      setTimeOut(true);
      redirectToLeaderboard();
    }
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      setCurrentQuestion((prev) => prev + 1);
      setTimer(15); 
    } else {
      redirectToLeaderboard();
    }
  };

  const redirectToLeaderboard = () => {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({ name: userName, score: correctAnswers });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    nav("/leaderboard", { state: { userName, correctAnswers } });
  };

  if (timeOut || currentQuestion >= questions.length) {
    redirectToLeaderboard();
  }

  return (
    <div className="trivia">
       {console.log(timer)}
      <h1>Trivia Game</h1>
      <h2>{userName}</h2>
      {currentQuestion < questions.length && (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          <div>
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.isCorrect)}
              >
                {answer.text}
              </button>
            ))}
          </div>
          {/* {console.log(timer)} */}
          <p>Time Remaining: {timer} seconds</p>
          <Time setTimeOut={setTimeOut} questionNumber={currentQuestion} isAnswerCorrect={true} />
        </div>
      )}
    </div>
  );
}

export default Trivia;