import IssuesAPI from "../../../api/IssuesAPI";
import Issues from "../../../pages/Issues";

const IssuesList = () => {
  
  const IssuesList = IssuesAPI.sort((a, b) => b.comments - a.comments).filter((data) => data.status !== "open")

  return (  
    <div>
      {IssuesList.map((data, index) => (
        <Issues 
          key={index}
          title={data.title}
          username={data.user.login}
          updated_date={data.updated_at}
          coments={data.comments}
        />
      ))}
    </div>
  );
}

export default IssuesList;