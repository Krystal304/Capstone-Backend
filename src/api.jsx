import axios from 'axios';

const API_URL = 'http://localhost:3000/';

// Fetch all questions
export const fetchQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching questions", error);
  }
};

// Create a new question
export const createQuestion = async (newQuestion) => {
  try {
    const response = await axios.post(API_URL, newQuestion);
    return response.data;
  } catch (error) {
    console.error("Error creating question", error);
  }
};

// Update an existing question
export const updateQuestion = async (id, updatedQuestion) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedQuestion);
    return response.data;
  } catch (error) {
    console.error("Error updating question", error);
  }
};

// Delete a question
export const deleteQuestion = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting question", error);
  }
};