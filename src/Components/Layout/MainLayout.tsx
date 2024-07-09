import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="h-screen">
        <h1>This is home page</h1>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
