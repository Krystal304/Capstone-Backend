import React, { useEffect, useState } from "react";
import axios from "axios";

function QuestionForm({ onQuestionAdded, onQuestionUpdated, editingQuestion }) {
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState([{ text: "", correct: false }]);

  //edit questions
  useEffect(() => {
    if (editingQuestion) {
      setQuestionText(editingQuestion.question);
      setAnswers(editingQuestion.answers);
    }
  },[editingQuestion]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!questionText.trim()) {
      alert("Question text is required!");
      return;
    }

    if (answers.some((answer) => !answer.text.trim())) {
      alert("All answer texts must be filled out!");
      return;
    }
    // send the question to the server

    const questionData = { question: questionText, answers };

    try {
      if (editingQuestion) {
        const response = await axios.put(
          `
        http://localhost:3000/${editingQuestion.id}`,
          questionData
        );
        onQuestionUpdated(response.data);
        alert("Question updated successfully!");
      } else {
        const response = await axios.post(
          "http://localhost:3000/",
          questionData
        );
        onQuestionAdded(response.data);
        alert("Question added successfully!");
      }
      //clear the form
      setQuestionText("");
      setAnswers([{ text: "", correct: false }]);
    } catch (error) {
      console.error("Error adding question:", error);
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
          onClick={() => setAnswers([...answers, { text: "", correct: false }])}
        >
          Add Answer
        </button>
      </div>
      <button type="submit">Submit Question</button>

      
     
    </form>
  );
}

export default QuestionForm;
