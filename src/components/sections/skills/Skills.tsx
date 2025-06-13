import { FC } from "react";
import { Github } from "lucide-react";

import { ExternalLink } from "@/components/ExternalLink";
import { AnchorHeading } from "@/components/AnchorHeading";
import SpotlightCard from "@/components/animations/SpotlightCard/SpotlightCard";

export const Skills: FC = () => {
    return (
        <section className={"grid grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full gap-10 py-26"}>
            <AnchorHeading id="skills" className={"col-span-3"} />
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2 font-mono"}>
                <SpotlightCard className={"col-span-2 bg-white"}>
                    <h3 className={"text-lg font-semibold text-gray-900 mb-4"}>
                        Front-end
                    </h3>
                    <p className={"text-gray-600 text-base leading-relaxed"}>
                        TypeScript / React / Vue / Vuex / Redux Toolkit / NextJs /
                        Nuxt / Jest / GraphQL / React Native / Puppeteer / Enzyme
                    </p>
                </SpotlightCard>

                <SpotlightCard spotlightColor="rgba(53, 60, 90, 0.6)">
                    <h3 className={"text-lg font-semibold text-white mb-4"}>
                        Styles
                    </h3>
                    <p className={"text-gray-300 text-base leading-relaxed"}>
                        SCSS / SASS / PostCSS / Ant.d / MUI / Material UI
                    </p>
                </SpotlightCard>

                <div className={"flex justify-center"}>
                    <ExternalLink href="https://github.com/katemv" icon={Github}/>
                </div>

                <SpotlightCard className={"col-span-2"} spotlightColor="rgba(53, 60, 90, 0.6)">
                    <h3 className={"text-lg font-semibold text-white mb-4"}>
                        Back-end
                    </h3>
                    <p className={"text-gray-300 text-base leading-relaxed"}>
                        Golang / Gin / GORM / PostgreSQL / MySQL / MongoDB / gRPC /
                        Redis / Kafka / Node / Nest / TypeORM / Microservices
                    </p>
                </SpotlightCard>

                <div className={"flex justify-center items-center"}>
                    <p className="text-gray-400 text-base leading-relaxed pr-10">
                        {"Some of my "}
                        <span className={"italic text-gray-200 font-semibold"}>{"favorite technologies and tools"}</span>
                        {" that I worked with. "}
                    </p>
                </div>

                <SpotlightCard spotlightColor="rgba(53, 60, 90, 0.6)">
                    <h3 className={"text-lg font-semibold text-white mb-4"}>
                        DevOps
                    </h3>
                    <p className={"text-gray-300 text-base leading-relaxed"}>
                        Nginx / Brotli / Docker /<br/>
                        (CI/CD) / k8s / Bash
                    </p>
                </SpotlightCard>
            </div>
        </section>
    );
};