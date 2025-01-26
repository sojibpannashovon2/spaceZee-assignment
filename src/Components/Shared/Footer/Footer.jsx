import logo from "../../../../public/logo/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const customFontStyle2 = {
    fontFamily: "CustomFont-2",
  };
  return (
    <footer
      style={customFontStyle2}
      className="relative mx-auto xl:lg:w-[1280px] bg-blueGray-200 pt-8 pb-6 "
    >
      <div className="container mx-auto ">
        <div className="xl:lg:flex justify-between items-center">
          <div>
            <img className="w-32 h-32" src={logo} alt="" />
            <h5 className="text-lg w-fit mt-[-30px] mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
          </div>
          <div className="flex gap-10">
            <a href="">Recipes</a>
            <a href="">Blogs</a>
            <a href="">Contact</a>
            <a href="">About us</a>
          </div>
        </div>
      </div>
      <hr className="my-6 border-slate-300" />
      <div className="xl:lg:flex flex-wrap items-center md:justify-between justify-center">
        <div className=" flex items-center justify-between w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {currentYear}{" "}
            <a
              href="https://www.creative-tim.com/product/notus-js"
              className="text-blueGray-500 hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              SpaceZee
            </a>
            .
          </div>

          <div className="flex gap-4 items-center">
            <a href="" className="w-[9.92px] h-[19.84px] ">
              <FaFacebookF />
            </a>
            <a href="" className="">
              <FaTwitter />
            </a>
            <a href="" className="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
