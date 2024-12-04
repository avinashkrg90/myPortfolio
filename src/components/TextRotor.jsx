import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TextRotor = () => {
  const texts = [
    "Frontend Developer",
    "Backend Developer",
    "FullStack Developer",
    "MERN Stack Developer",
  ];
  const [currentText, setCurrentText] = useState(0); // Index of the current text
  const containerRef = useRef(null); // Reference to the container

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next text


      // GSAP animation
      const tl = gsap.timeline();
      tl.to(containerRef.current, {
        y: "0%", // Slide the next text into view
        duration: 1,
        ease: "power2.inOut",
      })
        .to(containerRef.current, {
          y: "-100%", // Slide the current text up
          duration: 0.8,
          ease: "power2.inOut",
          delay: 1,
        })
        .set(containerRef.current, { y: "100%" }) // Reset to start below the view


      const nextText = (currentText + 1) % texts.length;
      setCurrentText(nextText);
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentText, texts.length]);

  return (
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        margin: "50px 0",
        height: "2.2rem",
        overflow: "hidden",
        position: "relative",
        color: "black",
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          width: "100%",
          textAlign: "center",
          transform: "translateY(100%)",
        }}
      >
        {texts[currentText]}
      </div>
    </div>
  );
};

export default TextRotor;
