



function QuestionList({ questions, onEdit, onDelete }) {
    return (
      <div>
        {questions.map((question) => (
          <div key={question._id}>
            <p>{question.question}</p>
            <button onClick={() => onEdit(question)}>Edit</button>
            <button onClick={() => onDelete(question._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default QuestionList;
  