
import axios from 'axios';

async function getQuestion() {
  try {
    let url = 'http://localhost:3000/';

    let res = await axios.get(url);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function createQuestion(formData) {
  try {
    let url = 'http://localhost:3000/';



    let res = await axios.post(url, formData);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function deleteQuestion(id) {
  try {
    let url = `http://localhost:3000/${id}`;

    let res = await axios.delete(url);

    return true;
  } catch (err) {
    console.error(err);
  }
}

async function updateQuestion(id, formData) {
  try {
    let url = `http://localhost:3000/${id}`;

  

    let res = await axios.put(url, formData);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}


export {
  getQuestion,
  createQuestion,
  deleteQuestion,
  updateQuestion,

};