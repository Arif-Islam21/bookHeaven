import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <p>Loading please wait....</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={loading.pathname} replace />;
};

export default PrivateRoute;
