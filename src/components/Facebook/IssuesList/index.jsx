import { useContext, useEffect, useState } from "react";
import { IssueDataContext } from "../../../modules/issueData";
import Issues from "../../../pages/Issues";
import { useParams } from "react-router-dom";
import { usePagination } from "../../../Hooks/usePagination";
import ReactMarkdown from 'react-markdown';

const IssuesList = () => {

  const Data = useContext(IssueDataContext);

  const [issueList, setIssueList] = useState([]); 
  const [fetching, setFetching] = useState(false); // 추가 데이터를 로드하는지 아닌지를 담기위한 state
  // let [page, setPage] = useState(1);
  const [ page, getIssues ] = usePagination();
  
  useEffect(() => {
    handleScroll();
  }, []);
  console.log(page)
  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const getMoreIssues = () => {
    // setPage(page + 1);
    getIssues();
    setFetching(true);
    const newData = issueList.concat(Data);
    setIssueList(newData);
    setFetching(false)
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      getMoreIssues();
    }
  };

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