import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const Contact = ({ setActive }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActive("contact");
  }, [inView]);
  return (
    <div
      id="contact"
      ref={ref}
      className="h-full flex items-center justify-center"
    >
      <div className="relative w-full lg:h-[600px] h-[400px]">
        <img
          src="/paper.png"
          alt=""
          className="absolute inset-0 w-full h-full "
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black "></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
          <div className="text-2xl lg:text-6xl font-outfit text-center uppercase">
            <div className="font-thin">
              From concept to
              <span className="font-bold"> Creation</span>
            </div>
            <div className="font-thin">
              Let's make it
              <span className="font-bold"> happen!</span>
            </div>
          </div>

          <button className="text-xs lg:text-lg lg:ps-4 lg:pe-2 pe-1 ps-2 py-2 rounded-full border border-white/40 bg-white/10 font-outfit lg:mt-8 mt-6 relative overflow-hidden flex items-center justify-center gap-3 font-medium hover:scale-105 hover:bg-white/60 transition-all">
            Get in Touch
            <div className="lg:p-3 p-2 bg-white/40 end-0 rounded-full">
              <FaArrowRightLong size={11} />
            </div>
          </button>

          <div className="flex flex-col items-center text-center mt-8 gap-3 font-outfit">
            <p className="font-bold lg:text-2xl max-w-[70%] md:max-w-full text-center ">
              I'm available for full-time roles & freelance projects.
            </p>
            <p className="text-sm lg:text-lg max-w-[70%] text-center text-white/70">
              I thrive on crafting dynamic web applications, and delivering
              seamless user experiences.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
