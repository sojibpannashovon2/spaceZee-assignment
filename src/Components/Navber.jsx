import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const customFontStyle = {
    fontFamily: "CustomFont-1",
  };
  const customFontStyle2 = {
    fontFamily: "CustomFont-2",
  };
  return (
    <nav className="bg-white border-gray-200 py-5 dark:bg-gray-900 2xl:xl:lg:md:w-[1279.96px] shadow-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-12 mx-auto ">
        <a href="#" className="">
          <span
            style={customFontStyle}
            className="self-center text-xl  whitespace-nowrap dark:text-white"
          >
            Foodieland{" "}
            <span className="text-orange-500 text-2xl ml-[-4px]">.</span>
          </span>
        </a>
        <div className="flex items-center lg:order-2 gap-4">
          <a href="" className="w-[9.92px] h-[19.84px] ">
            <FaFacebookF />
          </a>
          <a href="" className="">
            <FaTwitter />
          </a>
          <a href="" className="">
            <FaInstagram />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu"
        >
          <ul
            style={customFontStyle2}
            className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
                href="#"
                className="block py-2 text-[16px] pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" block py-2 pl-3 pr-4 text-[16px] text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 text-[16px] pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 text-[16px] pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 text-[16px] pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
