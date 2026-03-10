import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface AppUser {
  id: number;
  login: string;
  name: string;
  initials: string;
  rolId: number;
  isSupervisor: boolean;
  isProgrammer: boolean;
  companyId: number;
  companyName: string;
  empresaTress: string;
  hrUserId: number;
}

interface AppContextType {
  user: AppUser;
  pendingRevalidations: number;
  setPendingRevalidations: (n: number) => void;
  rewardsCount: number;
  setRewardsCount: (n: number) => void;
  syncStatus: string;
  setSyncStatus: (s: string) => void;
  syncProgress: number;
  setSyncProgress: (n: number) => void;
  activeCompany: { id: number; name: string };
  setActiveCompany: (c: { id: number; name: string }) => void;
}

const mockUser: AppUser = {
  id: 1,
  login: "mromero",
  name: "M. Romero",
  initials: "MR",
  rolId: 1,
  isSupervisor: true,
  isProgrammer: true,
  companyId: 1,
  companyName: "Grupo Industrial Persal",
  empresaTress: "PERSAL",
  hrUserId: 1,
};

const defaultCompany = { id: 1, name: "Grupo Industrial Persal" };

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [pendingRevalidations, setPendingRevalidations] = useState(0);
  const [rewardsCount, setRewardsCount] = useState(0);
  const [syncStatus, setSyncStatus] = useState("");
  const [syncProgress, setSyncProgress] = useState(0);
  const [activeCompany, setActiveCompanyState] = useState<{ id: number; name: string }>(() => {
    try {
      const stored = localStorage.getItem("HR_Selected_Company");
      if (stored) return JSON.parse(stored) as { id: number; name: string };
    } catch {
      // ignore
    }
    return defaultCompany;
  });

  const setActiveCompany = (c: { id: number; name: string }) => {
    setActiveCompanyState(c);
    localStorage.setItem("HR_Selected_Company", JSON.stringify(c));
  };

  // Simulate sync on first load
  useEffect(() => {
    setSyncStatus("Sincronizando datos...");
    setSyncProgress(0);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setSyncProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setSyncStatus("Sincronización completa");
        setTimeout(() => {
          setSyncStatus("");
          setSyncProgress(0);
        }, 1000);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppContext.Provider
      value={{
        user: mockUser,
        pendingRevalidations,
        setPendingRevalidations,
        rewardsCount,
        setRewardsCount,
        syncStatus,
        setSyncStatus,
        syncProgress,
        setSyncProgress,
        activeCompany,
        setActiveCompany,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
