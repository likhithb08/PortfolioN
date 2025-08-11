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
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-white z-[999]"
    >
      <motion.div
        initial={{ scale: 2, x: 0, y: 0 }}
        animate={{
          scale: 0.4,
          x: "-44.5vw",
          y: "-44.5vh",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: 0.3,
          duration: 1,
        }}
        className="w-20 h-20 md:w-30 md:h-30"
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