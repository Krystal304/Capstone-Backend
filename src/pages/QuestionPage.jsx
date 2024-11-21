import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);

  // Fetch questions when the page loads
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  // Handle adding a question
  const handleQuestionAdded = (newQuestion) => {
    setQuestions((prev) => [...prev, newQuestion]);
  };

  // Handle updating a question
  const handleQuestionUpdated = (updatedQuestion) => {
    setQuestions((prev) =>
      prev.map((q) => (q._id === updatedQuestion._id ? updatedQuestion : q))
    );
    setEditingQuestion(null); // Clear editing state
  };

  // Handle deleting a question
  const handleQuestionDeleted = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      setQuestions((prev) => prev.filter((q) => q._id !== id));
      alert("Question deleted successfully!");
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  //  Pass editingQuestion to QuestionForm
  const handleEdit = (question) => {
    setEditingQuestion(question);
  }

  return (
    <div>
      <h1>Manage Questions</h1>
      <QuestionForm
        onQuestionAdded={handleQuestionAdded}
        onQuestionUpdated={handleQuestionUpdated}
        editingQuestion={editingQuestion}
      />
      <QuestionList
        questions={questions}
        onEdit={setEditingQuestion} 
        onDelete={handleQuestionDeleted} 
      />

      // Pass editingQuestion to QuestionForm
      <QuestionForm
        onQuestionAdded={handleQuestionAdded}
        onQuestionUpdated={handleQuestionUpdated}
        editingQuestion={editingQuestion} 
      />
    </div>
  );
}

export default QuestionPage;
