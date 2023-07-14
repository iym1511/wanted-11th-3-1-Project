import { createContext, useState } from "react";

export const IssuesContext = createContext(null);

export const IssueProvider = ({children}) => {
  const [issues, setIssues] = useState([]);

  const contextValue = {
    issues,
    setIssues,
  };
  
  return <IssuesContext.Provider value={contextValue}>{children}</IssuesContext.Provider>
}