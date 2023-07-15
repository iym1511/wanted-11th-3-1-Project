import axios from "axios";
import BASE_URL from "../constants/baseUrl";

const githubAxios = axios.create({
  baseURL: `${BASE_URL}repos/facebook/react`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export const getIssues = async params => {
  const data = await githubAxios.get('/issues', {
    params,
  });

  return data;
};