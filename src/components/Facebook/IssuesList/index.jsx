import { useContext, useEffect, useState } from "react";
import { IssueDataContext } from "../../../modules/issueData";
import Issues from "../../../pages/Issues";
import { useParams } from "react-router-dom";
import { usePagination } from "../../../Hooks/usePagination";
import ReactMarkdown from 'react-markdown';

const IssuesList = () => {

  const Data = useContext(IssueDataContext);

  return (  
    <div>
      {Data.map((data, index) => (
        <Issues 
          key={index}
          data={data}
          index={index}
        /> 
      ))}
    </div>
  );
}

export default IssuesList;

// useEffect(() => {
//   axios
//     .get(`${BASE_URL}repos/facebook/react/issues`, {
//       headers: {
//         Accept: "application/vnd.github+json",
//         Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
//         "X-GitHub-Api-Version": "2022-11-28",
//       },
//       params: {
//         state: 'open',
//         sort: 'comments',
//         page: page
//       }
//     })
//     .then((response) => {
//       setData(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, []);