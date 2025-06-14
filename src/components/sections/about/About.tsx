"use client";

import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { AnchorHeading } from "@/components/common/AnchorHeading";

export const About = () => {
    return (
        <section className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-3 gap-x-32 py-26"}>
            <AnchorHeading id={"about"} className={"col-span-3"} />
            <div className={"col-span-2"}>
                <h4 className={"text-xl pb-4 font-semibold"}>{"Hey there, I'm Kateryna! 👋"}</h4>
                <p className={"pb-4 leading-8 text-justify"}>
                    I&#39;m a Software Engineer who lives for the thrill of turning ideas into web experiences that
                    click. My toolkit?
                    <span className={"font-mono font-semibold"}> React</span>,
                    <span className={"font-mono font-semibold"}> TypeScript</span>,
                    and
                    <span className={"font-mono font-semibold"}> Node.js</span>,
                    with a passion for crafting responsive, intuitive applications that feel effortless to use. I&#39;m
                    a firm believer that great code isn&#39;t just functional—it&#39;s clean, optimized, and built to
                    scale.
                </p>
            </div>
            <div className={"flex items-center justify-center"}>
                <ProfileCard
                    name={"Kateryna K."}
                    title={"Full-stack Developer"}
                    handle={"mvkatt"}
                    showUserInfo={true}
                    enableTilt={true}
                    className={"relative z-10"}
                />
            </div>
        </section>
    );
};