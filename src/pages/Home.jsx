import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { data, prizeMoney } from "../data/data";
import Start from "../components/Start";
import Trivia from "./Trivia";
import Final from "./Final";
import Leaderboard from "./Leaderboard";
import QuestionForm from "../components/QuestionForm";
import { Link } from "react-router-dom";

function Home() {
  const [userName, setUserName] = useState(null);
  const nav = useNavigate();

  const startGame = (name) => {
    setUserName(name);
    nav("/trivia");
  };

  return (
    <div className="home-container">
      <nav>
        <Link to="/trivia">Trivia</Link> |{" "}
        <Link to="/add-question">Add Question</Link> |{" "}
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>

      <Routes>
        <Route
          path="/trivia"
          element={
            <Trivia questions={questions} onQuestionAdded={onQuestionAdded} />
          }
        />
        <Route
          path="/add-question"
          element={<QuestionForm onQuestionAdded={onQuestionAdded} />}
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/final" element={<Final />} />
        
        <Route
          path="*"
          element={
            <Home questions={questions} onQuestionAdded={handleQuestionAdded} />
          }
        />
      </Routes>
    </div>
  );
}

export default Home;
