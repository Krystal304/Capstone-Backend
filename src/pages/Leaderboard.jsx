

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

function Leaderboard() {
  const location = useLocation();
  const { userName, correctAnswers } = location.state || {};
  const [scores, setScores] = useState([]);
 
  const navigate = useNavigate();


  useEffect(() => {
    if (userName && correctAnswers !== undefined) {
      const newScore = {
        name: userName,
        score: correctAnswers * 100, 
      };

  
      const storedScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
      console.log(JSON.parse(localStorage.getItem("leaderboard")))
      
      const updatedScores = [...storedScores, newScore]
        .sort((a, b) => b.score - a.score)
        .slice(0, 20);  
      
      
      localStorage.setItem("leaderboard", JSON.stringify(updatedScores));
      setScores(updatedScores); 
    } else {
      const storedScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
      setScores(storedScores); 
    }
  }, [userName, correctAnswers]);

  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(scores.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const paginatedScores = scores.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="leaderboard">
    { console.log(paginatedScores)}
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Prize Money</th>
          </tr>
        </thead>
        <tbody>
          {paginatedScores.map((score, index) => (
            <tr key={index}>
              <td>{(currentPage - 1) * pageSize + index + 1}</td>
              <td>{score.name}</td>
              <td>${score.score.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/")}>Return to Home</button>
    </div>
  );
}

export default Leaderboard;
