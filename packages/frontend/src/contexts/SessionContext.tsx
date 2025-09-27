import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

type UserSession = {
  name: string;
  picture: string;
  email: string;
  userId: string;
  username: string;
  token: string;
} | null;

type SessionContextType = {
  session: UserSession;
  setSession: (session: UserSession) => void;
  clearSession: () => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

type SessionProviderProps = {
  children: ReactNode;
};

const STORAGE_KEY = "user_session";

export const SessionProvider = ({ children }: SessionProviderProps) => {
  // ✅ inicializar directamente desde localStorage
  const [session, setSessionState] = useState<UserSession>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  });

  const setSession = (sessionData: UserSession) => {
    setSessionState(sessionData);
    if (sessionData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const clearSession = () => {
    setSessionState(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <SessionContext.Provider value={{ session, setSession, clearSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
};
