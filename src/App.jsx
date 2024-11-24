import Home from "./pages/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Money from "./components/Money";
import Quiz from "./components/Quiz";
import Time from "./components/Time";
import Leaderboard from "./pages/Leaderboard";
import Trivia from "./pages/Trivia";
import Final from "./pages/Final";
import GamePage from "./pages/GamePage";
import QuestionForm from "./components/QuestionForm";
import "./App.css";
import QuestionPage from "./pages/QuestionPage";

import EditQuestionPage from "./pages/EditQuestionPage";



function App() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

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
    setCorrectAnswers(correctAnswers + 1); // correct answer is score
  };

  return (
    <div className="App">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <header className="header">
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/questionlist">Question List</Link>
          {/* <Link to="/trivia">Trivia</Link> */}
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/add-question">Add Question</Link>
          <Link to="/Final">Final Results</Link>

        </div>
      </header>

      <Routes>
        <Route
          path="/trivia"
          element={
            <GamePage
              questions={questions}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setTimeOut={setTimeOut}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswers={correctAnswers}
              setCorrectAnswers={setCorrectAnswers}
              
              
            />
          }
        />
        <Route path="/questionlist" element={<QuestionPage setQuestions={setQuestions} questions={questions}/>} />
        {/* <Route path="/edit/:id" element={<UpdateQuestionForm />} /> */}
        <Route path="/edit/:id" element={<EditQuestionPage />} />
       
         {/* <Route
          path="/trivia"
          element={<Trivia questions={questions} />} 
        /> */}
        <Route
          path="/add-question"
          element={<QuestionForm onQuestionAdded={handleQuestionAdded} />} 
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/final" element={<Final />} />
        <Route
          path="*"
          element={<div>Welcome! Please select an option from the menu.</div>}
        />
        <Route
          path="/"
          element={
            <Home setCorrectAnswers={setCorrectAnswers} questions={questions} onQuestionAdded={handleQuestionAdded} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
