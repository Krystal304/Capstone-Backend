import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const [scores, setScores] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    try {
      const storedScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
      setScores(storedScores);
    } catch (error) {
      console.error("Error parsing leaderboard data:", error);
      setScores([]); // Fallback to an empty array
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Leaderboard</h1>
      {scores.length > 0 ? (
        <table style={{ margin: "0 auto", border: "1px solid black", padding: "10px" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px" }}>Player</th>
              <th style={{ padding: "10px" }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores
              .filter(entry => entry.name && entry.score !== undefined) // Validate data
              .sort((a, b) => b.score - a.score) // Sort by highest score
              .map((entry, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px" }}>{entry.name}</td>
                  <td style={{ padding: "10px" }}>{entry.score}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>No scores yet! Be the first to play!</p>
      )}
      <button
        onClick={() => nav("/")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Return to Home
      </button>
    </div>
  );
}

export default Leaderboard;
 