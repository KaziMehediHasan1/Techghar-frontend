import MainLayout from "@/components/layout/MainLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  // it's for admin and normal users only
  {
    path: "/",
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
    path: "",
    element: "",
    errorElement: "",
    children: [
      {
        path: "",
        element: "",
      },
    ],
  },
]);
