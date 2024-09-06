import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Home/Main";
import ErrorElement from "../Components/Sheared/ErrorElement";
import Home from "../Layouts/Home/Home";
import Register from "../Layouts/Authentication/Register";
import Login from "../Layouts/Authentication/Login";
import AddBook from "../Pages/AddBook/AddBook";
import PrivateRoute from "./PrivateRoute";
import Category from "../Components/Sheared/Category";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookCategory/:category",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_SERVER_URL}/bookCategory/${params.category}`
          ),
      },
    ],
  },
]);

export default router;
