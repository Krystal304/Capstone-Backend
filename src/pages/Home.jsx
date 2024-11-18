import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { data, prizeMoney } from '../data/data';
import Start from '../components/Start';
import Trivia from './Trivia';
import Final from './Final';
import Leaderboard from './Leaderboard';

function Home() {
  const [userName, setUserName] = useState(null);
  const nav = useNavigate(); 


  const startGame = (name) => {
    setUserName(name); 
    nav('/trivia'); 
  };

  return (
    <div className="app">
 
      <Routes>
        <Route path="/" element={<Start onStart={startGame} />} />
        <Route path="/trivia" element={<Trivia userName={userName} />} />
        <Route path="/final" element={<Final />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default Home;