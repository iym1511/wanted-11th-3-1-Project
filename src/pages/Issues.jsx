import { useContext, useState } from "react";
import { IssueDataContext } from "../modules/issueData";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Issues = (props) => {
  const { data, index } = props;

  const navigate = useNavigate();
  const Data = useContext(IssueDataContext);

  const handleClick = (e) => {
    navigate(`/detail/${e.number}`)
  }

  return (
    <>
      <ListContainer key={index} onClick={() => handleClick(data)}>
        <span>#{data.number}</span>
        <h4>제목 : {data.title}</h4>
        <p>작성자 : {data.user.login}</p>
        <p>업로드날짜 : {data.created_at}</p>
        <p>코멘트 수 : {data.comments}</p>
      </ListContainer>
      {(index + 1) % 4 === 0 && (
          <a href=" https://www.wanted.co.kr/ ">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"></img>
          </a>
        )}
    </>
  );
};

export default Issues;

const ListContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  border-bottom: 1px solid black;
`