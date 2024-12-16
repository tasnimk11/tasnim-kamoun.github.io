import { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { generateZigZagPath } from "../utils/generateSVGZigazagPath";

const AnimatedZigzagPath = () => {
  const [scrollProgress, setScrollProgress] = useState(0); // Tracks scroll position
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight; // scrollable height and viewport height

      const progress = (window.scrollY / scrollableHeight) * 2; // scroll progress (0 to 1)

      setScrollProgress(progress);

      // Update the animation controls based on scroll position
      controls.start({
        pathLength: progress, // Line fills as you scroll down
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  //   const svgPath = `
  //        M 80 0
  //        V 200
  //        Q 80 210 90 210
  //        H 420
  //        Q 430 210 430 220

  //        V 420
  //        Q 430 430 420 430
  //        H 80
  //        Q 70 430 70 440

  //        V 640
  //        Q 70 650 80 650
  //        H 420
  //        Q 430 650 430 660

  //        V 880
  //        `;

  const generatedPath = generateZigZagPath(80, 0, 200, 340, 10, 3);

  console.log("generated path : ", generatedPath);

  return (
    <svg width="100%" height="100%" viewBox="0 0 500 1000">
      <defs>
        <linearGradient
          id="gradient-stroke"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#6f403a" />
          <stop offset="100%" stopColor="#ba6c62" />
        </linearGradient>
      </defs>
      <motion.path
        d={generatedPath}
        stroke="url(#gradient-stroke)"
        fill="none"
        strokeWidth="2px"
        animate={{ pathLength: scrollProgress }}
      />
    </svg>
  );
};

export default AnimatedZigzagPath;
