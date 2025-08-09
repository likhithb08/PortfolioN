import React, { useEffect, useState } from "react";

const LogoIntro = ({ onFinish }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after first render
    setTimeout(() => {
      setAnimate(true);
    }, 300);

    // End animation after it slides into nav
    setTimeout(() => {
      onFinish();
    }, 2000);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src="https://media.istockphoto.com/id/1465419181/vector/swan-logo-images-illustration.jpg?s=612x612&w=0&k=20&c=WfsuF8ZHxxbA5YSHkB0kQGO-6NLfhVLioe8D08h0HVc="
        alt="Logo"
        className={`w-31 h-31 transition-all duration-2000 ease-in-out
          ${animate ? "translate-x-[-47.5vw] translate-y-[-43.5vh] scale-50" : ""}
        `}
      />
    </div>
  );
};

export default LogoIntro;
