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
  
  // const handleCLick = (a) => {
  //   setSelectedAnswer(a);
  //   setClassName("answer active");
    
  //   setTimeout(() => {
  //     setClassName(item.correct ? "answer correct" : "answer wrong");
  //   }, 3000);

  
  //   setTimeout(() => {
  //     if (item.correct) {
  //       correctAudio.play();
  //       setTimeout(() => {
  //         setQuestionNumber((prev) => prev + 1); 
  //         setSelectedAnswer(null); 
  //         setClassName("answer"); 
  //       }, 1000); 
  //     } else {
  //       wrongAudio.play();
  //       setTimeout(() => {
  //         setTimeOut(true);
  //       }, 1000); 
  //     }
  //   }, 5000);
  // };

  const handleClick = (item) => {
    if (selectedAnswer) return;

    console.log(item)
    setSelectedAnswer(item);
    setClassName('active');
    delay(1000, () => {
      setClassName(item.correct ? 'correct' : 'wrong');
    });
    delay(5000, () => {
      if (item.correct) {
        correctAudio.play();
        delay(1000, () => {
          setQuestionNumber(prev => prev + 1);
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

  }

  function handleClickAnswer(e) {
    
    console.log(e.target.value)
  }
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>

      <div className="answers">
        {question?.answers.map((item) => (
          <div
          key={item.text}
            className ={className+(selectedAnswer?.text === item.text ? `answer ${answerStatus}`: "answer")} 
            onClick={() => handleClick(item)}
         
           
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
