import React, { useState, useEffect } from "react";
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
      <div className="relative w-full h-[600px]">
        <img
          src="/paper.png"
          alt=""
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="title font-outfit uppercase">
            From concept to creation
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
