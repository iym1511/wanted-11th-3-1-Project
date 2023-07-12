import { useContext } from "react";
import { IssueDataContext } from "../../modules/issueData";

const Header = () => {
  const Data = useContext(IssueDataContext)

  return (  
    <div>
      <h1>Facebook</h1>
      <h2>react</h2>
    </div>
  );
}
 
export default Header;