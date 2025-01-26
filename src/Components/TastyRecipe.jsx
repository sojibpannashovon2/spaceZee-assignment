import useFetchRecipes from "../Hooks/useFetchRecipes";
import CardRecipe from "./CardRecipe";

const TastyRecipe = () => {
  const customFontStyle2 = {
    fontFamily: "CustomFont-2",
  };

  const { recipes } = useFetchRecipes();
  console.log(recipes);
  return (
    <>
      <div
        style={customFontStyle2}
        className="2xl:xl:lg:px-12 mx-auto w-[1280px] items-center justify-center   "
      >
        <div className="text-center py-16">
          <h1 className="text-[48px] font-semibold">
            Simple and tasty recipes
          </h1>
          <p>
            Brighten up your summer with simple and tasty recipes bursting with
            fresh, vibrant flavors!
          </p>
        </div>

        <div className="grid xl:lg:grid-cols-3 grid-cols-1 gap-4">
          {recipes?.map((recipe) => (
            <CardRecipe key={recipe?.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TastyRecipe;
