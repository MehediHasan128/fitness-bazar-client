import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
       <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
