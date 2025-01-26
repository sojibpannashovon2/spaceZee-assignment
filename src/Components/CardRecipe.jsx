import { BsFillStopwatchFill } from "react-icons/bs";
import { TbToolsKitchen2 } from "react-icons/tb";
import cardone from "../assets/CardImage/cardone.png";
const CardRecipe = () => {
  return (
    <>
      <div className="bg-[#E7FAFE] rounded-[30px] shadow-md h-[434px] overflow-hidden max-w-sm w-[400px] p-4">
        {/* Image Section */}
        <div className="relative">
          <img
            src={cardone}
            alt="Product"
            className="w-full h-64 object-cover rounded-[30px]"
          />

          <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
            <svg
              className="w-4 h-4 text-red-500 "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Product Details */}
        <div className="">
          {/* Title and Category */}
          <div className="flex justify-between items-start mb-2 pb-4">
            <div>
              <h2 className="text-[24px] font-semibold text-gray-800 pt-6 ">
                Premium Wireless Headphones
              </h2>
              <div className="flex items-center space-x-4 ">
                <div className=" text-[14px]   flex items-center gap-2 ">
                  <BsFillStopwatchFill className="text-black" />

                  <span className="text-gray-600">30 Minutes</span>
                </div>
                <div className="p-2 text-[14px]  flex items-center gap-2 ">
                  <TbToolsKitchen2 className="text-black" />
                  <span className="text-gray-600">Chiken</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRecipe;
