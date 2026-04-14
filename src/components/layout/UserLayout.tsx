import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { useState } from 'react';

const UserLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex min-h-screen font-dashboard">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="w-full px-6 py-5 bg-accent">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
