"use client";

import { ParallaxProvider } from "react-scroll-parallax";

interface ParallaxWrapperProps {
  children: React.ReactNode
}

export const ParallaxWrapper = ({ children }: ParallaxWrapperProps) => {
    return (
        <ParallaxProvider>
            {children}
        </ParallaxProvider>
    );
}; 