import { Navigate, Outlet } from "react-router-dom";
import { useSessionStore } from "../entities/store/SessionStore";

export function ProtectedRoute() {
  const { session } = useSessionStore();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
