import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Session } from "../types/session";

type SessionState = {
  session: Session | null;
  setSession: (session: Session | null) => void;
  logout: () => void;
};

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      session: null,
      setSession: (session) => set({ session }),
      logout: () => set({ session: null }),
    }),
    {
      name: "session-storage",
    }
  )
);
