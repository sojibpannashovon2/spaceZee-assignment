import chef from "../assets/Chef/chef.png";

const ChefDetails = () => {
  return (
    <>
      <div className="xl:lg:px-12 my-18 mx-auto xl:lg:w-[1280px] ">
        <div className=" flex xl:lg:h-[597px] flex-col lg:flex-row items-center bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Left Section */}
          <div className="w-full flex-1 h-full p-4 ">
            <h2 className="xl:lg:text-[48px] font-bold mb-4 mt-24 text-justify">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="text-gray-600 mb-4">
              Everyone can be a chef in their own kitchen with a dash of
              creativity and the right recipe!
            </p>

            <div className=" mt-16">
              <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-[100%] flex-1 ">
            <div className="bg-[#E7FAFE]">
              <img src={chef} className="w-fit h-[640px] object-cover " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
