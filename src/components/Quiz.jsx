import { set } from "mongoose";
import { useState, useEffect } from "react";


function Quiz({ data, questionNumber, setQuestionNumber, setTimeOut }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  
  const handleCLick = (item) => {
    setSelectedAnswer(item);
    setClassName("answer active");
    
    // setTimeout(() => {
    //   setClassName(item.correct ? "answer correct" : "answer wrong");
    //   setCorrectAnswer(item);
    //   setTimeOut(true);
    // }, 3000);
    delay (3000, () => {
      setClassName(item.correct ? "answer correct" : "answer wrong");
    })

  delay(5000, () => {
    if (item.correct) {
      delay(1000, () => {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
        setClassName("answer");
      });
    } else {
      delay(1000, () => {
        setTimeOut(true);
      });
    }
      })
  }

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
