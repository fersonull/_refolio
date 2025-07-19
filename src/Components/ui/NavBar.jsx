import React from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 flex items-center justify-center w-full lg:px-32 py-5 backdrop-blur-[2px] bg-gradient-to-b  from-white/5 to-transparent z-50">
        <div className="flex items-center justify-between w-full">
          <a href="" className="w-11">
            {/* <img src="/logo.png" alt="" /> */}
          </a>

          <div className=" backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 flex items-center shadow-md space-x-4">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className={`text-blur px-4 py-2 rounded-full font-medium dark:text-red transition  ${
                  item.label === "Home" ? "bg-white/20 " : "hover:bg-white/10"
                }`}
              >
                <span className="text-shadow text-xs dark:text-white/70">
                  {item.label}
                </span>
              </button>
            ))}
            <button className="text-white/50 px-4 py-2 rounded-full bg-white/20 text-sm font-medium text-white hover:bg-white/30 transition">
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
