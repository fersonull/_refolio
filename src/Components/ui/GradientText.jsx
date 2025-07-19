import React from "react";

const GradientText = ({ children }) => {
  return (
    <span className="italic bg-gradient-to-b nyght-serif-italic from-zinc-700 via-zinc-200 to-zinc-50 text-transparent bg-clip-text">
      {children}
    </span>
  );
};

export default GradientText;
