import { DeleteUser } from "../../features/profile/ui/DeleteForm";
import { Footer } from "../../components/layouts/AppLayout/footer/Footer";
import { ProfileBody } from "../../features/profile/ui/UpdateForm";
import { Header } from "../../components/layouts/AppLayout/header/Header";

export const Profile = () => {
  return (
    <>
      <Header />
      <ProfileBody />
      <DeleteUser />
      <Footer />
    </>
  );
};
