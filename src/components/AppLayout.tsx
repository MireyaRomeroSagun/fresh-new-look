import { useState } from "react";
import { Outlet } from "react-router-dom";
import HRSidebar from "@/components/HRSidebar";

const AppLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <HRSidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((prev) => !prev)}
      />
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
