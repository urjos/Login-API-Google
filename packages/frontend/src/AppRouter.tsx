import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { RegisterForm } from "./pages/register";
import { Profile } from "./pages/profile";

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
        element: <RegisterForm />,
      },
    ],
  },
]);

export default routes;
