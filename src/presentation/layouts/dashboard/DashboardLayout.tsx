import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div>
      <h1 className="font-bold">Dashboard Layout</h1>
      <Outlet />
    </div>
  );
};
