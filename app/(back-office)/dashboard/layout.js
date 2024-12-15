import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div>sidebar</div>
      <div>
        <div className="flex-grow">header</div>
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
