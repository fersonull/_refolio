import React from "react";

const Badge = ({ icon, label }) => {
  return (
    <div className="rounded-lg font-outfit bg-white/20 backdrop-blur-sm text-xs md:text-sm px-3 py-1 border-2 border-white/20 flex items-center justify-center md:gap-2 gap-1 hover:text-glow">
      {icon} <span>{label}</span>
    </div>
  );
};

export default Badge;
