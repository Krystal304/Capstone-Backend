import { useState } from 'react';
import { data, prizeMoney } from '../data/data';
import Quiz from '../components/Quiz';
import Time from '../components/Time';
import Start from '../components/Start';
import Trivia from './Trivia';

import '../App.css';

function Home() {
 
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
        <Start onStart={startGame} /> 
      ) : (
        <>
        <Trivia userName={userName}/>
         
        </>
      )}
    </div>
  );
}

export default Home;