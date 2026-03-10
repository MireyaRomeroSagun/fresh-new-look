import MenuBar, { type MenuItemDef } from "@/components/MenuBar";
import StatusBar from "@/components/StatusBar";
import { Building2, Target, TrendingUp, Users, ShieldCheck, Award } from "lucide-react";

const menus: MenuItemDef[] = [
  {
    label: "41 Pending Revalidation",
    badge: "●",
    badgeType: "alert",
    items: [],
  },
  {
    label: "Trainings",
    items: [
      { label: "Training Sessions" },
      { label: "Trainings Browser" },
      { label: "Training Internal" },
      { separator: true },
      { label: "Trainings by Users" },
      { label: "Trainings by job positions" },
      { separator: true },
      { label: "Training Reports" },
    ],
  },
  {
    label: "Employment History",
    items: [
      { label: "Employee Records" },
      { label: "Position History" },
      { label: "Salary History" },
      { label: "Department Transfers" },
    ],
  },
  {
    label: "Induction",
    items: [
      { label: "New Hire Onboarding" },
      { label: "Induction Checklist" },
      { label: "Induction Reports" },
    ],
  },
  {
    label: "Evaluations",
    items: [
      { label: "Performance Evaluations" },
      { label: "360° Evaluations" },
      { label: "Evaluation Templates" },
      { label: "Evaluation Reports" },
    ],
  },
  {
    label: "Efficiencies",
    items: [
      { label: "Efficiency Tracking" },
      { label: "Productivity Reports" },
      { label: "Attendance Summary" },
    ],
  },
  {
    label: "Support Modules",
    items: [
      { label: "Document Management" },
      { label: "Request Forms" },
      { label: "Help Desk" },
    ],
  },
  {
    label: "Catalogs",
    items: [
      { label: "Departments" },
      { label: "Positions" },
      { label: "Locations" },
      { label: "Cost Centers" },
    ],
  },
  {
    label: "Loans",
    items: [
      { label: "Active Loans" },
      { label: "Loan Requests" },
      { label: "Loan Reports" },
    ],
  },
  {
    label: "Competencies",
    items: [
      { label: "Competency Matrix" },
      { label: "Skills Assessment" },
      { label: "Gap Analysis" },
    ],
  },
  {
    label: "Persal Rewards",
    badge: "(2)",
    badgeType: "info",
    items: [
      { label: "Reward Programs" },
      { label: "Points Summary" },
      { label: "Redeem Rewards" },
    ],
  },
  {
    label: "Safety",
    items: [
      { label: "Incident Reports" },
      { label: "Safety Training" },
      { label: "OSHA Compliance" },
      { label: "Safety Audits" },
    ],
  },
  {
    label: "Others",
    items: [
      { label: "System Settings" },
      { label: "User Management" },
      { label: "Audit Log" },
    ],
  },
  {
    label: "Windows",
    items: [
      { label: "Cascade" },
      { label: "Tile Horizontally" },
      { label: "Tile Vertically" },
      { separator: true },
      { label: "Close All" },
    ],
  },
];

const Index = () => {
  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Menu */}
      <MenuBar
        menus={menus}
        title="Automated Production System (APS): HR (User: mromero / DB: PERSAL) TRESS: GRUPO INDUSTRIAL PERSAL"
      />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left side - Logo area */}
        <div className="flex w-1/2 flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center gap-4">
            {/* Stylized logo using CSS */}
            <div className="flex items-end gap-1">
              <div className="h-32 w-14 bg-primary rounded-t-sm" />
              <div className="h-24 w-10 bg-secondary rounded-t-sm" />
              <div className="h-32 w-10 bg-muted-foreground/40 rounded-t-sm" />
              <div className="h-24 w-14 bg-primary rounded-t-sm" />
            </div>
            <div className="mt-2 text-center">
              <h1 className="text-4xl font-bold tracking-wider text-foreground">
                <span className="text-primary">P</span>ERSAL
              </h1>
              <p className="mt-1 text-sm tracking-[0.35em] text-muted-foreground font-medium">
                MANUFACTURING SOLUTIONS
              </p>
            </div>
          </div>
        </div>

        {/* Right side - HR Info */}
        <div className="flex w-1/2 flex-col gap-6 overflow-y-auto p-8">
          <h2 className="text-center font-bold italic text-3xl text-foreground tracking-wide">
            HUMAN RESOURCES
          </h2>

          {/* Política de Calidad */}
          <div className="border border-border bg-card shadow-sm">
            <div className="section-header">Política de Calidad</div>
            <div className="p-5 text-card-foreground leading-relaxed text-[15px]" style={{ textAlign: "justify" }}>
              En Persal, nuestro compromiso es la total satisfacción de nuestros clientes externos e
              internos a través de la mejora continua de nuestros procesos y colaboración de nuestro
              personal.
            </div>
          </div>

          {/* Objetivos de Calidad */}
          <div className="border border-border bg-card shadow-sm">
            <div className="section-header">Objetivos de Calidad</div>
            <div className="p-5 space-y-2 text-card-foreground text-[15px]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Users size={16} className="text-muted-foreground" />
                  Porcentaje de aceptación de Clientes:
                </span>
                <span className="kpi-value text-lg">98.6%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-muted-foreground" />
                  Cumplimiento Entregas a Tiempo:
                </span>
                <span className="kpi-value text-lg">98.6%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-muted-foreground" />
                  Índice de Accidente Anual OSHA:
                </span>
                <span className="kpi-value text-lg">7</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-1 rounded border border-border bg-card p-4 shadow-sm">
              <Users size={20} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">191</span>
              <span className="text-xs text-muted-foreground">Empleados Activos</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded border border-border bg-card p-4 shadow-sm">
              <Award size={20} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">12</span>
              <span className="text-xs text-muted-foreground">Capacitaciones</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded border border-border bg-card p-4 shadow-sm">
              <Target size={20} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">96%</span>
              <span className="text-xs text-muted-foreground">Eficiencia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <StatusBar message="Updating Users  Total items transferred: 191" version="Vers. 1.0.0.657" />
    </div>
  );
};

export default Index;
