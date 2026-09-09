import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { AgeGroup } from "@/data/content";

interface Profile {
  nickname: string;
  age: AgeGroup;
}

interface SessionContextValue {
  profile: Profile | null;
  completedModules: string[];
  setProfile: (profile: Profile) => void;
  completeModule: (id: string) => void;
  resetSession: () => void;
}

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<Profile | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const value = useMemo<SessionContextValue>(() => ({
    profile,
    completedModules,
    setProfile: setProfileState,
    completeModule: (id) => setCompletedModules((current) => current.includes(id) ? current : [...current, id]),
    resetSession: () => { setProfileState(null); setCompletedModules([]); },
  }), [profile, completedModules]);
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) throw new Error("useSession harus digunakan di dalam SessionProvider");
  return context;
}