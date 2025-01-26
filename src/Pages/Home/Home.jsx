import { Outlet } from "react-router";
import Navbar from "../../Components/Navber";
import Carousel from "../../Components/Carousel";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet></Outlet>
        <Carousel />

        <div>
          <h1>categori</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
