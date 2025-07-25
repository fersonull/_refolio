import React from "react";
import { navItems } from "../../../constants/index";

const NavBar = ({ active }) => {
  return (
    <>
      <div className="backdrop-blur-[2px] md:backdrop-blur-none fixed top-0 flex items-center justify-center w-full px-6 lg:px-32 py-5 z-50">
        <div className="flex items-center justify-between w-full">
          <a href="#" className="w-12">
            <img src="/logo.png" alt="" />
          </a>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-2 md:flex items-center shadow-md space-x-4 hidden">
            {navItems.map(({ label, id }, idx) => (
              <a
                href={`#${id}`}
                key={idx}
                className={`hover:text-glow px-4 py-2 rounded-full font-medium transition-all  ${
                  active === id ? "bg-white/10 text-glow" : "dark:text-white/70"
                }`}
              >
                <p className="text-xs hover:text-white/80">{label}</p>
              </a>
            ))}
            <a href="#contact" className="primary-btn text-xs">Get in Touch</a>
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
