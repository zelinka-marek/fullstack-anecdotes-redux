import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export async function getAnecdotes() {
  const response = await axios.get(baseUrl);

  return response.data;
}

export async function createAnecdote(data) {
  const response = await axios.post(baseUrl, data);

  return response.data;
}

export async function updateAnecdote(id, data) {
  const response = await axios.put(`${baseUrl}/${id}`, data);

  return response.data;
}
