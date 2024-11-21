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
  // useEffect(() => {

  //   axios.get("http://localhost:3000/")
  //     .then(response => {

  //       console.log(response.data);

  //       setQuestions(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching questions:", error);
  //     });
  // }, []);

  //   return (
  //     <div className="App">
  //       <h1>Trivia Questions</h1>
  //       {error && <p style={{ color: "red" }}>{error}</p>}
  //       <ul>
  //         {questions.map((question, index) => (
  //           <li key={index}>
  //             <strong>Q:</strong> {question.question} <br />
  //             <em>Answer:</em> {question.correct_answer}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }

  return (
    <div>
      <nav>
        <Link to="/add-question">Add a New Question</Link>
      </nav>

      <div className="App">
        <h1>Trivia Questions</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route
            path="/trivia"
            element={<Trivia questions={questions} onQuestionAdded={handleQuestionAdded} />}
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/final" element={<Final />} />
          <Route
            path="/add-question"
            element={<QuestionForm onQuestionAdded={handleQuestionAdded} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;