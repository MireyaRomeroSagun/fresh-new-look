import { useNavigate } from "react-router-dom";
import StatusBar from "@/components/StatusBar";
import { Landmark, ArrowLeft } from "lucide-react";

const LoanBrowser = () => {
  const navigate = useNavigate();
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
          <h1 className="text-lg font-semibold text-foreground">Préstamos</h1>
          <p className="text-xs text-muted-foreground">Explorador</p>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-lg">
          <div className="rounded-xl bg-card border border-border p-8 shadow-sm text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Landmark size={32} />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Explorador de Préstamos</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Módulo en construcción — funcionalidad completa próximamente
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

export default LoanBrowser;
