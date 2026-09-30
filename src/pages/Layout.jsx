import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="router-page">
      <Sidebar />

      <div className="content">
        <h1>Content Area</h1>

        <div className="router-box">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;