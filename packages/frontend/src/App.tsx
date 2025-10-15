import { Outlet } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout/AppLayout";
import "./index.css";

function App() {
  return (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </>
  );
}

export default App;
