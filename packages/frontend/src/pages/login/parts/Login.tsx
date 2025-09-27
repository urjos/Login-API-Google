import { useSession } from "../../../contexts/SessionContext";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export type UserData = {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number;
  exp: number;
  jti: string;
};

export function Login() {
  const { session, setSession, clearSession } = useSession();
  const navigate = useNavigate();

  if (session) navigate("/");

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decodedData = jwtDecode<UserData>(credentialResponse.credential);
      console.log(decodedData.name);

      setSession({
        name: decodedData.name,
        email: decodedData.email,
        picture: decodedData.picture,
        userId: decodedData.sub,
        username: decodedData.given_name,
        token: credentialResponse.credential,
      });
    }
  };

  const handleLoginError = () => {
    clearSession();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </div>
  );
}
