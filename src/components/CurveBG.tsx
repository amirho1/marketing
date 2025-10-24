"use client";

import { useEffect, useRef, useState } from "react";

export default function CurveBG() {
  const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(0);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen absolute -z-1" style={{ top: `${width / 7}px` }}>
      <svg
        ref={ref}
        className="w-full"
        height={width / 3}
        viewBox="0 0 1440 415"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-103 196.433C21.3306 435.199 342.047 483.941 531.7 292.894L671.821 151.744C860.579 -38.402 1165.67 -45.9654 1363.62 134.594L1453 216.121"
          stroke="oklch(0.8377 0.171198 88.6684)"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
}
