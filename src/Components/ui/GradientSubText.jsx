const GradientSubText = ({ children, className }) => {
  return (
    <p
      className={`bg-gradient-to-b bg-clip-text text-transparent from-zinc-400 via-zinc-500 to-zinc-600 text-2xl ${className}`}
    >
      {children}
    </p>
  );
};

export default GradientSubText;
