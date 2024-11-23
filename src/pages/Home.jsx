
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ setCorrectAnswers }) {
  const [userName, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setCorrectAnswers(0);
    if (userName.trim()) {
      navigate("/trivia", { state: { userName  } });
    } else {
      alert("Please enter a name to continue.");
    }
  };

  return (
    <div style={{backgroundColor: "purple", textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to the Trivia Game!</h1>
      <p>Test your knowledge by answering fun trivia questions. Let's get started!</p>

      <div style={{ marginTop: "20px" }}>
        <h2>Please enter your name to play:</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
          />
          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" 
            
          }}>
            Start Trivia
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
