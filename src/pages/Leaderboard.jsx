
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Leaderboard() {
  const [scores, setScores] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
    console.log("Retrieved scores:", storedScores);
    setScores(storedScores);
  }, []);

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

