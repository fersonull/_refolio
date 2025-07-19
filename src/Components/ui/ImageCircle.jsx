import { motion } from "framer-motion";

const ImageCircle = ({ src, size }) => {
  return (
    <motion.div
      style={{ width: size, height: size }}
      className="overflow-hidden rounded-full mx-auto border border-white/20"
    >
      <img src={src} className="h-full w-full object-cover" />
    </motion.div>
  );
};

export default ImageCircle;
