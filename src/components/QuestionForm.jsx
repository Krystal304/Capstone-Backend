import React, { useState } from "react";
import axios from "axios";

function QuestionForm({ onQuestionAdded }) {
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState([{ text: "", correct: false }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for empty question or answers
    if (!questionText.trim()) {
      alert("Question text is required!");
      return;
    }
  
    if (answers.some((answer) => !answer.text.trim())) {
      alert("All answer texts must be filled out!");
      return;
    }
  
    // Proceed with submission
    const newQuestion = { question: questionText, answers };
    try {
      const response = await axios.post("http://localhost:3000/", newQuestion);
      console.log("Server response:", response.data);
      if (onQuestionAdded) {
        onQuestionAdded(response.data);
      }
      setQuestionText(""); // Reset question
      setAnswers([{ text: "", correct: false }]); // Reset answers
      alert("Question added successfully!");
    } catch (err) {
      console.error("Error adding question:", err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
      </div>
      <div>
        <label>Answers:</label>
        {answers.map((answer, index) => (
          <div key={index}>
            <input
              type="text"
              value={answer.text}
              onChange={(e) =>
                setAnswers((prev) =>
                  prev.map((a, i) =>
                    i === index ? { ...a, text: e.target.value } : a
                  )
                )
              }
            />
            <label>
              <input
                type="checkbox"
                checked={answer.correct}
                onChange={(e) =>
                  setAnswers((prev) =>
                    prev.map((a, i) =>
                      i === index ? { ...a, correct: e.target.checked } : a
                    )
                  )
                }
              />
              Correct
            </label>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setAnswers([...answers, { text: "", correct: false }])
          }
        >
          Add Answer
        </button>
      </div>
      <button type="submit">Submit Question</button>
    </form>
  );
}

export default QuestionForm;