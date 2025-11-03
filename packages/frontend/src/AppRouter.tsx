import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Profile } from "./pages/profile/Profile";
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { ForgotPasswordForm } from "./features/auth/ui/login/ForgotPassword";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "profile", element: <Profile /> },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordForm />,
      },
    ],
  },
]);

export default routes;
