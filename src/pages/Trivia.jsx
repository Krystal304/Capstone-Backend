// import React, { useState, useEffect } from "react";
// import Time from "../components/Time";
// import Quiz from "../components/Quiz";
// import { data } from "../data/data";
// import Money from "../components/Money";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// function Trivia({ userName }) {

//   const [questionNumber, setQuestionNumber] = useState(1);
//   const [timeOut, setTimeOut] = useState(false);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const location = useLocation();
//   const nav = useNavigate();

//   const handleCorrectAnswer = () => {
//     setCorrectAnswers((prev) => prev + 1);
//   };


//   useEffect(() => {
//     if (timeOut) {
//       nav("/final", { state: { userName, correctAnswers } });
//     }
//   }, [timeOut, nav, userName, correctAnswers]);

//   return (
//     <>
//       <div className="main">
//         <h1 style={{ textAlign: "center", color: "purple" }}>
//           Good luck, {userName}!
//         </h1>
//         <Quiz
//           data={data}
//           questionNumber={questionNumber}
//           setQuestionNumber={setQuestionNumber}
//           setTimeOut={setTimeOut}
//           onCorrectAnswer={handleCorrectAnswer}
//         />
//       </div>
//       <div className="timer">
//         <Time setTimeOut={setTimeOut} questionNumber={questionNumber} />
//       </div>
//       <Money questionNumber={questionNumber} correctAnswers={correctAnswers} />
//     </>
//   );
// }

// export default Trivia;

import React, { useState, useEffect } from "react";
import axios from "axios";  // Import axios
import Time from "../components/Time";
import Quiz from "../components/Quiz";
import Money from "../components/Money";
import { useNavigate } from "react-router-dom";

function Trivia({ userName }) {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questions, setQuestions] = useState([]); 
  const nav = useNavigate();


  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       const response = await fetchQuestions();
  //       // console.log(response.data);
  //       setQuestions(response.data);  
  //     } catch (error) {
  //       console.error("Error fetching questions:", error);
  //     }
  //   };

  //   getQuestions();
  // }, []);  

  const handleCorrectAnswer = () => {
    setCorrectAnswers((prev) => prev + 1);
  };
  // setQuestionNumber((prev) => prev + 1);

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
      

      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

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
