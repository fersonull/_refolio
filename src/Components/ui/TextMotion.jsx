import React from "react";
import { motion } from "framer-motion";

const TextMotion = ({ children, className, yInit = 20, delay = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(5px)",
        duration: 0.1,
        y: yInit,
      }}
      whileInView={{ opacity: 1, filter: "blur(0)", y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TextMotion;
