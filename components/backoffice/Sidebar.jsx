import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-slate-800 space-y-6 text-white w-52">
      <Link href="#">Logo</Link>
      <div className=" space-y-3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/customers">Customers</Link>
        <Link href="/markets">Markets</Link>
        <Link href="/staff">Staff</Link>
      </div>
    </div>
  );
};

export default Sidebar;
