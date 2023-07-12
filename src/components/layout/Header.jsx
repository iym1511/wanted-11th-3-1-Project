import { useContext } from "react";
import { IssueDataContext } from "../../modules/issueData";
import styled from "styled-components"

const Header = () => {
  const Data = useContext(IssueDataContext)

  return (  
    <div>
      <Title>Facebook / react</Title>
    </div>
  );
}
 
export default Header;

const Title = styled.h1`
  text-align: center;
`