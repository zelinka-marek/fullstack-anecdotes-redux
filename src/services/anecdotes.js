import axios from "axios";

const baseurl = "http://localhost:3001/anecdotes";

export async function getAnecdotes() {
  const response = await axios.get(baseurl);

  return response.data;
}
