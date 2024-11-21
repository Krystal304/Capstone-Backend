// import { useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { data, prizeMoney } from "../data/data";
// import Start from "../components/Start";
// import Trivia from "./Trivia";
// import Final from "./Final";
// import Leaderboard from "./Leaderboard";
// import QuestionForm from "../components/QuestionForm";
// import { Link } from "react-router-dom";

// function Home() {
//   console.log(data);
//   const [userName, setUserName] = useState(null);
//   const nav = useNavigate();

//   const startGame = (name) => {
    
//     setUserName(name);
//     nav("/trivia");
//   };

//   return (
//     <div className="home-container">
//       <nav>
//         <Link to="/trivia">Trivia</Link> |{" "}
//         <Link to="/add-question">Add Question</Link> |{" "}
//         <Link to="/leaderboard">Leaderboard</Link>
//       </nav>

//       <Routes>
//         <Route
//           path="/trivia"
//           element={<Trivia questions={questions} />} // Pass questions to Trivia
//         />
//         <Route
//           path="/add-question"
//           element={<QuestionForm onQuestionAdded={onQuestionAdded} />} // Pass onQuestionAdded to QuestionForm
//         />
//         <Route path="/leaderboard" element={<Leaderboard />} />
//         <Route path="/final" element={<Final />} />
//         <Route
//           path="*"
//           element={<div>Welcome! Please select an option from the menu.</div>}
//         />
//       </Routes>
//     </div>
//   );
// }

// export default Home;


import { Routes, Route, Link } from "react-router-dom";
import Trivia from "./Trivia";
import Final from "./Final";
import Leaderboard from "./Leaderboard";
import QuestionForm from "../components/QuestionForm";

function Home({ questions, onQuestionAdded }) {
  console.log("Home props:", { questions, onQuestionAdded });

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
          element={<Trivia questions={questions} />} // Pass questions to Trivia
        />
        <Route
          path="/add-question"
          element={<QuestionForm onQuestionAdded={onQuestionAdded} />} // Pass onQuestionAdded to QuestionForm
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/final" element={<Final />} />
        <Route
          path="*"
          element={<div>Welcome! Please select an option from the menu.</div>}
        />
      </Routes>
    </div>
  );
}

export default Home;