"use client"; // Mark this file as client component

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // SSR: render fallback placeholder (can be null or static image)
    return <div style={{ width: width || "95%", height: 200, backgroundColor: "#eee" }}>Loading animation...</div>;
  }

  // Client-only render of Lottie animation
  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
