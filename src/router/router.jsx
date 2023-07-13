import { createBrowserRouter } from "react-router-dom";
import IssuesList from "../components/Facebook/IssuesList";
import Detail from "../pages/Detail";

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <IssuesList />
  },
  {
    path: '/issue',
    element: <IssuesList />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  }
])

export default routerConfig;