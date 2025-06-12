import ProfileCard from "@/components/profileCard/ProfileCard";
import { AnchorHeading } from "@/components/AnchorHeading";

export const About = () => {
    return (
        <section className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-3 gap-x-32 mt-26"}>
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
                <p className={"pb-4 leading-8 text-justify"}>
                    {"I'm the kind of tech geek who gets a kick out of solving a gnarly bug or discovering a new library that changes the game. But I'm not just about the code — I love the camaraderie of a team, where we swap insights, debate architecture, and celebrate those \"aha!\" moments together. Staying on top of industry trends keeps me sharp, whether it's diving into the latest React hooks or nerding out over performance tweaks that shave milliseconds off a render."}
                </p>
                <p className={"pb-4 leading-8 text-justify"}>
                    {"For me, software development is equal parts art and science — a chance to blend creativity with precision. I'm driven by the challenge of building applications that users love and solutions that make developers nod in approval. Let's build something that's as delightful to use as it was to create."}
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