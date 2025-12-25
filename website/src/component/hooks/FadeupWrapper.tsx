"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Define custom fade up animation
const customFadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0); 
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const FadeUpWrapper = ({ children, duration = 2000, delay = 0, ...props }) => {
  return (
    <Fade
      keyframes={customFadeUp}
      duration={duration}
      delay={delay}
      triggerOnce
      {...props}
    >
      {children}
    </Fade>
  );
};

export default FadeUpWrapper;