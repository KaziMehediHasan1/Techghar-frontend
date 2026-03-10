import AdminLayout from "@/components/layout/AdminLayout";
import MainLayout from "@/components/layout/MainLayout";
import PaymentPage from "@/features/checkout/pages/CheckoutPage";
import Overview from "@/features/dashboard/pages/Overview";
import UserList from "@/features/dashboard/user/pages/UserList";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import TermsAndCondition from "@/pages/TermsAndCondition";
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
      {
        path: "/terms",
        element: <TermsAndCondition />,
      },
      // secure path -
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/users-dashboard",
        children: [
          { path: "list", element: <UserList /> },
          { path: "admin/staff", element: "staff" },
          { path: "spam-alerts", element: "alerts" },
        ],
      },
    ],
  },

  // it's for admin only
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Overview /> },

      {
        path: "users",
        children: [
          { path: "list", element: <UserList /> }, // details (hide)
          { path: "admin/staff", element: "staff" },
          { path: "spam-alerts", element: "alerts" },
        ],
      },

      {
        path: "commerce",
        children: [
          { path: "product/list", element: "product listing" },
          { path: "product/create", element: "product create" },
          { path: "product/orders", element: "product orders" },
          { path: "product/payment", element: "payment" },
          { path: "product/coupons", element: "product orders" },
        ],
      },

      {
        path: "content",
        children: [
          { path: "blogs", element: "blogses" },
          { path: "reviews", element: "reviews" },
          { path: "contact", element: "contact" },
        ],
      },

      {
        path: "settings",
        children: [{ path: "settings", element: "settings" }],
      },
    ],
  },
]);
