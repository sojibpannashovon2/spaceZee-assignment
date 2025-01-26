import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer/Footer";
import Navber from "../Components/Navber";
const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
