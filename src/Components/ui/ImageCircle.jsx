import { motion } from "framer-motion";

const ImageCircle = ({ src, size }) => {
  return (
    <>
      <motion.div
        style={{ width: size, height: size }}
        className="bg-gradient-to-b from-transparent via-zinc-600 to-zinc-100 overflow-hidden rounded-full mx-auto hidden md:block"
      >
        <img src={src} className="h-full w-full object-cover" />
      </motion.div>
      <motion.div
        style={{ width: size - 30, height: size - 30 }}
        className="bg-gradient-to-b from-transparent via-zinc-600 to-zinc-100 overflow-hidden rounded-full mx-auto md:hidden block"
      >
        <img src={src} className="h-full w-full object-cover" />
      </motion.div>
    </>
  );
};

export default ImageCircle;
