import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
