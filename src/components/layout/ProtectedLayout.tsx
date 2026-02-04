import { useAuthStore } from "@/features/auth/auth.store";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <Navigate state={location.pathname} to="/auth/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedLayout;
