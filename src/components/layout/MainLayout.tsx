import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
