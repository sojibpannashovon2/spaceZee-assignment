import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsFillStopwatchFill } from "react-icons/bs";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiStabbedNote } from "react-icons/gi";
import carousel from "../assets/Carousel/Carousel.jpeg";
import author from "../assets/Author/author.png";

import image from "../assets/Icon/icon.png";
const RecipeCarousel = () => {
  const customFontStyle2 = {
    fontFamily: "CustomFont-2",
  };

  const recipes = [
    {
      title: "Spicy delicious chicken wings",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      time: "30 Minutes",
      type: "Chicken",
      author: "John Smith",
      date: "15 March 2022",
      image: carousel, // Replace with actual image URL
    },
    {
      title: "Tasty Pasta Alfredo",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
      time: "25 Minutes",
      type: "Pasta",
      author: "Jane Doe",
      date: "10 March 2022",
      image: carousel, // Replace with actual image URL
    },
  ];

  return (
    <div style={customFontStyle2} className="w-full py-10 2xl:xl:lg:px-12 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        className="max-w-7xl sm:w-full relative mx-auto rounded-2xl"
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <div className="  flex xl:lg:h-[640px] flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Left Section */}
              <div className=" flex-1  bg-[#E7FAFE] h-full p-12">
                <div className="mb-4 p-2 shadow-md w-fit bg-white flex items-center gap-2 rounded-full">
                  <GiStabbedNote />
                  <span className="  text-xs font-medium px-3 py-1 ">
                    Hot Recipes
                  </span>
                </div>
                <h2 className="text-[64px] font-bold mb-4">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 text-[14px] bg-gray-100 shadow-md w-fit  flex items-center gap-2 rounded-full">
                    <BsFillStopwatchFill className="text-black" />

                    <span>{recipe.time}</span>
                  </div>
                  <div className="p-2 text-[14px] shadow-md w-fit bg-gray-100 flex items-center gap-2 rounded-full">
                    <TbToolsKitchen2 className="text-black" />
                    <span>Chiken</span>
                  </div>
                </div>
                <div className="flex gap-28 items-center mt-16">
                  <div className="flex items-center mt-5 h-full">
                    <img
                      src={author} // Replace with author's profile image
                      alt={recipe.author}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-sm font-medium">{recipe.author}</p>
                      <p className="text-sm text-gray-500">{recipe.date}</p>
                    </div>
                  </div>
                  <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg">
                    View Recipes
                  </button>
                </div>
              </div>
              {/* Right Section */}
              <div className="flex-1 ">
                <div className="">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-[640px] object-cover "
                  />
                  <span className="absolute 2xl:xl:lg:ml-[-80px] 2xl:xl:lg:top-10     ">
                    <img className="w-[160px] h-[145px]" src={image} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecipeCarousel;
