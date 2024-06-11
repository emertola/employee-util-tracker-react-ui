import axios from 'axios';

export const projectsLoader = async () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  const res = await axios.get(API_URL);
  return res.data;
};
