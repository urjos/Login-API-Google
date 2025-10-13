import { AuthGoogle } from "../login/body/AuthGoogle";
import LoginForm from "../login/body/LoginForm";

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <AuthGoogle />
    </>
  );
};

export default LoginPage;
