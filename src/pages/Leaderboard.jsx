


import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); 

  useEffect(() => {
    try {
      const storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      setLeaderboard(storedLeaderboard);
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);


  const addScore = (newScore) => {
    const updatedLeaderboard = [...leaderboard, newScore];
    const sortedLeaderboard = updatedLeaderboard.sort((a, b) => b.score - a.score);

    if (sortedLeaderboard.length > 20) {
      sortedLeaderboard.pop(); 
    }

    localStorage.setItem("leaderboard", JSON.stringify(sortedLeaderboard));
    setLeaderboard(sortedLeaderboard);
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLeaderboard = leaderboard.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Leaderboard</h1>
      {leaderboard.length > 0 ? (
        <>
          <table style={{ margin: "auto", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ padding: "10px", border: "1px solid black" }}>Rank</th>
                <th style={{ padding: "10px", border: "1px solid black" }}>Name</th>
                <th style={{ padding: "10px", border: "1px solid black" }}>Prize Money</th>
              </tr>
            </thead>
            <tbody>
              {currentLeaderboard.map((entry, index) => (
                <tr key={index} style={index < 3 ? { backgroundColor: "#f1f1f1" } : {}}>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    {entry.name}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>
                    ${entry.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

       
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ padding: "10px 15px", margin: "0 10px" }}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= leaderboard.length}
              style={{ padding: "10px 15px", margin: "0 10px" }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No leaderboard data available.</p>
      )}
    </div>
  );
}

export default Leaderboard;
