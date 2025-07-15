"use client";

import { FC } from "react";
import { Github } from "lucide-react";
import { Parallax } from "react-scroll-parallax";

import { ExternalLink } from "@/components/common/ExternalLink";
import { AnchorHeading } from "@/components/common/AnchorHeading";
import SpotlightCard from "@/components/animations/SpotlightCard/SpotlightCard";
import { SOCIAL_LINKS } from "@/lib/constants";
import Threads from "@/components/animations/Threads/Threads";

export const Skills: FC = () => {
    return (
        <div className={"relative"}>
            <Parallax speed={-40} className={"absolute w-full h-[600px] top-96 -z-[1]"}>
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </Parallax>
            <section className={"grid grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full gap-10 py-26"}>
                <AnchorHeading id="skills" className={"col-span-3"}/>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 col-span-3 md:col-span-2 font-mono"}>
                    <SpotlightCard className={"col-span-2 bg-white"}>
                        <h3 className={"text-lg font-semibold text-gray-900 mb-4"}>
                        Front-end
                        </h3>
                        <p className={"text-gray-600 text-base leading-relaxed font-semibold"}>
                        React / React Native / JavaScript / TypeScript <br/>
                        NextJS / Redux Toolkit / Context API <br/>
                        GraphQL / Playwright / Jest
                        </p>
                    </SpotlightCard>

                    <SpotlightCard spotlightColor="rgba(53, 60, 90, 0.6)">
                        <h3 className={"text-lg font-semibold text-white mb-4"}>
                        Styles
                        </h3>
                        <p className={"text-gray-300 text-base leading-relaxed"}>
                        SCSS / SASS / Tailwind / CSS in JS /
                        CSS modules / styled-components
                        </p>
                    </SpotlightCard>

                    <div className={"justify-center hidden md:flex"}>
                        <ExternalLink href={SOCIAL_LINKS.GITHUB} icon={Github}/>
                    </div>

                    <SpotlightCard className={"col-span-2"} spotlightColor="rgba(53, 60, 90, 0.6)">
                        <h3 className={"text-lg font-semibold text-white mb-4"}>
                        Back-end
                        </h3>
                        <p className={"text-gray-300 text-base leading-relaxed"}>
                        Node / Express / GraphQL / Supabase <br/>
                        PostgreSQL / MySQL / MongoDB
                        </p>
                    </SpotlightCard>

                    <div className={"justify-center items-center hidden md:flex"}>
                        <p className="text-gray-400 text-base leading-relaxed pr-10">
                            {"Some of my "}
                            <span
                                className={"italic text-gray-200 font-semibold"}>{"favorite technologies and tools"}</span>
                            {" that I worked with. "}
                        </p>
                    </div>

                    <SpotlightCard spotlightColor="rgba(53, 60, 90, 0.6)">
                        <h3 className={"text-lg font-semibold text-white mb-4"}>
                        DevOps
                        </h3>
                        <p className={"text-gray-300 text-base leading-relaxed"}>
                        Heroku / Vercel / GitHub Actions <br/>
                        Docker / (CI/CD)
                        </p>
                    </SpotlightCard>
                </div>
            </section>
        </div>
    );
};