import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionForm from '../components/QuestionForm'
import QuestionList from '../pages/QuestionList'

function QuestionPage({questions, setQuestions}) {
 
  const [editingQuestion, setEditingQuestion] = useState(null);

  const handleQuestionAdded = (newQuestion) => {
    setQuestions((prev) => [...prev, newQuestion]);
  };

  const handleQuestionUpdated = (updatedQuestion) => {
    setQuestions((prev) =>
      prev.map((q) => (q._id === updatedQuestion._id ? updatedQuestion : q))
    );
    setEditingQuestion(null);
  };



  const handleEdit = (question) => {
    setEditingQuestion(question);
  };

  return (
    <div>
      <h1>Manage Questions</h1>
      <QuestionForm onQuestionAdded={handleQuestionAdded} onQuestionUpdated={handleQuestionUpdated} editingQuestion={editingQuestion} />
     
     
      <QuestionList
        questions={questions}
        setQuestions={setQuestions} 
        onEdit={setEditingQuestion}
  
      />
    </div>
  );
}



export default QuestionPage;


