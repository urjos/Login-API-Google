import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./AppRouter.tsx";
import "./index.css";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
console.log(CLIENT_ID);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <RouterProvider router={routes} />
    </GoogleOAuthProvider>
  </StrictMode>
);
