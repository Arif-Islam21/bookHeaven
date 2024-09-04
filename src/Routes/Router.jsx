import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Home/Main";
import ErrorElement from "../Components/Sheared/ErrorElement";
import Home from "../Layouts/Home/Home";
import Register from "../Layouts/Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
