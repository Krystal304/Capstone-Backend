

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useLocation } from "react-router-dom";

function Leaderboard() {
  const location = useLocation();
  const { userName, correctAnswers } = location.state || {};
  const [scores, setScores] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setScores(storedScores);
  }, []);

  const sortedScores = [...scores].sort((a, b) => b.score - a.score);

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
          {sortedScores.map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.name}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => nav("/")}>Return to Home</button>
    </div>
  );
}

export default Leaderboard;
