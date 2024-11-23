

import axios from "axios";
import QuestionPage from '../pages/QuestionPage'
import { useNavigate } from "react-router-dom";


function QuestionList({ questions, setQuestions}) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      setQuestions(questions.filter((question) => question._id !== id)); 
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };


  const handleEdit = (id) => {
    navigate(`/edit/${id}`); 
  };
    return (
      <div>
        {questions.map((question) => (
          <div key={question._id}>
            <p>{question.question}</p>
            <button onClick={()=> handleEdit(question._id)}>Edit</button>
            <button onClick={() => handleDelete(question._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default QuestionList;








  




