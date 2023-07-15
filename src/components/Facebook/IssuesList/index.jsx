import { useContext } from "react";
import { IssueDataContext } from "../../../modules/issueData";
import Issues from "../../../pages/Issues";
import useIssues from "../../../Hooks/useIssues";
import useInfiniteScroll from "../../../Hooks/useInfiniteScroll";

const IssuesList = () => {
  const Data = useContext(IssueDataContext);
  const { issues, moreData, getIssues } = useIssues();
  console.log(issues)
  const target = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (moreData) {
      getIssues();
    }
  });
  // console.log(moreData);
  return (
    <div>
      {issues.map((data, index) => (
        <Issues key={index} data={data} index={index} />
      ))}
      {moreData ? <div ref={target}></div> : null}
    </div>
  );
};

export default IssuesList;
