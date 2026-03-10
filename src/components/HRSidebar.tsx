import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  MoreHorizontal,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  PanelLeftClose,
  PanelLeft,
  LucideIcon,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { usePermissions } from "@/hooks/usePermissions";
import { menuConfig } from "@/data/menuConfig";
import { NavLink } from "@/components/NavLink";

const iconMap: Record<string, LucideIcon> = {
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
  MoreHorizontal,
  AlertCircle,
};

interface HRSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const HRSidebar = ({ collapsed, onToggle }: HRSidebarProps) => {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const location = useLocation();
  const navigate = useNavigate();
  const { user, pendingRevalidations, rewardsCount } = useApp();
  const { isMenuItemEnabled, isRevalidationsVisible } = usePermissions();

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const getBadgeCount = (badge?: string) => {
    if (badge === "revalidations") return pendingRevalidations;
    if (badge === "rewards") return rewardsCount;
    return 0;
  };

  const getBadgeColor = (badge?: string) => {
    if (badge === "revalidations") return "bg-destructive text-destructive-foreground";
    if (badge === "rewards") return "bg-orange-500 text-white";
    return "";
  };

  return (
    <aside
      className={`flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300 shrink-0 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!collapsed ? (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary shrink-0">
              <span className="text-sm font-bold text-sidebar-primary-foreground">P</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-sidebar-accent-foreground">PERSAL</p>
              <p className="text-[10px] text-sidebar-foreground/60 tracking-wider">HR MODULE</p>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <span className="text-sm font-bold text-sidebar-primary-foreground">P</span>
          </div>
        )}
      </div>

      {/* Toggle */}
      <button
        onClick={onToggle}
        className="mx-auto my-2 flex h-8 w-8 items-center justify-center rounded-md text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        title={collapsed ? "Expandir menú" : "Colapsar menú"}
      >
        {collapsed ? <PanelLeft size={16} /> : <PanelLeftClose size={16} />}
      </button>

      {/* Dashboard link */}
      <div className="px-2 mb-1">
        <button
          onClick={() => navigate("/")}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
            location.pathname === "/"
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
          title={collapsed ? "Dashboard" : undefined}
        >
          <LayoutDashboard size={18} className="shrink-0" />
          {!collapsed && <span className="font-medium">Dashboard</span>}
        </button>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto px-2 py-1 space-y-0.5">
        {menuConfig.map((group) => {
          // Hide revalidations if not visible
          if (group.key === "revalidations" && !isRevalidationsVisible()) return null;

          const enabled = isMenuItemEnabled(group.key);
          const Icon = iconMap[group.icon] ?? MoreHorizontal;
          const isOpen = openGroups.has(group.key);
          const badgeCount = getBadgeCount(group.badge);
          const badgeColor = getBadgeColor(group.badge);

          // Groups with a single item that is a direct link
          const isSingleDirectLink =
            group.items.length === 1 && group.items[0].href !== undefined;

          if (isSingleDirectLink) {
            const item = group.items[0];
            return (
              <div key={group.key}>
                <button
                  onClick={() => enabled && navigate(item.href)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    location.pathname === item.href
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : enabled
                      ? "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/30 cursor-not-allowed"
                  }`}
                  disabled={!enabled}
                  title={collapsed ? group.label : undefined}
                >
                  <Icon size={18} className="shrink-0" />
                  {!collapsed && (
                    <span className="flex-1 text-left">{group.label}</span>
                  )}
                  {!collapsed && badgeCount > 0 && (
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${badgeColor}`}
                    >
                      {badgeCount}
                    </span>
                  )}
                  {collapsed && badgeCount > 0 && (
                    <span
                      className={`absolute right-2 top-1 h-2 w-2 rounded-full ${badgeColor}`}
                    />
                  )}
                </button>
              </div>
            );
          }

          return (
            <div key={group.key}>
              <button
                onClick={() => !collapsed && enabled && toggleGroup(group.key)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  enabled
                    ? "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/30 cursor-not-allowed"
                }`}
                disabled={!enabled}
                title={collapsed ? group.label : undefined}
              >
                <Icon size={18} className="shrink-0" />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{group.label}</span>
                    {badgeCount > 0 && (
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none mr-1 ${badgeColor}`}
                      >
                        {badgeCount}
                      </span>
                    )}
                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </>
                )}
              </button>

              {!collapsed && isOpen && enabled && (
                <div className="ml-5 border-l border-sidebar-border pl-3 py-1 space-y-0.5">
                  {group.items.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className="block rounded-md px-3 py-1.5 text-xs text-sidebar-foreground/70 hover:text-sidebar-accent-foreground hover:bg-sidebar-accent transition-colors"
                      activeClassName="bg-sidebar-primary/10 text-sidebar-primary font-medium"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User panel */}
      {!collapsed && (
        <div className="border-t border-sidebar-border p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-primary/20 text-sidebar-primary text-xs font-semibold shrink-0">
              {user.initials}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-sidebar-accent-foreground truncate">{user.name}</p>
              <p className="text-[11px] text-sidebar-foreground/50">{user.empresaTress}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default HRSidebar;
