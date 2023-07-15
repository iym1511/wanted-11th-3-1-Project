import { useContext, useEffect, useState } from "react";
import { IssuesContext } from "../context/IssuesProvider";
import { getIssues as getIssuesApi } from "../api/githubAPI";

const useIssues = () => {
  const { issues, setIssues } = useContext(IssuesContext)
  const [page, setPage] = useState(1)
  const [moreData, setMoreData] = useState(true)

  const getIssues = async () => {
    try {
      const { data } = await getIssuesApi({state: 'open', sort: 'comments', page: page });
      // setIssues((prev) => [...prev, data]);
      setIssues([...issues, ...data])
      if(data.length === 0){
        setMoreData(false)
      }
      setPage((prev) => prev + 1);
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getIssues();
  }, []);

  return { issues, moreData, getIssues}
}

export default useIssues;