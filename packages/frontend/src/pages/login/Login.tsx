import { AuthGoogle } from "../../features/auth/ui/login/AuthGoogleForm";
import LoginForm from "../../features/auth/ui/login/LoginForm";

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <AuthGoogle />
    </>
  );
};

export default LoginPage;
