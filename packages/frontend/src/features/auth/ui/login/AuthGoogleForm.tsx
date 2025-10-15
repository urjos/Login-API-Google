import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../entities/types/api";
import { useState } from "react";
import { useSessionStore } from "../../../../entities/store/SessionStore";

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

export function AuthGoogle() {
  const { session, setSession } = useSessionStore(); // Asegúrate que esta línea usa useSessionStore
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  if (session) navigate("/");
  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    setError(null);
    if (!credentialResponse.credential) {
      setError("No se recibió la credencial de Google.");
      return;
    }

    try {
      // Envía el token de Google a tu backend
      const response = await api.post("/auth/google/login", {
        token: credentialResponse.credential,
      });

      setSession({
        userId: response.data.id,
        picture: response.data.picture,
        username: response.data.username,
        name: response.data.name,
        email: response.data.email,
        country: response.data.country,
        token: response.data.token,
        auth_provider: response.data.auth_provider,
      });
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Error al iniciar sesión con Google."
      );
    }
  };

  const handleLoginError = () => {
    setSession(null);
  };

  return (
    <div className="flex flex-col items-center">
      {error && (
        <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
      )}
      <div className="transition delay-100 duration-200 ease-in-out  hover:scale-98 cursor-pointer">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </div>
  );
}
