"use client";

import { cn } from "@/utils/tailwind";
import { useState, useEffect } from "react";

const navItems = [
    "about",
    "work",
    "skills",
    "contact"
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-500 ease-in-out",
            isScrolled ? "h-20" : "h-35"
        )}>
            <div className={cn(
                "mx-auto flex items-center justify-between transition-all duration-700 ease-out",
                isScrolled 
                    ? "h-20 w-full max-w-full px-6 sm:px-8 lg:px-12" 
                    : "h-35 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
            )}>
                <a className="flex items-center" href={"#hero"}>
                    <h1 className={cn(
                        "text-lg text-white flex flex-col leading-tight font-semibold transition-all duration-700 ease-out",
                        isScrolled ? "text-base" : "text-xl"
                    )}>
                        <span>{"Kateryna"}</span>
                        <span>{"Khremuchkova"}</span>
                    </h1>
                </a>

                <nav className={"hidden md:flex items-center space-x-8"}>
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={"#" + item}
                            className={"text-gray-300 hover:text-white transition-colors duration-200 capitalize"}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="w-32 hidden md:block" />
            </div>
        </header>
    );
};