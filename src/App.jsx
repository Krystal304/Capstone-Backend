import Trivia from "./pages/Trivia";
import Final from "./pages/Final";
import Leaderboard from "./pages/Leaderboard";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import QuestionForm from "./components/QuestionForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const nav = useNavigate();

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

  return (
    <div className="App">
      {error && <p style={{ color: "red" }}>{error}</p>}
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
