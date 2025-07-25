import React from "react";
import { navItems, socials } from "../../constants";

const Footer = () => {
  return (
    <div className="flex items-center justify-center lg:pb-20 pb-10 lg:px-28 px-4 font-outfit">
      <div className="flex flex-col md:flex-row lg:items-center lg:justify-between w-full gap-10">
        <div className="flex flex-1 flex-col items-start justify-center gap-4">
          <div className="w-14">
            <img src="/logo.png" className="w-full h-full" alt="logo" />
          </div>
          <p className="text-sm max-w-[13rem] lg:max-w-xs">
            I'm Jasfer - a full-stack developer, freelancer & problem solver.
            Thanks for checking out my site!
          </p>
          <p className="text-sm">© 2025 Jasfer Monton</p>
        </div>

        <div className="flex-1 flex items-center text-sm">
          <div className="grid grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-col gap-1">
              <p className="text-lg font-bold">General</p>
              {navItems.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className="text-white/70">
                  {label}
                </a>
              ))}
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <p className="text-lg font-bold">Socials</p>
              {socials.map(({ url, label }) => (
                <a
                  key={label}
                  href={`${url}`}
                  target="_blank"
                  className="text-white/70"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
