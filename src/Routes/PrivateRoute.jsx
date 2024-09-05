import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading please wait....</p>;
  }
  if (user) {
    return children;
  }
  return navigate("/login");
};

export default PrivateRoute;
