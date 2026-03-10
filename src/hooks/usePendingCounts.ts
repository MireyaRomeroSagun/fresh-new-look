import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useApp } from "@/context/AppContext";

interface PendingCounts {
  pendingRevalidations: number;
  rewardsCount: number;
  pendingEvaluations: number;
  pendingLoans: number;
  openIncidents: number;
}

function fetchPendingCounts(): Promise<PendingCounts> {
  return Promise.resolve({
    pendingRevalidations: 41,
    rewardsCount: 3,
    pendingEvaluations: 8,
    pendingLoans: 3,
    openIncidents: 2,
  });
}

export function usePendingCounts() {
  const { setPendingRevalidations, setRewardsCount } = useApp();

  const { data } = useQuery<PendingCounts>({
    queryKey: ["pendingCounts"],
    queryFn: fetchPendingCounts,
    refetchInterval: 30000,
    staleTime: 30000,
  });

  useEffect(() => {
    if (data) {
      setPendingRevalidations(data.pendingRevalidations);
      setRewardsCount(data.rewardsCount);
    }
  }, [data, setPendingRevalidations, setRewardsCount]);

  return {
    pendingRevalidations: data?.pendingRevalidations ?? 0,
    rewardsCount: data?.rewardsCount ?? 0,
    pendingEvaluations: data?.pendingEvaluations ?? 0,
    pendingLoans: data?.pendingLoans ?? 0,
    openIncidents: data?.openIncidents ?? 0,
  };
}
