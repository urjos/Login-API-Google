import { Outlet } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import { SessionProvider } from "./contexts/SessionContext";
import "./index.css";

function App() {
  return (
    <>
      <SessionProvider>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </SessionProvider>
    </>
  );
}

export default App;
