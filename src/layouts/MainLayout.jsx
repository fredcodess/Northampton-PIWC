import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
