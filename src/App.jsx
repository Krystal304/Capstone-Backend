
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trivia from './pages/Trivia'
import Final from './pages/Final'
import Leaderboard from './pages/Leaderboard'
import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
  const [questions, setQuestions] = useState([]); 
  const [error, setError] = useState(null); 


  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      setQuestions(response.data); 
    } catch (err) {
      console.error("Error fetching questions:", err);
      setError("Failed to load questions. Please try again.");
    }
  };


  useEffect(() => {
    fetchQuestions();
  }, []);

  // useEffect(() => {
 
  //   axios.get("http://localhost:3000/")
  //     .then(response => {

  //       console.log(response.data);
  

  //       setQuestions(response.data); 
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching questions:", error);
  //     });
  // }, []);

//   return (
//     <div className="App">
//       <h1>Trivia Questions</h1>
//       {error && <p style={{ color: "red" }}>{error}</p>} 
//       <ul>
//         {questions.map((question, index) => (
//           <li key={index}>
//             <strong>Q:</strong> {question.question} <br />
//             <em>Answer:</em> {question.correct_answer}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

return (
  <Router>
    <div className="App">
      <h1>Trivia Questions</h1>
      {/* Define routes for different components */}
      <Routes>
        {/* Home route, shows when the user starts the app */}
        <Route path="/" element={<Home />} />
        
        {/* Trivia route */}
        <Route 
          path="/trivia" 
          element={
            <Trivia />
        
          }
          
        />
        <Route path="/final" element={<Final />} />

      </Routes>
    </div>
  </Router>
);
}

export default App;

// export default App;



