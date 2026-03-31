import AdminLayout from '@/components/layout/AdminLayout';
import MainLayout from '@/components/layout/MainLayout';
import LoginPage from '@/features/auth/pages/LoginPage';
import SingUpPage from '@/features/auth/pages/SingUpPage';
import Cart from '@/features/cart/pages/Cart';
import Catalog from '@/features/catalog/pages/Catalog';
import PaymentPage from '@/features/checkout/pages/PaymentPage';
import PaymentSuccess from '@/features/checkout/pages/PaymentSuccess';
import OrdersPage from '@/features/dashboard/order/pages/OrdersPage';
import Overview from '@/features/dashboard/pages/Overview';
import AddProduct from '@/features/dashboard/product/pages/AddProduct';
import ProductDashboardPage from '@/features/dashboard/product/pages/ProductDashboardPage';
import UserList from '@/features/dashboard/user/pages/UserList';
import NewProduct from '@/features/product/pages/NewProduct';
import ProductDetails from '@/features/product/pages/ProductDetails';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import TermsAndCondition from '@/pages/TermsAndCondition';
import { createBrowserRouter } from 'react-router-dom';
import BlogsPage from '../features/dashboard/blog/pages/BlogDashboardPage';
import AddBlog from '@/features/dashboard/blog/pages/AddBlog';

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
        path: '/catalog/:categoryName',
        element: <Catalog />,
      },
      {
        path: '/new_product',
        element: <NewProduct />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/terms',
        element: <TermsAndCondition />,
      },
      // secure path -
      {
        path: '/payment',
        element: <PaymentPage />,
      },
      { path: '/payment-success', element: <PaymentSuccess /> },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SingUpPage />,
      },
    ],
  },

  // users dashboard ---

  // it's for admin only
  {
    path: '/dashboard',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Overview /> },

      {
        path: 'users',
        children: [
          { path: 'list', element: <UserList /> },
          { path: 'admin/staff', element: 'staff' },
          { path: 'spam-alerts', element: 'alerts' },
        ],
      },

      {
        path: 'commerce',
        children: [
          { path: 'product/list', element: <ProductDashboardPage /> },
          { path: 'product/create', element: <AddProduct /> },
          { path: 'product/orders', element: <OrdersPage /> },
          { path: 'product/payment', element: 'payment' },
          { path: 'product/coupons', element: 'product orders' },
        ],
      },

      {
        path: 'content',
        children: [
          { path: 'blogs', element: <BlogsPage /> },
          { path: 'blogs/create', element: <AddBlog /> },
          { path: 'reviews', element: 'reviews' },
          { path: 'contact', element: 'contact' },
        ],
      },

      {
        path: 'settings',
        children: [{ path: 'settings', element: 'settings' }],
      },
    ],
  },
]);
