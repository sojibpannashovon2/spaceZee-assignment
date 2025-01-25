import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl">this is home</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
