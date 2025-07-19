import React from "react";
import { navItems } from "../../../constants/index";

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 flex items-center justify-center w-full lg:px-32 py-5 z-50">
        <div className="flex items-center justify-between w-full">
          <a href="#" className="w-12">
            <img src="/logo.png" alt="" />
          </a>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-2 flex items-center shadow-md space-x-4">
            {navItems.map(({ label, id }, idx) => (
              <a
                href={`#${id}`}
                key={idx}
                className={`hover:text-glow px-4 py-2 rounded-full font-medium transition-all  ${
                  label === "Home" ? "bg-white/10" : "dark:text-white/70"
                }`}
              >
                <p className="text-xs hover:text-white/80">{label}</p>
              </a>
            ))}
            <button className="primary-btn text-xs">Book a Call</button>
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
