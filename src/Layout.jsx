import React, { useEffect, useRef } from "react";
import NavBar from "./Components/ui/NavBar";
import LocomotiveScroll from "locomotive-scroll";

const Layout = ({ children, active }) => {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   if (!scrollRef.current) return;

  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     lerp: 0.02,
  //     multiplier: 0.5,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <div className="overflow-x-hidden dark:bg-black font-nyghtSerif dark:text-zinc-100 flex flex-col relative">
      <NavBar active={active} />
      <div
        className="flex-1"
        ref={scrollRef}
        id="scroll-wrapper"
        data-scroll-container
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
