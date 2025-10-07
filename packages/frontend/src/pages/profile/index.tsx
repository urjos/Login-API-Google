import Footer from "../../components/layouts/Footer";
import { Header } from "../../components/layouts/Header";
import Table from "../../components/layouts/Table";
import { useSession } from "../../contexts/SessionContext";
import { ProfileBody } from "./body";

export const Profile = () => {
  const { clearSession } = useSession();
  return (
    <>
      <Header onLogout={clearSession} />
      <ProfileBody />
      <Table />
      <Footer />
    </>
  );
};
