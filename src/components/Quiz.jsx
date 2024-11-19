import { useState, useEffect } from "react";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import { useRef } from "react";

function Quiz({ data, 
  questionNumber, 
  setQuestionNumber, 
  setTimeOut, 
  onCorrectAnswer }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

//handle audio
const correctAudioRef = useRef(new Audio(correct));
const wrongAudioRef = useRef(new Audio(wrong));

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) return;  

    const isCorrect = selectedAnswer.correct;
    setClassName(isCorrect ? "answer correct" : "answer wrong");

    setTimeout(() => {
      if (isCorrect) {
        correctAudioRef.current.play(); 
        onCorrectAnswer();
        setQuestionNumber((prev) => prev + 1);
      } else {
        wrongAudioRef.current.play(); 
        setTimeOut(true);
      }
      setSelectedAnswer(null);
      setClassName("answer");
    }, 2000);
  };
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>

      <form className="answers">
        {question?.answers.map((item) => (
          <label key={item.text} className={`answer ${className}`}>
            <input
              type="radio"
              name="answer"
              value={item.text}
              onChange={() => setSelectedAnswer(item)}  
              checked={selectedAnswer?.text === item.text}  
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

   
      {selectedAnswer && <div className="selected-answer">You selected: {selectedAnswer.text}</div>}
    </div>
  );
}

export default Quiz;