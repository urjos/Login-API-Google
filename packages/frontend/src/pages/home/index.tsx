import { Footer } from "../../components/layouts/AppLayout/Footer";
import { Header } from "../../components/layouts/AppLayout/Header";
import { useSession } from "../../contexts/SessionContext";
import { Body } from "./body";

const HomePage = () => {
  const { clearSession } = useSession();

  return (
    <>
      <Header onLogout={clearSession} />
      <Body />
      <Footer />
    </>
  );
};

export default HomePage;
