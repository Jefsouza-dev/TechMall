import { useEffect, useState } from "react";

const Logo = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex items-center hover:scale-110 transition-all ${
        animate ? "animate-bounce" : ""
      }`}
    >
      <div className="bg-blue-500 text-white rounded-full p-2 mr-2">TM</div>
      <div className="font-bold text-xl">TechMall</div>
    </div>
  );
};

export default Logo;
