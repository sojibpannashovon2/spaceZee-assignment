import { Outlet } from "react-router";
import Navbar from "../../Components/Navber";

import RecipeCarousel from "../../Components/RecipeCarousel";
import TastyRecipe from "../../Components/TastyRecipe";
import ChefDetails from "../../Components/ChefDetails";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet></Outlet>

        <RecipeCarousel />
        <TastyRecipe />

        <ChefDetails />
      </div>
    </>
  );
};

export default Home;
