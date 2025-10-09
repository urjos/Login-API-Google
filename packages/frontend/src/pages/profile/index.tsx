import { DeleteUser } from "../../components/layouts/DeleteAccount";
import { Footer } from "../../components/layouts/AppLayout/Footer";
import { Header } from "../../components/layouts/AppLayout/Header";
import { useSession } from "../../contexts/SessionContext";
import { ProfileBody } from "./body";

export const Profile = () => {
  const { clearSession } = useSession();
  return (
    <>
      <Header onLogout={clearSession} />
      <ProfileBody />
      <DeleteUser />
      <Footer />
    </>
  );
};
