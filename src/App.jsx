import { useState, useEffect } from 'react'
import { data, prizeMoney } from './data/data'
import Quiz from './components/Quiz'
import Time from './components/Time'


import './App.css'
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  return (
    <div className="app">
      <div className="main">
        <Quiz
          data={data}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setTimeOut={setTimeOut}
        />
      </div>
      <div className="timer">Timer:</div>
      <Time 
      setTimeOut={setTimeOut}
      questionNumber={questionNumber}
      />
      <div className="pyramid">
        <div className="money">
          <div className="money-list">
        <ul>
          {prizeMoney.map((item) => (
            <li
              key={item.id}
              className={questionNumber === item.id ? "item active" : "item"}
            >
              <h5 className="amount">{item.amount}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
