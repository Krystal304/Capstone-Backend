

import axios from "axios";
import QuestionPage from '../pages/QuestionPage'


function QuestionList({ questions, setQuestions}) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      setQuestions(questions.filter((question) => question._id !== id)); 
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };
    return (
      <div>
        {questions.map((question) => (
          <div key={question._id}>
            <p>{question.question}</p>
            <button>Edit</button>
            <button onClick={() => handleDelete(question._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default QuestionList;








  




