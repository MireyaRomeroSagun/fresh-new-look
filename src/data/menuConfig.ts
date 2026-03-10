export interface MenuItem {
  label: string;
  href: string;
  visible?: boolean;
}

export interface NavGroup {
  key: string;
  label: string;
  icon: string;
  items: MenuItem[];
  badge?: "revalidations" | "rewards";
  requiresRight?: number;
  requiresSupervisor?: boolean;
  requiresProgrammer?: boolean;
}

export const menuConfig: NavGroup[] = [
  {
    key: "revalidations",
    label: "Revalidaciones Pendientes",
    icon: "AlertCircle",
    badge: "revalidations",
    items: [{ label: "Revalidaciones Pendientes", href: "/revalidations" }],
  },
  {
    key: "trainings",
    label: "Capacitaciones",
    icon: "GraduationCap",
    items: [
      { label: "Sesiones de Capacitación", href: "/trainings/sessions" },
      { label: "Explorador de Capacitaciones", href: "/trainings/browser" },
      { label: "Capacitación Interna", href: "/trainings/internal" },
      { label: "Capacitaciones por Usuario", href: "/trainings/by-user" },
      { label: "Capacitaciones por Puesto", href: "/trainings/by-position" },
      { label: "Reportes de Capacitación", href: "/trainings/reports" },
    ],
    requiresSupervisor: true,
  },
  {
    key: "employment-history",
    label: "Historial Laboral",
    icon: "History",
    items: [{ label: "Historial Laboral", href: "/employment-history" }],
  },
  {
    key: "induction",
    label: "Inducción",
    icon: "UserPlus",
    items: [
      { label: "Nueva Inducción", href: "/induction/new" },
      { label: "Inducción por Puesto", href: "/induction/by-job-position" },
      { label: "Actividades", href: "/induction/catalog/activities" },
      { label: "Inducciones", href: "/induction/catalog/inductions" },
      { label: "Inducciones por Puesto", href: "/induction/catalog/by-job-position" },
      { label: "Reporte", href: "/induction/report" },
    ],
    requiresSupervisor: true,
  },
  {
    key: "evaluations",
    label: "Evaluaciones",
    icon: "ClipboardCheck",
    items: [
      { label: "Explorador", href: "/evaluations/browser" },
      { label: "Indicadores", href: "/evaluations/indicators" },
      { label: "Explorador de Encuestas", href: "/evaluations/surveys/browser" },
      { label: "Resultados de Encuestas", href: "/evaluations/surveys/results" },
      { label: "Áreas por Usuario", href: "/evaluations/areas-by-user" },
      { label: "Áreas por Puesto", href: "/evaluations/areas-by-job" },
      { label: "Reporte de Cursos", href: "/evaluations/courses-report" },
    ],
    requiresSupervisor: true,
  },
  {
    key: "efficiencies",
    label: "Eficiencias",
    icon: "BarChart3",
    items: [
      { label: "Metas", href: "/efficiencies/goals" },
      { label: "Metas por Usuario", href: "/efficiencies/goals-by-user" },
      { label: "Eficiencia por Usuario", href: "/efficiencies/by-user" },
      { label: "Reportes", href: "/efficiencies/reports" },
      { label: "Reporte Anual", href: "/efficiencies/yearly-report" },
    ],
    requiresSupervisor: true,
  },
  {
    key: "support",
    label: "Módulos de Apoyo",
    icon: "Wrench",
    items: [
      { label: "Amonestación", href: "/support/admonition" },
      { label: "Lista de Uniformes (RH)", href: "/support/uniforms" },
      { label: "Uniformes por Requisición de Compra", href: "/support/uniforms-by-pr" },
      { label: "Movimientos de Salida de Uniformes", href: "/support/uniforms-movements" },
      { label: "Beneficios de Vacaciones", href: "/support/vacations/benefits" },
      { label: "Reporte de Vacaciones", href: "/support/vacations/report" },
      { label: "Tarjeta de Empleado RFID", href: "/support/rfid" },
      { label: "Sesiones de Reuniones", href: "/support/meetings" },
      { label: "Explorador de Encuestas", href: "/support/surveys/browser" },
      { label: "Campaña de Encuestas", href: "/support/surveys/campaign" },
      { label: "Resultados de Encuestas", href: "/support/surveys/results" },
      { label: "16 FP", href: "/support/16fp" },
      { label: "Explorador de Beneficios Flexibles", href: "/support/flex-benefits/browser" },
      { label: "Periodos de Beneficios Flexibles", href: "/support/flex-benefits/periods" },
      { label: "Reportes de Beneficios Flexibles", href: "/support/flex-benefits/reports" },
    ],
    requiresSupervisor: true,
  },
  {
    key: "catalogs",
    label: "Catálogos",
    icon: "BookOpen",
    items: [
      { label: "Usuarios", href: "/catalogs/users" },
      { label: "Puestos de Trabajo", href: "/catalogs/job-positions" },
      { label: "Áreas", href: "/catalogs/areas" },
      { label: "Grupos", href: "/catalogs/groups" },
      { label: "Uniformes por Puesto", href: "/catalogs/uniforms-by-position" },
      { label: "Unidad Estratégica de Negocio", href: "/catalogs/sbu" },
      { label: "Explorador de Gerentes", href: "/catalogs/managers" },
    ],
  },
  {
    key: "loans",
    label: "Préstamos",
    icon: "Landmark",
    items: [
      { label: "Explorador", href: "/loans/browser" },
      { label: "Historial de Movimientos", href: "/loans/movement-history" },
    ],
  },
  {
    key: "competencies",
    label: "Competencias",
    icon: "Brain",
    items: [
      { label: "Competencias por Puesto/Usuarios", href: "/competencies/by-job-position" },
      { label: "Nueva Competencia", href: "/competencies/new" },
      { label: "Nueva Matriz", href: "/competencies/new-matrix" },
      { label: "Catálogo de Competencias", href: "/competencies/catalog" },
      { label: "Competencias por Puesto (Vista)", href: "/competencies/catalog-by-job" },
      { label: "Catálogo de Matrices", href: "/competencies/catalog-matrix" },
      { label: "Comportamientos", href: "/competencies/catalog-behaviors" },
      { label: "Criterios", href: "/competencies/catalog-criterias" },
      { label: "Reporte de Competencias por Usuario", href: "/competencies/report-by-user" },
      { label: "Reporte de Competencias", href: "/competencies/report" },
      { label: "Reporte de Matrices", href: "/competencies/report-matrix" },
    ],
    requiresSupervisor: true,
  },
  {
    key: "rewards",
    label: "Persal Rewards",
    icon: "Gift",
    badge: "rewards",
    items: [{ label: "Persal Rewards", href: "/rewards" }],
    requiresRight: 501,
  },
  {
    key: "safety",
    label: "Seguridad",
    icon: "ShieldCheck",
    items: [
      { label: "Registrar Accidente", href: "/safety/register" },
      { label: "Reporte de Accidentes", href: "/safety/report" },
      { label: "Datos de Lesiones y Enfermedades", href: "/safety/injuries" },
    ],
  },
  {
    key: "others",
    label: "Otros",
    icon: "MoreHorizontal",
    items: [
      { label: "Registrar Contraseña de Correo", href: "/others/email-password" },
      { label: "Extensiones Telefónicas", href: "/others/telephone" },
      { label: "Servicios de TI", href: "/others/it-services" },
    ],
  },
];
