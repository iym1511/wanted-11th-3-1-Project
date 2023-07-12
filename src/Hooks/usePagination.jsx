import { useState } from "react";

// 다른 컴포넌트에서도 접근 가능한 page 상태와 getMoreIssues 함수를 정의합니다.
export const usePagination = () => {
  const [page, setPage] = useState(1);

  const getMoreIssues = () => {
    setPage((prevPage) => prevPage + 1);
    // ... 이후 코드 생략
  };

  return [ page, getMoreIssues ];
};