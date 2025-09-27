import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

export function ProtectedRoute() {
  const { session } = useSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
