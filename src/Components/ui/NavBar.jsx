import React from "react";
import { navItems } from "../../../constants";

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 flex items-center justify-center w-full lg:px-32 py-5 backdrop-blur-[2px] bg-gradient-to-b  from-white/5 to-transparent z-50">
        <div className="flex items-center justify-between w-full">
          <a href="#" className="w-12">
            <img src="/logo.png" alt="" />
          </a>

          <div className="backdrop-blur-3xl bg-white/10 border border-white/20 rounded-full p-2 flex items-center shadow-md space-x-4">
            {navItems.map(({ label }, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full font-medium transition  ${
                  label === "Home" ? "bg-white/20 " : "dark:text-white/70"
                }`}
              >
                <p className="text-xs hover:text-white/80">{label}</p>
              </button>
            ))}
            <button className="px-4 py-2 rounded-full bg-white/20 text-xs font-medium text-zinc-100/70 hover:bg-white/30 transition border border-white/20">
              Book a Call
            </button>
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
