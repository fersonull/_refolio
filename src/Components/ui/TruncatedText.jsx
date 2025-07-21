import React from "react";
const MAX_LENGTH = 190;

const TruncatedText = ({ children }) => {
  const isTooLong = children.length > MAX_LENGTH;
  const displayedText = isTooLong
    ? children.slice(0, MAX_LENGTH) + "…"
    : children;

  return <p>{displayedText}</p>;
};

export default TruncatedText;
