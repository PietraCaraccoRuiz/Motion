import { motion } from "framer-motion";

export default function Preloader({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#0A0A0A] flex items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        delay: 1.6,
        duration: 1.2,
        ease: [0.77, 0, 0.175, 1],
      }}
      onAnimationComplete={onFinish}
    >
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-white text-5xl tracking-[0.35em] font-light"
      >
        PIETRA RUIZ
      </motion.h1>
    </motion.div>
  );
}
