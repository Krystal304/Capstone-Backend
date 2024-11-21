// import Trivia from "./pages/Trivia";
// import Final from "./pages/Final";
// import Leaderboard from "./pages/Leaderboard";
// import "./App.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import QuestionForm from "./components/QuestionForm";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {
//   console.log("hello");
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState(null);
//   const nav = useNavigate();

//   const fetchQuestions = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/");
//       setQuestions(response.data);
//     } catch (err) {
//       console.error("Error fetching questions:", err);
//       setError("Failed to load questions. Please try again.");
//     }
//   };
//   const handleQuestionAdded = (newQuestion) => {
//     setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
//   };

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   return (
//     <div className="App">
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <Routes>
//         <Route
//           path="*"
//           element={
//             <Home
//               questions={questions} // Pass questions to Home
//               onQuestionAdded={handleQuestionAdded} // Pass onQuestionAdded to Home
//             />
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import Home from "./pages/Home";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchQuestions = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/");
//       setQuestions(response.data);
//     } catch (err) {
//       console.error("Error fetching questions:", err);
//       setError("Failed to load questions. Please try again.");
//     }
//   };

//   const handleQuestionAdded = (newQuestion) => {
//     setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
//   };

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   return (
//     <div className="App">
     
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <Routes>
//         <Route
//           path="*"
//           element={
//             <Home
//               questions={questions}
//               onQuestionAdded={handleQuestionAdded}
//             />
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import Home from "./pages/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Money from "./components/Money"; // Import Money Component
import Quiz from "./components/Quiz"; // Import Quiz Component
import Time from "./components/Time"; // Import Time Component
import "./App.css"; // Make sure the styles are applied

function App() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1); // Track current question number
  const [timeOut, setTimeOut] = useState(false); // Manage timeout
  const [correctAnswers, setCorrectAnswers] = useState(0); // Track correct answers

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      setQuestions(response.data);
    } catch (err) {
      console.error("Error fetching questions:", err);
      setError("Failed to load questions. Please try again.");
    }
  };

  const handleQuestionAdded = (newQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleCorrectAnswer = () => {
    setCorrectAnswers(correctAnswers + 1);
  };

  return (
    <div className="App">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="nav-links">
        <a href="/trivia">Trivia</a>
        <a href="/leaderboard">Leaderboard</a>
        <a href="/add-question">Add Question</a>
      </div>
    
      <div className="game-container">
        <Money correctAnswers={correctAnswers} /> 

        <div className="quiz-container"> 
          <Time setTimeOut={setTimeOut} questionNumber={questionNumber} /> {/* Render Timer */}
          <Quiz
            data={questions}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setTimeOut={setTimeOut}
            onCorrectAnswer={handleCorrectAnswer}
          />
        </div>
      </div>

      {/* Routes for other pages */}
      <Routes>
        <Route
          path="*"
          element={
            <Home
              questions={questions}
              onQuestionAdded={handleQuestionAdded}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
