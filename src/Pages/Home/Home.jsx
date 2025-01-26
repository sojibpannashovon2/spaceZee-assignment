import RecipeCarousel from "../../Components/RecipeCarousel";
import TastyRecipe from "../../Components/TastyRecipe";
import ChefDetails from "../../Components/ChefDetails";
import InstagramContainer from "../../Components/InstagramSection/InstagramContainer";
import Inbox from "../../Components/Inbox/Inbox";

const Home = () => {
  return (
    <>
      <div className="">
        <RecipeCarousel />
        <TastyRecipe />

        <ChefDetails />

        <InstagramContainer />

        <Inbox />
      </div>
    </>
  );
};

export default Home;
