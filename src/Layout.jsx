import React from "react";
import NavBar from "./Components/ui/NavBar";
import Header from "./Components/Header";

const Layout = ({ children, active }) => {
  return (
    <div className="overflow-x-hidden dark:bg-black font-nyghtSerif dark:text-zinc-100 flex flex-col relative">
      <NavBar active={active} />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
