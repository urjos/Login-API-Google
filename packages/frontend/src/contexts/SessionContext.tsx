import {
  createContext,
  useContext,
  useRef,
  useState,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";

export type Session = {
  userId: string;
  name: string;
  email: string;
  country?: string;
  picture?: string;
  username?: string;
  token: string;
};

type SessionContextType = {
  session: Session | null;
  setSession: (session: Session | null) => void;
  clearSession: () => void;
  wasSessionActive: boolean;
  isLoading: boolean;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const sessionRef = useRef<Session | null>(null);
  const [session, setSessionState] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedSession = localStorage.getItem("session");
      if (storedSession) {
        setSessionState(JSON.parse(storedSession));
        sessionRef.current = JSON.parse(storedSession);
      }
    } catch (error) {
      console.error("Failed to parse session from localStorage", error);
      localStorage.removeItem("session");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const setSession = (newSession: Session | null) => {
    sessionRef.current = session; // Guardamos el estado anterior
    setSessionState(newSession);
    if (newSession) {
      localStorage.setItem("session", JSON.stringify(newSession));
    } else {
      localStorage.removeItem("session");
    }
  };

  const clearSession = () => setSession(null);

  // Indica si hubo una sesión en algún momento antes del renderizado actual
  const wasSessionActive = !!sessionRef.current;

  const value = useMemo(
    () => ({ session, setSession, clearSession, isLoading, wasSessionActive }),
    [session, isLoading, wasSessionActive]
  );

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
