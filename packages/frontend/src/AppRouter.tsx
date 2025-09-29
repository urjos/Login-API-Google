import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { RegisterForm } from "./pages/register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />, // protege todas las rutas internas
        children: [{ index: true, element: <HomePage /> }],
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
