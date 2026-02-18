import AdminLayout from "@/components/layout/AdminLayout";
import MainLayout from "@/components/layout/MainLayout";
import BlogsPage from "@/features/dashboard/blog/pages/BlogsPage";
import CouponsPage from "@/features/dashboard/coupon/pages/CouponsPage";
import OrdersPage from "@/features/dashboard/order/pages/OrdersPage";
import Overview from "@/features/dashboard/pages/Overview";
import PaymentsPage from "@/features/dashboard/payment/pages/PaymentsPage";
import PromotionsPage from "@/features/dashboard/promotion/pages/PromotionsPage";
import ReviewsPage from "@/features/dashboard/review/pages/ReviewsPage";
import UserPage from "@/features/dashboard/user/pages/UserPage";
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
    element: <AdminLayout />,
    children: [
      { index: true, element: <Overview /> },

      { path: "users", element: <UserPage /> },

      {
        path: "sales",
        children: [
          { path: "orders", element: <OrdersPage /> },
          { path: "payments", element: <PaymentsPage /> },
          { path: "coupons", element: <CouponsPage /> },
        ],
      },

      {
        path: "content",
        children: [
          { path: "blogs", element: <BlogsPage /> },
          { path: "reviews", element: <ReviewsPage /> },
        ],
      },

      {
        path: "marketing",
        children: [{ path: "promotions", element: <PromotionsPage /> }],
      },
    ],
  },
]);
