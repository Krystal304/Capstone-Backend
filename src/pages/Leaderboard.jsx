// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../App.css";

// function Leaderboard() {
//   const location = useLocation();
//   const { userName, correctAnswers } = location.state || {};
//   const [scores, setScores] = useState([]);

//   const navigate = useNavigate();

 

//   useEffect(() => {
//     if (userName && correctAnswers !== undefined) {
//       const newScore = {
//         name: userName,
//         score: correctAnswers * 100,
//       };


//       const storedScores =
//         JSON.parse(localStorage.getItem("leaderboard")) || [];
//       console.log(JSON.parse(localStorage.getItem("leaderboard")));

//       const updatedScores = [...storedScores, newScore]
//         .sort((a, b) => b.score - a.score)
//         .slice(0, 20);

//       localStorage.setItem("leaderboard", JSON.stringify(updatedScores));
//       setScores(updatedScores);
//     } else {
//       const storedScores =
//         JSON.parse(localStorage.getItem("leaderboard")) || [];
//       setScores(storedScores);
//     }
//   }, [userName, correctAnswers]);

//   const pageSize = 10;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(scores.length / pageSize);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const paginatedScores = scores.slice(
//     (currentPage - 1) * pageSize,
//     currentPage * pageSize
//   );

//   return (
//     <div className="leaderboard">
//       {console.log(paginatedScores)}
//       <h1>Leaderboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Player</th>
//             <th>Prize Money</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedScores.map((score, index) => (
//             <tr key={index}>
//               <td>{(currentPage - 1) * pageSize + index + 1}</td>
//               <td>{score.name}</td>
//               <td>${score.score.toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={() => navigate("/")}>Return to Home</button>
//     </div>
//   );
// }

// export default Leaderboard;


// import React, { useEffect, useState } from "react";

// function Leaderboard() {
//   const [leaderboard, setLeaderboard] = useState([]);

//   useEffect(() => {
//     try {
//       const storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
//       setLeaderboard(storedLeaderboard);
//     } catch (error) {
//       console.error("Error accessing localStorage:", error);
//     }
//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>Leaderboard</h1>
//       {leaderboard.length > 0 ? (
//         <table style={{ margin: "auto", border: "1px solid black" }}>
//           <thead>
//             <tr>
//               <th style={{ padding: "10px", border: "1px solid black" }}>Rank</th>
//               <th style={{ padding: "10px", border: "1px solid black" }}>Name</th>
//               <th style={{ padding: "10px", border: "1px solid black" }}>Prize Money</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaderboard
//               .sort((a, b) => b.score - a.score)
//               .map((entry, index) => (
//                 <tr key={index}>
//                   <td style={{ padding: "10px", border: "1px solid black" }}>{index + 1}</td>
//                   <td style={{ padding: "10px", border: "1px solid black" }}>{entry.name}</td>
//                   <td style={{ padding: "10px", border: "1px solid black" }}>${entry.score}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No leaderboard data available.</p>
//       )}
//     </div>
//   );
// }

// export default Leaderboard;


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
