import { Outlet } from "react-router";
import Navbar from "../../Components/Navber";

import RecipeCarousel from "../../Components/RecipeCarousel";
import TastyRecipe from "../../Components/TastyRecipe";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet></Outlet>

        <RecipeCarousel />
        <TastyRecipe />
      </div>
    </>
  );
};

export default Home;
