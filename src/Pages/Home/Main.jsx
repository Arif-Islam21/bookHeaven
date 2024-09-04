import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Sheared/Navbar";
import Footer from "../../Components/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
