import useFetchRecipes from "../Hooks/useFetchRecipes";

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
        className="2xl:xl:lg:px-12 max-auto gird grid-cols-3 gap-14 items-center justify-center min-h-screen p-4 px-12"
      ></div>
    </>
  );
};

export default TastyRecipe;
