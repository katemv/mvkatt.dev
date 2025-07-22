"use client";

import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { AnchorHeading } from "@/components/common/AnchorHeading";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll/FadeInOnScroll";

export const About = () => {
    return (
        <section className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-26"}>
            <AnchorHeading id={"about"} className={"w-full mb-8"} />
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
                <FadeInOnScroll className={"order-1"} delay={100}>
                    <h4 className={"text-xl font-semibold font-mono"}>{"Hey there, I'm Kateryna! 👋"}</h4>
                </FadeInOnScroll>
                
                <div className={"order-3 flex items-center justify-center md:order-2 md:row-span-2"}>
                    <ProfileCard
                        name={"Kateryna K."}
                        title={"Full-stack Developer"}
                        handle={"mvkatt"}
                        showUserInfo={true}
                        enableTilt={true}
                        className={"relative z-10"}
                    />
                </div>
                
                <FadeInOnScroll className={"order-2 md:order-2"} delay={200}>
                    <p className={"pb-4 leading-8 text-justify"}>
                        I&#39;m a Software Engineer who specializes in creating impactful digital experiences. My core stack
                        includes
                        <span className={"font-mono font-semibold italic"}> React</span>,
                        <span className={"font-mono font-semibold italic"}> TypeScript</span>,
                        and
                        <span className={"font-mono font-semibold italic"}> Node.js</span>,
                        which I leverage to build responsive, intuitive applications that deliver exceptional user
                        experiences.
                    </p>
                    <p className={"pb-4 leading-8 text-justify"}>
                        Beyond professional work, I dedicate time to developing meaningful personal projects that solve
                        real-world problems and serve as laboratories for exploring new technologies.
                    </p>
                    <p className={"pb-4 leading-8 text-justify"}>
                        I&#39;m committed
                        to continuous learning, with current interests spanning
                        <span className={"font-mono font-semibold italic"}> Web3</span>,
                        <span className={"font-mono font-semibold italic"}> Rust</span>,
                        and advancing my expertise in both
                        <span className={"font-mono font-semibold italic"}> web </span>and
                        <span className={"font-mono font-semibold italic"}> mobile </span>
                        development. I believe in writing code that&#39;s
                        not only functional but also maintainable, performant, and architected for long-term success.
                    </p>
                </FadeInOnScroll>
            </div>
        </section>
    );
};