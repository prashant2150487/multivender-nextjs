import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div className="flex-grow">
          <Navbar />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
