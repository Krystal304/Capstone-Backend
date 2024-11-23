
import { useState, useEffect } from "react";

function Quiz({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
  onCorrectAnswer,
  lifelines,
  useDeleteLifeline,  
  countdown,
  setCountdown
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer.correct;
    setIsAnswerCorrect(isCorrect);

    setTimeout(() => {
      if (isCorrect) {
        onCorrectAnswer();
        setQuestionNumber((prev) => prev + 1);
        setCountdown(20);
      } else {
        setTimeOut(true);
      }
      setSelectedAnswer(null);
    }, 2000);
  };

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>

      <form className="answers">
        {question?.answers.map((item) => (
          <label key={item._id} className="answer">
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
      <button type="button" onClick={handleSubmit} disabled={!selectedAnswer}>
        Submit Answer
      </button>

      {selectedAnswer && (
        <div className="selected-answer">You selected: {selectedAnswer.text}</div>
      )}

      <div className="lifeline-container">
      
      </div>
    </div>
  );
}

export default Quiz;

