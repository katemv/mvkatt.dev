import { FC } from "react";
import { Github } from "lucide-react";

import { ExternalLink } from "@/components/ExternalLink";
import { AnchorHeading } from "@/components/AnchorHeading";

export const Skills: FC = () => {
    return (
        <section className={"grid grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full gap-10"}>
            <AnchorHeading id="skills" className={"col-span-3"} />
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2"}>
                {/* Front-end */}
                <div className={"bg-gray-100 rounded-3xl p-6 border border-gray-200 col-span-2"}>
                    <h3 className={"text-lg font-medium text-gray-900 mb-4"}>
                        Front-end
                    </h3>
                    <p className={"text-gray-600 text-base leading-relaxed"}>
                        TypeScript / React / Vue / Vuex / Redux Toolkit / NextJs /
                        Nuxt / Jest / GraphQL / React Native / Puppeteer / Enzyme
                    </p>
                </div>

                {/* Styles */}
                <div className={"rounded-3xl p-6 border border-white/15"}>
                    <h3 className={"text-lg font-medium text-white mb-4"}>
                        Styles
                    </h3>
                    <p className={"text-gray-300 text-base leading-relaxed"}>
                        SCSS / SASS / PostCSS /<br/>
                        Ant.d / MUI / Material UI
                    </p>
                </div>

                <div className={"flex justify-center"}>
                    <ExternalLink href="https://github.com/katemv" icon={Github}/>
                </div>

                {/* Back-end */}
                <div className={"rounded-3xl p-6 border border-white/15 col-span-2"}>
                    <h3 className={"text-lg font-medium text-white mb-4"}>
                        Back-end
                    </h3>
                    <p className={"text-gray-300 text-base leading-relaxed"}>
                        Golang / Gin / GORM / PostgreSQL / MySQL / MongoDB / gRPC /
                        Redis / Kafka / Node / Nest / TypeORM / Microservices
                    </p>
                </div>

                <div className={"flex justify-center items-center"}>
                    <p className="text-gray-400 text-base leading-relaxed pr-10">
                        {"Some of my "}
                        <span className={"italic text-gray-200 font-semibold"}>{"favorite technologies and tools"}</span>
                        {" that I worked with. "}
                    </p>
                </div>

                {/* DevOps */}
                <div className={"rounded-3xl p-6 border border-white/15"}>
                    <h3 className={"text-lg font-medium text-white mb-4"}>
                        DevOps
                    </h3>
                    <p className={"text-gray-300 text-base leading-relaxed"}>
                        Nginx / Brotli / Docker /<br/>
                        (CI/CD) / k8s / Bash
                    </p>
                </div>
            </div>
        </section>
    );
};