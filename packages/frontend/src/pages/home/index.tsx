import Footer from "../../components/layouts/Footer";
import { Header } from "../../components/layouts/Header";
import { useSession } from "../../contexts/SessionContext";
import { Body } from "../body";

const HomePage = () => {
  const { clearSession } = useSession();

  return (
    <div>
      <Header onLogout={clearSession} />
      <Body onLogout={clearSession} />
      <Footer />
    </div>
  );
};

export default HomePage;
