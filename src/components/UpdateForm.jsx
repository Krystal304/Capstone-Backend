import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import api from "../api";

function UpdateQuestionForm() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    async function fetchQuestion() {
      try {
        const response = await axios.get(`http://localhost:3000/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    }

    fetchQuestion();
  }, [id]);


  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/${id}`, formData);
      navigate("/"); 
    } catch (error) {
      console.error("Error updating question:", error);
    }
  }


  function handleCancel() {
    navigate("/"); 
  }

  return (
    <div>
      <h2>Update Question</h2>
      {formData ? (
        <form onSubmit={handleSubmit}>
          <label>
            Question:
            <input
              type="text"
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Answer:
            <input
              type="text"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="General Knowledge">General Knowledge</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Sports">Sports</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Update Question" />
        </form>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default UpdateQuestionForm;

