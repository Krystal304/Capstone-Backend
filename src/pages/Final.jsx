import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Final() {
  const location = useLocation();
  const nav = useNavigate();
  const { userName, correctAnswers } = location.state || {};

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Game Over!</h1>
      <h2>Well done, {userName}!</h2>
      <h3>You answered {correctAnswers} question(s) correctly!</h3>
      <button
        onClick={() => nav('/')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Return to Home
      </button>
    </div>
  );
}

export default Final;