import React from "react";
import { Sun } from "lucide-react";
import { Bell } from "lucide-react";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
