import IssuesAPI from "../api/IssuesAPI";


const Issues = () => { 

  const RepoIssue = IssuesAPI.sort((a, b) => b.comments - a.comments).filter((data) => data.status !== "open")

  return (  
    <>
    {
      RepoIssue.map((data, index)=>(
        <div key={index}> 
          <span>#{data.number} </span>
          <h4>{data.title}</h4>
          <p>{data.user.login}</p>
          <p>{data.updated_at}</p>
          <p>{data.comments}</p>
          {
            (index + 1) % 5 === 0 && 
            <a href=" https://www.wanted.co.kr/ ">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"></img>
            </a>
          }
          ------------------------------------------------------
          <br/>
          <br/>
        </div>
      ))
    }
    </>
  );
}

export default Issues;