"use client";

import { cn } from "@/utils/tailwind";
import { Github, Linkedin, Send } from "lucide-react";
import { SocialLink } from "@/components/sections/hero/SocialLink";
import DecryptedText from "@/components/animations/DecryptedText/DecryptedText";
import { SOCIAL_LINKS } from "@/lib/constants";

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen pt-16 flex items-center justify-center">
            {/* Mobile */}
            <h1 className={cn(
                "sm:hidden text-5xl xs:text-6xl font-mono col-span-2 text-white leading-none",
                "font-semibold px-4")}
            >
                <DecryptedText
                    text={"Full-stack"}
                    animateOn="view"
                    revealDirection="start"
                    speed={80}
                    maxIterations={20}
                    sequential={true}
                />
                <DecryptedText
                    text={"Developer"}
                    animateOn="view"
                    revealDirection="start"
                    speed={80}
                    maxIterations={20}
                    sequential={true}
                />
                <p className="text-gray-400 text-lg leading-relaxed mt-6 font-light max-w-96">
                    {"Create digital products using "}
                    <span className={"italic text-gray-200 font-medium"}>{"React, TypeScript"}</span>
                    {" and "}
                    <span className={"italic text-gray-200 font-medium"}>{"Node.js."}</span>
                </p>
            </h1>
            {/* Desktop */}
            <div className={"hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-36"}>
                <div className={"grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-2 items-center"}>
                    <h1 className={cn(
                        "text-6xl md:text-8xl lg:text-9xl font-mono col-span-2 text-white leading-none",
                        "font-semibold")}
                    >
                        <DecryptedText
                            text={"Full-stack"}
                            animateOn="view"
                            revealDirection="start"
                            speed={80}
                            maxIterations={20}
                            sequential={true}
                        />
                    </h1>

                    <a
                        href="#about"
                        className={cn(
                            "flex items-center justify-end gap-2 cursor-pointer group hover:gap-4",
                            "transition-all duration-300"
                        )}
                    >
                        <div
                            className={"bg-gradient-purple-blue text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"}>
                            <span className={"font-medium"}>
                                {"Discover my story"}
                            </span>
                        </div>
                        <div className={cn(
                            "bg-gradient-purple-blue text-white w-12 h-12 rounded-full flex items-center justify-center",
                            "hover:opacity-90 transition-opacity"
                        )}>
                            <span
                                className={"text-xl transition-transform duration-300 rotate-45 group-hover:rotate-135"}>
                                {"↗"}
                            </span>
                        </div>
                    </a>

                    <p className="text-gray-400 text-lg leading-relaxed mr-3">
                        {"Create digital products using "}
                        <span className={"italic text-gray-200 font-semibold"}>{"React, TypeScript"}</span>
                        {" and "}
                        <span className={"italic text-gray-200 font-semibold"}>{"Node.js."}</span>
                    </p>

                    <h2 className={cn(
                        "text-6xl md:text-8xl lg:text-9xl font-mono font-semibold text-white leading-none",
                        "col-span-2 text-end"
                    )}>
                        <DecryptedText
                            text={"Developer"}
                            animateOn="view"
                            revealDirection="start"
                            speed={80}
                            maxIterations={20}
                            sequential={true}
                        />
                    </h2>
                    <div className={"flex flex-wrap gap-4 col-span-3 items-center justify-center mt-16"}>
                        <SocialLink href={SOCIAL_LINKS.GITHUB} icon={Github} label="Github"/>
                        <SocialLink href={SOCIAL_LINKS.LINKEDIN} icon={Linkedin} label="LinkedIn"/>
                        <SocialLink href={SOCIAL_LINKS.TELEGRAM} icon={Send} label="Telegram"/>
                    </div>
                </div>
            </div>
        </section>
    );
};