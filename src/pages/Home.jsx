


import { Routes, Route, Link } from "react-router-dom";
import Trivia from "./Trivia";
import Final from "./Final";
import Leaderboard from "./Leaderboard";
import QuestionForm from "../components/QuestionForm";

function Home({ questions, onQuestionAdded }) {
  console.log("Home props:", { questions, onQuestionAdded });

  return (
   <h1>Home Page</h1>
  );
}

export default Home;