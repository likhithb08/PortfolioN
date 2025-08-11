import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LogoIntro = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-white z-[999]"
    >
      <motion.div
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={{
          scale: 0.5,
          x: "-47.5vw",
          y: "-43.5vh",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: 0.3,
          duration: 1.5,
        }}
        className="w-24 h-24 md:w-32 md:h-32"
      >
        <img
          src="https://media.istockphoto.com/id/1465419181/vector/swan-logo-images-illustration.jpg?s=612x612&w=0&k=20&c=WfsuF8ZHxxbA5YSHkB0kQGO-6NLfhVLioe8D08h0HVc="
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default LogoIntro;