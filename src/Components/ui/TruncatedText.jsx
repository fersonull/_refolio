import React from "react";

const TruncatedText = ({ children, maxLength }) => {
  const isTooLong = children.length > maxLength;
  const displayedText = isTooLong
    ? children.slice(0, maxLength) + "…"
    : children;

  return <p className="text-white/70 text-xs md:text-lg">{displayedText}</p>;
};

export default TruncatedText;
