import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Home/Main";
import ErrorElement from "../Components/Sheared/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElement />,
  },
]);

export default router;
