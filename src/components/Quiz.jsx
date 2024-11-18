import { set } from "mongoose";
import { useState, useEffect } from "react";

import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import background from "../sounds/background.wav";

function Quiz({ data, questionNumber, setQuestionNumber, setTimeOut }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [answerStatus, setAnswerStatus] = useState("");

  const correctAudio = new Audio(correct);
  const wrongAudio = new Audio(wrong);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    const backgroundAudio = new Audio(background);
    // backgroundAudio.play();
  }, []);
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) return;

    console.log("Selected answer: ", selectedAnswer);

    setClassName(selectedAnswer.correct ? "correct" : "wrong");

    setTimeout(() => {
      if (selectedAnswer.correct) {
        setQuestionNumber((prev) => prev + 1);
      } else {
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
          <label key={item.text} className="answer">
            <input
              type="radio"
              name="answer"
              value={item.text}
              onChange={() => {
                setSelectedAnswer(item);
                console.log("Answer selected: ", item);
              }}
              checked={selectedAnswer?.text === item.text}
            />
            {item.text}
          </label>
        ))}
      </form>
      <p>Selected answer: {selectedAnswer ? selectedAnswer.text : "None"}</p>
      <button type="button" 
      onClick={handleSubmit} 
      disabled={!selectedAnswer}>
        Submit Answer
      </button>
    </div>
  );
}

export default Quiz;
