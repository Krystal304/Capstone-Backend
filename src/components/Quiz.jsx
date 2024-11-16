import { set } from "mongoose";
import { useState, useEffect } from "react";

import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import background from '../sounds/background.wav'




function Quiz({ data, questionNumber, setQuestionNumber, setTimeOut }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");


  const backgroundAudio = new Audio(background);
  const correctAudio = new Audio(correct);
  const wrongAudio = new Audio(wrong);


  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  // useEffect(() => {
  //   backgroundAudio.play();
  // })
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  
  const handleCLick = (item) => {
    setSelectedAnswer(item);
    setClassName("answer active");
    
    setTimeout(() => {
      setClassName(item.correct ? "answer correct" : "answer wrong");
    }, 3000);

  
    setTimeout(() => {
      if (item.correct) {
        correctAudio.play();
        setTimeout(() => {
          setQuestionNumber((prev) => prev + 1); 
          setSelectedAnswer(null); 
          setClassName("answer"); 
        }, 1000); 
      } else {
        wrongAudio.play();
        setTimeout(() => {
          setTimeOut(true);
        }, 1000); 
      }
    }, 5000);
  };
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item) => (
          <div
            className={selectedAnswer === item ? className : "answer"}
            onClick={() => !selectedAnswer && handleCLick(item)}
            key={item.text}
           
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
