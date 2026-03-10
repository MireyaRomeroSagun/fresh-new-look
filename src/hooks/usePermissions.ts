import { useApp } from "@/context/AppContext";

export function usePermissions() {
  const { user, pendingRevalidations } = useApp();

  const supervisorGroups = new Set([
    "trainings",
    "evaluations",
    "efficiencies",
    "support",
    "competencies",
    "induction",
  ]);

  const alwaysEnabled = new Set([
    "employment-history",
    "others",
    "catalogs",
    "loans",
    "safety",
  ]);

  function isMenuItemEnabled(key: string): boolean {
    if (user.isProgrammer) return true;
    if (key === "revalidations") {
      return pendingRevalidations > 0 && (user.isSupervisor || user.isProgrammer);
    }
    if (key === "rewards") return true;
    if (alwaysEnabled.has(key)) return true;
    if (user.isSupervisor && supervisorGroups.has(key)) return true;
    return false;
  }

  function isRevalidationsVisible(): boolean {
    return pendingRevalidations > 0 && (user.isSupervisor || user.isProgrammer);
  }

  return { isMenuItemEnabled, isRevalidationsVisible };
}
