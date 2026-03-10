import { useNavigate } from "react-router-dom";
import StatusBar from "@/components/StatusBar";
import { AlertCircle, ArrowLeft, Clock } from "lucide-react";
import { useApp } from "@/context/AppContext";

const PendingRevalidations = () => {
  const navigate = useNavigate();
  const { pendingRevalidations } = useApp();

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex h-16 items-center border-b border-border bg-card px-6 shadow-sm shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary transition-colors"
        >
          <ArrowLeft size={16} />
        </button>
        <div>
          <h1 className="text-lg font-semibold text-foreground">Revalidaciones Pendientes</h1>
          <p className="text-xs text-muted-foreground">Capacitaciones que requieren revalidación</p>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-lg">
          <div className="rounded-xl bg-card border border-border p-8 shadow-sm text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <AlertCircle size={32} />
            </div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-destructive font-bold text-3xl">
                <Clock size={24} />
                {pendingRevalidations}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Revalidaciones Pendientes</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Existen <strong>{pendingRevalidations}</strong> capacitaciones que requieren revalidación.
              Este módulo replica la función <code>ReEntry_Main_Menu</code> del sistema anterior,
              mostrando el conteo de revalidaciones pendientes con una insignia roja cuando hay elementos por atender.
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft size={16} />
              Volver al Dashboard
            </button>
          </div>
        </div>
      </main>
      <StatusBar />
    </div>
  );
};

export default PendingRevalidations;
