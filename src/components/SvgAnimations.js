import React, { useEffect } from 'react';

import gsap from 'gsap';

const SvgAnimation = () => {
  
  const initialPath = `M 10 100 Q 500 100 1490 100`;
  const finalPath = `M 10 100 Q 500 100 1490 100`;

  useEffect(() => {
   
    const pathElement = document.querySelector("svg path");
    const stringElement = document.getElementById("string");

    const handleMouseMove = (event) => {
      // Generate a new path based on mouse coordinates
      const path = `M 10 100 Q 500 ${event.clientY} 1490 100`;

      // Animate the SVG path using GSAP
      gsap.to(pathElement, {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
      });
    };

    const handleMouseLeave = () => {
      // Animate back to the final path on mouse leave
      gsap.to(pathElement, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
      });
    };

    // Attach mousemove and mouseleave events
    stringElement.addEventListener("mousemove", handleMouseMove);
    stringElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      stringElement.removeEventListener("mousemove", handleMouseMove);
      stringElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [finalPath]);

  return (
    <div id="string" >
      <svg width="1500" >
        <path d={initialPath} stroke="black" fill="transparent" />
      </svg>
    </div>
  );
};

export default SvgAnimation;
