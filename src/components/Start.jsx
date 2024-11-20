import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Start = ({ onStart }) => {
  const inputRef = useRef();
  const nav = useNavigate();

  const handleStart = () => {
    const name = inputRef.current.value;
    if (name.trim()) {
      onStart(name);
      nav("/trivia");
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div style={{ margin: "auto", width: "50%", padding: "10px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Enter your name"
        ref={inputRef}
        className="form-control"
        style={{ padding: "10px", fontSize: "16px", marginBottom: "20px", width: "80%" }}
      />
      <h1>Welcome!</h1>
      <button onClick={handleStart} style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Start Game
      </button>
    </div>
  );
};

export default Start;