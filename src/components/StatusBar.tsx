import { useApp } from "@/context/AppContext";

const StatusBar = () => {
  const { syncStatus, syncProgress } = useApp();

  return (
    <div className="flex h-7 items-center justify-between border-t border-border bg-secondary/50 px-4 text-[11px] text-muted-foreground shrink-0">
      <div className="flex items-center gap-3 min-w-0">
        {syncStatus && (
          <>
            <span className="truncate">{syncStatus}</span>
            {syncProgress > 0 && (
              <div className="h-2 w-24 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-200"
                  style={{ width: `${syncProgress}%` }}
                />
              </div>
            )}
          </>
        )}
      </div>
      <span className="shrink-0 font-medium">Vers. 1.0.0.0</span>
    </div>
  );
};

export default StatusBar;
