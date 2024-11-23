import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditQuestionPage() {
  const { id } = useParams(); // Get the question ID from the URL
  const navigate = useNavigate();
  const [questionText, setQuestionText] = useState("");

  useEffect(() => {
    // Fetch the existing question data
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${id}`);
        setQuestionText(response.data.question); // Assuming the API response has a "question" field
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/${id}`, { question: questionText });
      alert("Question updated successfully!");
      navigate("/"); // Redirect back to the main list page
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  return (
    <div>
      <h2>Edit Question</h2>
      <textarea
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handleUpdate}>Save</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
}

export default EditQuestionPage;
