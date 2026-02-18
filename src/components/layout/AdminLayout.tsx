import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import { IconBundler } from "@/assets/icons/IconBundler";

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-background font-dashboard">
      {/* ১. সাইডবার সেকশন */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full max-w-[20%] transform bg-white shadow-lg transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          closeSidebar={() => setSidebarOpen(false)}
          setSidebarOpen={() => setSidebarOpen}
        />
      </div>

      {/* ২. মেইন কন্টেন্ট সেকশন */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* মোবাইল হেডার (শুধু মোবাইলে দেখাবে) */}
        <header className="flex items-center justify-between p-4 bg-white border-b lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="p-2">
            <IconBundler.SliderH className="w-6 h-6" />
          </button>
          <span className="font-bold text-primary">Admin Panel</span>
          <div className="w-6" /> {/* ব্যালেন্স করার জন্য */}
        </header>

        {/* ৩. আউটলেট বা মেইন কন্টেন্ট */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* মোবাইল ওভারলে (সাইডবার ওপেন থাকলে পেছনের অংশ ঝাপসা করা) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
