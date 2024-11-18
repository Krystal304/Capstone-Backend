import { set } from "mongoose";
import { useState, useEffect } from "react";

import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import background from '../sounds/background.wav'





function Quiz({ data, questionNumber, setQuestionNumber, setTimeOut }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [answerStatus, setAnswerStatus] = useState('');



  const correctAudio = new Audio(correct);
  const wrongAudio = new Audio(wrong);


  useEffect(() => {
  
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    const backgroundAudio = new Audio(background);
    // backgroundAudio.play();
  }, [])
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  


  const handleSubmit = () => {
    if (!selectedAnswer) return;

    setClassName(selectedAnswer.correct ? 'correct' : 'wrong');
    delay(5000, () => {
      if (selectedAnswer.correct) {
        correctAudio.play();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
          setClassName('answer');
        });
      } else {
        wrongAudio.play();
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };
   
  function handleClickAnswer(e) {
    
    console.log(e.target.value)
  }
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>

      <form className="answers">
        {question?.answers.map((item) => (
          <label key={item.text} className="answer">
            <input
              type="radio"
              name='answer'
              value={item.text}
              onChange={()=>setSelectedAnswer(item)}
              checked={selectedAnswer?.text === item}
            />
            {item.text}
            </label>

        ))}
        </form>
        <button
              type="button"
            onClick={handleSubmit}
          disabled={!selectedAnswer} 
      >
         Submit Answer
          </button>
      </div>
    // </div>
  );
}

export default Quiz;
