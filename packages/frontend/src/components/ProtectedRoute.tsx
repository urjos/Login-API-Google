import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

export function ProtectedRoute() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <div>Loading session...</div>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
