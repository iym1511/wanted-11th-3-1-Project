import axios from "axios";
import BASE_URL from "../constants/baseUrl";

  const IssuesAPI = await axios
  .get(`${BASE_URL}repos/facebook/react/issues`,{
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error(error);
  });


export default IssuesAPI;
