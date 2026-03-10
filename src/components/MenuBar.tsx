import { useState, useRef, useEffect } from "react";

export interface SubMenuItem {
  label?: string;
  href?: string;
  separator?: boolean;
}

export interface MenuItemDef {
  label: string;
  items?: SubMenuItem[];
  badge?: string;
  badgeType?: "alert" | "info";
  href?: string;
}

interface MenuBarProps {
  menus: MenuItemDef[];
  title: string;
  subtitle?: string;
}

const MenuBar = ({ menus, title, subtitle }: MenuBarProps) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuBarRef.current && !menuBarRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {/* Title bar */}
      <div className="h-8 bg-secondary flex items-center px-3 text-xs text-secondary-foreground">
        <span>{title}</span>
        {subtitle && <span className="ml-2 opacity-70">{subtitle}</span>}
      </div>

      {/* Menu bar */}
      <div className="menu-bar flex items-center" ref={menuBarRef}>
        {menus.map((menu, idx) => (
          <div key={idx} className="relative">
            <div
              className="menu-item flex items-center gap-1.5"
              data-active={activeMenu === idx ? "true" : undefined}
              onClick={() => setActiveMenu(activeMenu === idx ? null : idx)}
              onMouseEnter={() => {
                if (activeMenu !== null) setActiveMenu(idx);
              }}
            >
              {menu.badge && (
                <span className={menu.badgeType === "alert" ? "badge-alert" : "inline-flex items-center rounded-full bg-info px-1.5 py-0.5 text-xs text-primary-foreground"}>
                  {menu.badge}
                </span>
              )}
              {menu.label}
            </div>

            {/* Dropdown */}
            {activeMenu === idx && menu.items && menu.items.length > 0 && (
              <div className="absolute left-0 top-full z-50 min-w-[220px] border border-border bg-card shadow-lg">
                {menu.items.map((item, iIdx) =>
                  item.separator ? (
                    <div key={iIdx} className="my-1 border-t border-border" />
                  ) : (
                    <div
                      key={iIdx}
                      className="cursor-pointer px-4 py-2 text-sm text-card-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item.label}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
