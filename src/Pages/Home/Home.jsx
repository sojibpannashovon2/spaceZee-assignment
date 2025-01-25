import { Outlet } from "react-router";
import Navbar from "../../Components/Navber";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
