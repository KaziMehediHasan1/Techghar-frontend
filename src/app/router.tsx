import AdminLayout from "@/components/layout/AdminLayout";
import MainLayout from "@/components/layout/MainLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import UserPage from "@/features/dashboard/pages/UserPage";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  // it's for admin and normal users only
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      // both users side -
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // secure path -
    ],
  },

  // it's for admin only
  {
    path: "/dashboard",
    element: <ProtectedLayout />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "/dashboard/user",
            element: <UserPage />,
          },
        ],
      },
    ],
  },
]);
