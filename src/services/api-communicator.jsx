import axios from 'axios';

const API_URL = 'https://mocki.io/v1/68f88502-a805-4d24-a407-ee2a232a5c60';

export const fetchRewards = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
