import { useNavigate } from "react-router-dom";
import KpiCard from "@/components/KpiCard";
import StatusBar from "@/components/StatusBar";
import { useApp } from "@/context/AppContext";
import { usePendingCounts } from "@/hooks/usePendingCounts";
import {
  Users,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  Award,
  Target,
  Bell,
  Search,
  Calendar,
  ArrowUpRight,
  Clock,
  AlertTriangle,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

const recentActivities = [
  { icon: UserCheck, label: "Juan Pérez completó inducción", time: "Hace 12 min", color: "text-success" },
  { icon: GraduationCap, label: "Capacitación ISO 9001 programada", time: "Hace 1 hora", color: "text-info" },
  { icon: AlertTriangle, label: "41 revalidaciones pendientes", time: "Hace 2 horas", color: "text-warning" },
  { icon: CheckCircle2, label: "Evaluación 360° de Dic completada", time: "Hace 3 horas", color: "text-success" },
  { icon: Award, label: "María López recibió reconocimiento", time: "Ayer", color: "text-primary" },
];

const urgencyStyles = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-warning/10 text-warning",
  low: "bg-info/10 text-info",
};

const Index = () => {
  const navigate = useNavigate();
  const { user, activeCompany, rewardsCount } = useApp();
  const {
    pendingRevalidations,
    pendingEvaluations,
    pendingLoans,
    openIncidents,
  } = usePendingCounts();

  const pendingTasks = [
    { label: "Revalidaciones de capacitación", count: pendingRevalidations, urgency: "high" as const, href: "/revalidations" },
    { label: "Evaluaciones por revisar", count: pendingEvaluations, urgency: "medium" as const, href: "/evaluations/browser" },
    { label: "Solicitudes de préstamo", count: pendingLoans, urgency: "low" as const, href: "/loans/browser" },
    { label: "Incidentes sin cerrar", count: openIncidents, urgency: "high" as const, href: "/safety/register" },
  ];

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Buen día";
    if (h < 18) return "Buenas tardes";
    return "Buenas noches";
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Top bar */}
      <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6 shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
          <span className="text-sm text-muted-foreground hidden sm:inline">
            {activeCompany.name}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar empleados, capacitaciones..."
              className="h-9 w-72 rounded-lg bg-secondary pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>
          <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary transition-colors">
            <Bell size={18} />
            {rewardsCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                {rewardsCount}
              </span>
            )}
          </button>
          <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5">
            <Calendar size={14} className="text-muted-foreground" />
            <span className="text-xs font-medium text-foreground">
              {new Date().toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" })}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Welcome */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            {greeting()}, {user.name} 👋
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Aquí tienes el resumen de Recursos Humanos de hoy.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard
            label="Empleados Activos"
            value="191"
            change="+3 este mes"
            changeType="positive"
            icon={<Users size={20} />}
            color="primary"
          />
          <KpiCard
            label="Aceptación Clientes"
            value="98.6%"
            change="+0.2% vs mes anterior"
            changeType="positive"
            icon={<TrendingUp size={20} />}
            color="success"
          />
          <KpiCard
            label="Entregas a Tiempo"
            value="98.6%"
            change="Meta: 97%"
            changeType="positive"
            icon={<Target size={20} />}
            color="info"
          />
          <KpiCard
            label="Índice OSHA"
            value="7"
            change="-2 vs año anterior"
            changeType="positive"
            icon={<ShieldCheck size={20} />}
            color="warning"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quality Policy */}
          <div className="lg:col-span-2 rounded-xl bg-card border border-border p-6 shadow-sm">
            <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award size={18} className="text-primary" />
              Política de Calidad
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed text-justify">
              En Persal, nuestro compromiso es la total satisfacción de nuestros clientes externos e
              internos a través de la mejora continua de nuestros procesos y colaboración de nuestro
              personal.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-primary/5 border border-primary/10 p-4 text-center">
                <p className="text-2xl font-bold text-primary">98.6%</p>
                <p className="text-xs text-muted-foreground mt-1">Aceptación Clientes</p>
              </div>
              <div className="rounded-lg bg-success/5 border border-success/10 p-4 text-center">
                <p className="text-2xl font-bold text-success">98.6%</p>
                <p className="text-xs text-muted-foreground mt-1">Entregas a Tiempo</p>
              </div>
              <div className="rounded-lg bg-info/5 border border-info/10 p-4 text-center">
                <p className="text-2xl font-bold text-info">7</p>
                <p className="text-xs text-muted-foreground mt-1">Índice OSHA</p>
              </div>
            </div>
          </div>

          {/* Pending Tasks */}
          <div className="rounded-xl bg-card border border-border p-6 shadow-sm">
            <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              Pendientes
            </h3>
            <div className="space-y-3">
              {pendingTasks.map((task, i) => (
                <button
                  key={i}
                  onClick={() => navigate(task.href)}
                  className="flex w-full items-center justify-between rounded-lg bg-secondary/50 px-4 py-3 hover:bg-secondary transition-colors cursor-pointer group text-left"
                >
                  <span className="text-sm text-foreground">{task.label}</span>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${urgencyStyles[task.urgency]}`}>
                      {task.count}
                    </span>
                    <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 rounded-xl bg-card border border-border p-6 shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
            <Bell size={18} className="text-primary" />
            Actividad Reciente
          </h3>
          <div className="space-y-1">
            {recentActivities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg px-4 py-3 hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary ${activity.color}`}>
                    <Icon size={16} />
                  </div>
                  <span className="flex-1 text-sm text-foreground">{activity.label}</span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <StatusBar />
    </div>
  );
};

export default Index;
