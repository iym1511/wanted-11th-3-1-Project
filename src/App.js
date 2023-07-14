import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import IssuesList from "./components/Facebook/IssuesList";
import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <IssuesList />,
        },
        {
          path: "/issue",
          element: <IssuesList />,
        },
        {
          path: "/detail/:id",
          element: <Detail />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
