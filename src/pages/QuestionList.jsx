



// function QuestionList({ questions}) {
//     return (
//       <div>
//         {questions.map((question) => (
//           <div key={question._id}>
//             <p>{question.question}</p>
//             <button>Edit</button>
//             <button>Delete</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
//   export default QuestionList;
import axios from 'axios';


function QuestionList({ questions, setQuestions, onEdit, onDelete }) {
  // You should be able to call setQuestions here

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/${id}`)
      .then(() => {
        setQuestions(questions.filter((question) => question._id !== id));  
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (id, newText) => {
    axios
      .put(`http://localhost:3000/${id}`, { question: newText })
      .then(() => {
        setQuestions(
          questions.map((question) =>
            question._id === id ? { ...question, question: newText } : question
          )
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {questions.map((question) => (
        <div key={question._id}>
          <p>{question.question}</p>
          <button onClick={() => handleDelete(question._id)}>
            Delete
          </button>
          <button onClick={() => {
            const newText = prompt("Edit question:", question.question);
            if (newText) handleEdit(question._id, newText);
          }}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;


  