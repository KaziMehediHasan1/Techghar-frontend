import AdBar from "@/components/layout/AdBar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ChatBot from "@/features/chat/components/pages/ChatBot";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <header>
        <AdBar />
        <Navbar />
      </header>
      <main className="flex-1 w-full">
        <Outlet />
        <ChatBot/>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
