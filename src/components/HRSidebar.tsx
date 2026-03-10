import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  GraduationCap,
  History,
  UserPlus,
  ClipboardCheck,
  BarChart3,
  Wrench,
  BookOpen,
  Landmark,
  Brain,
  Gift,
  ShieldCheck,
  Settings,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";

interface NavGroup {
  label: string;
  icon: React.ElementType;
  items: { label: string; href: string }[];
}

const navGroups: NavGroup[] = [
  {
    label: "Capacitaciones",
    icon: GraduationCap,
    items: [
      { label: "Sesiones", href: "/trainings/sessions" },
      { label: "Explorador", href: "/trainings/browser" },
      { label: "Internas", href: "/trainings/internal" },
      { label: "Por usuario", href: "/trainings/by-user" },
      { label: "Por puesto", href: "/trainings/by-position" },
      { label: "Reportes", href: "/trainings/reports" },
    ],
  },
  {
    label: "Historial laboral",
    icon: History,
    items: [
      { label: "Expedientes", href: "/history/records" },
      { label: "Historial de puestos", href: "/history/positions" },
      { label: "Historial salarial", href: "/history/salary" },
    ],
  },
  {
    label: "Inducción",
    icon: UserPlus,
    items: [
      { label: "Nuevos ingresos", href: "/induction/new" },
      { label: "Checklist", href: "/induction/checklist" },
    ],
  },
  {
    label: "Evaluaciones",
    icon: ClipboardCheck,
    items: [
      { label: "Desempeño", href: "/evaluations/performance" },
      { label: "360°", href: "/evaluations/360" },
      { label: "Plantillas", href: "/evaluations/templates" },
    ],
  },
  {
    label: "Eficiencias",
    icon: BarChart3,
    items: [
      { label: "Seguimiento", href: "/efficiencies/tracking" },
      { label: "Productividad", href: "/efficiencies/productivity" },
      { label: "Asistencia", href: "/efficiencies/attendance" },
    ],
  },
  {
    label: "Módulos de apoyo",
    icon: Wrench,
    items: [
      { label: "Documentos", href: "/support/documents" },
      { label: "Solicitudes", href: "/support/requests" },
    ],
  },
  {
    label: "Catálogos",
    icon: BookOpen,
    items: [
      { label: "Departamentos", href: "/catalogs/departments" },
      { label: "Puestos", href: "/catalogs/positions" },
      { label: "Ubicaciones", href: "/catalogs/locations" },
      { label: "Centros de costo", href: "/catalogs/cost-centers" },
    ],
  },
  {
    label: "Préstamos",
    icon: Landmark,
    items: [
      { label: "Activos", href: "/loans/active" },
      { label: "Solicitudes", href: "/loans/requests" },
      { label: "Reportes", href: "/loans/reports" },
    ],
  },
  {
    label: "Competencias",
    icon: Brain,
    items: [
      { label: "Matriz", href: "/competencies/matrix" },
      { label: "Evaluación", href: "/competencies/assessment" },
    ],
  },
  {
    label: "Persal Rewards",
    icon: Gift,
    items: [
      { label: "Programas", href: "/rewards/programs" },
      { label: "Puntos", href: "/rewards/points" },
      { label: "Canjear", href: "/rewards/redeem" },
    ],
  },
  {
    label: "Seguridad",
    icon: ShieldCheck,
    items: [
      { label: "Incidentes", href: "/safety/incidents" },
      { label: "Capacitación", href: "/safety/training" },
      { label: "OSHA", href: "/safety/osha" },
    ],
  },
  {
    label: "Configuración",
    icon: Settings,
    items: [
      { label: "Sistema", href: "/settings/system" },
      { label: "Usuarios", href: "/settings/users" },
      { label: "Auditoría", href: "/settings/audit" },
    ],
  },
];

interface HRSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const HRSidebar = ({ collapsed, onToggle }: HRSidebarProps) => {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const location = useLocation();

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <aside
      className={`flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
              <span className="text-sm font-bold text-sidebar-primary-foreground">P</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-sidebar-accent-foreground">PERSAL</p>
              <p className="text-[10px] text-sidebar-foreground/60 tracking-wider">HR MODULE</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <span className="text-sm font-bold text-sidebar-primary-foreground">P</span>
          </div>
        )}
      </div>

      {/* Toggle */}
      <button
        onClick={onToggle}
        className="mx-auto my-2 flex h-8 w-8 items-center justify-center rounded-md text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
      >
        {collapsed ? <PanelLeft size={16} /> : <PanelLeftClose size={16} />}
      </button>

      {/* Dashboard link */}
      <div className="px-2 mb-1">
        <a
          href="/"
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
            location.pathname === "/"
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <LayoutDashboard size={18} />
          {!collapsed && <span className="font-medium">Dashboard</span>}
        </a>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto px-2 py-1 space-y-0.5">
        {navGroups.map((group) => {
          const isOpen = openGroups.has(group.label);
          const Icon = group.icon;

          return (
            <div key={group.label}>
              <button
                onClick={() => !collapsed && toggleGroup(group.label)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                title={collapsed ? group.label : undefined}
              >
                <Icon size={18} className="shrink-0" />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{group.label}</span>
                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </>
                )}
              </button>

              {!collapsed && isOpen && (
                <div className="ml-5 border-l border-sidebar-border pl-3 py-1 space-y-0.5">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`block rounded-md px-3 py-1.5 text-xs transition-colors ${
                        location.pathname === item.href
                          ? "bg-sidebar-primary/10 text-sidebar-primary font-medium"
                          : "text-sidebar-foreground/70 hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User */}
      {!collapsed && (
        <div className="border-t border-sidebar-border p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-primary/20 text-sidebar-primary text-xs font-semibold">
              MR
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-sidebar-accent-foreground truncate">M. Romero</p>
              <p className="text-[11px] text-sidebar-foreground/50">Administrador</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default HRSidebar;
