import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Sheared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <p>Footer Here</p>
    </div>
  );
};

export default Main;
