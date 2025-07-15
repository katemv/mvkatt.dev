"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/utils/tailwind";

interface FadeInOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
}

export const FadeInOnScroll = ({
    children,
    className,
    delay = 0,
    duration = 600,
    threshold = 0.3,
    rootMargin = "-50px",
}: FadeInOnScrollProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin,
            threshold,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin]);

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24",
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}; 