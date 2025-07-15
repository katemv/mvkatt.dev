"use client";

import { FC } from "react";
import { cn } from "@/utils/tailwind";

interface PlusMorphProps {
  isActive?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export const PlusMorph: FC<PlusMorphProps> = ({ 
    isActive = false, 
    size = "md",
    color = "bg-white",
    className 
}) => {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12", 
        lg: "w-16 h-16"
    };

    const lineSizes = {
        sm: { horizontal: "w-4 h-0.5", vertical: "w-0.5 h-4" },
        md: { horizontal: "w-6 h-1", vertical: "w-1 h-6" },
        lg: { horizontal: "w-8 h-1", vertical: "w-1 h-8" }
    };

    return (
        <div 
            className={cn(
                "relative flex items-center justify-center transition-transform duration-700 ease-in-out",
                sizeClasses[size],
                isActive && "rotate-[405deg]",
                className
            )}
        >
            {/* Horizontal line */}
            <div 
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    lineSizes[size].horizontal,
                    color
                )}
            />
      
            {/* Vertical line */}
            <div 
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    lineSizes[size].vertical,
                    color
                )}
            />
        </div>
    );
};

export default PlusMorph; 