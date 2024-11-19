// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { prizeMoney } from "../data/data";

// function Final() {
//   const location = useLocation();
//   const nav = useNavigate();
//   const { userName = "Anonymous", correctAnswers = 0 } = location.state || {};

//   const finalPrize = prizeMoney.find(
//     (item) => item.id === correctAnswers
//   )?.amount || "$0";

//   useEffect(() => {
//     try {
//       if (userName) {
//         const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
//         leaderboard.push({ name: userName, score: finalPrize });
//         localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
//       }
//     } catch (error) {
//       console.error("Error accessing localStorage:", error);
//     }
//   }, [userName, finalPrize]);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>Game Over!</h1>
//       <h2>Well done, {userName}!</h2>
//       <h3>You won {finalPrize}!</h3>
//       <button
//         onClick={() => nav("/")}
//         style={{
//           padding: "10px 20px",
//           fontSize: "16px",
//           backgroundColor: "blue",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           marginRight: "10px",
//         }}
//       >
//         Return to Home
//       </button>
//       <button
//         onClick={() => nav("/leaderboard")}
//         style={{
//           padding: "10px 20px",
//           fontSize: "16px",
//           backgroundColor: "green",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//         }}
//       >
//         View Leaderboard
//       </button>
//     </div>
//   );
// }

// export default Final;

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { prizeMoney } from "../data/data";

function Final() {
  const location = useLocation();
  const nav = useNavigate();
  const { userName = "Anonymous", correctAnswers = 0 } = location.state || {};

  const finalPrize = prizeMoney.find(
    (item) => item.id === correctAnswers
  )?.amount || "$0";

  useEffect(() => {
    try {
      if (userName) {
        const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
        leaderboard.push({ name: userName, score: Number(finalPrize.replace("$", "")) });
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, [userName, finalPrize]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Game Over!</h1>
      <h2>Well done, {userName}!</h2>
      <h3>You won {finalPrize}!</h3>
      <button onClick={() => nav("/")}>Return to Home</button>
      <button onClick={() => nav("/leaderboard")}>View Leaderboard</button>
    </div>
  );
}

export default Final;