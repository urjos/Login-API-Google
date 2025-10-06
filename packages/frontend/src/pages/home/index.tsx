import Footer from "../../components/layouts/Footer";
import { Header } from "../../components/layouts/Header";
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
