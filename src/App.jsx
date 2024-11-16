import { useState } from 'react';
import { data, prizeMoney } from './data/data';
import Quiz from './components/Quiz';
import Time from './components/Time';
import Start from './components/Start';

import './App.css';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [userName, setUserName] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  // Function to handle game start
  const startGame = (name) => {
    setUserName(name);
    setGameStarted(true);
  };

  return (
    <div className="app">
      {!gameStarted ? (
        <Start onStart={startGame} /> // Corrected the case of the prop name
      ) : (
        <>
          <div className="main">
            <h1 style={{ textAlign: 'center', color: 'purple' }}>
              Good luck, {userName}!
            </h1>
            <Quiz
              data={data}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setTimeOut={setTimeOut}
            />
          </div>
          <div className="timer">
            <Time setTimeOut={setTimeOut} questionNumber={questionNumber} />
          </div>
          <div className="pyramid">
            <div className="money">
              <div className="money-list">
                <ul>
                  {prizeMoney.map((item) => (
                    <li
                      key={item.id}
                      className={
                        questionNumber === item.id ? 'item active' : 'item'
                      }
                    >
                      <h5 className="amount">{item.amount}</h5>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

