
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useLocation } from "react-router-dom";

function Leaderboard() {
  const location = useLocation();
  const { userName, correctAnswers } = location.state || {};
  const [scores, setScores] = useState([]);
  const nav = useNavigate();


// retrieve leaderboard in local storage
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
    console.log("Retrieved scores:", storedScores);
    setScores(storedScores);
  }, []);
// navigate to leaderboard
  useEffect(() => {
    console.log("User:", userName);
    console.log("Score:", correctAnswers);
  }, [userName, correctAnswers]);

  const sortedScores = [...scores].sort((a, b) => b.score - a.score);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sortedScores.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedScores = sortedScores.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {paginatedScores.map((score, index) => (
            <tr key={index}>
              <td>{(currentPage - 1) * pageSize + index + 1}</td>
              <td>{score.name}</td>
              <td>${score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => nav("/")}>Return to Home</button>
    </div>
  );
}

export default Leaderboard;

