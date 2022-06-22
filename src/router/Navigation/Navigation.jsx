import { Outlet } from "react-router";
import Header from "../../Components/Header";

const Navigation = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Navigation;
