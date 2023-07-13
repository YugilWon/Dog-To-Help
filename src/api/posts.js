import axios from "axios";

const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/Post`);
  console.log("요청일어나유~", `${process.env.REACT_APP_SERVER_URL}/Post`);
  return response.data;
};

const addPost = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/Post`, newTodo);
};

export { getPosts, addPost };
