import ProfileCard from "@/components/profileCard/ProfileCard";
import { AnchorHeading } from "@/components/AnchorHeading";

export const About = () => {
    return (
        <section className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-3 gap-32 mt-26"}>
            <div className={"col-span-2"}>
                <AnchorHeading id={"about"} />
                <h4 className={"font-mono text-lg pb-4"}>{"Hey there, I'm Kateryna! 👋"}</h4>
                <p className={"pb-4 leading-8 text-justify"}>
                    I&#39;m a Software Engineer who lives for the thrill of turning ideas into web experiences that click. My toolkit?
                    <b className={"font-mono"}> React</b>,
                    <b className={"font-mono"}> TypeScript</b>,
                    and
                    <b className={"font-mono"}> Node.js</b>,
                    with a passion for crafting responsive, intuitive applications that feel effortless to use. I&#39;m a firm believer that great code isn&#39;t just functional—it&#39;s clean, optimized, and built to scale.
                    {"I'm the kind of tech geek who gets a kick out of solving a gnarly bug or discovering a new library that changes the game. But I'm not just about the code—I love the camaraderie of a team, where we swap insights, debate architecture, and celebrate those \"aha!\" moments together. Staying on top of industry trends keeps me sharp, whether it's diving into the latest React hooks or nerding out over performance tweaks that shave milliseconds off a render."}
                    {"For me, software development is equal parts art and science—a chance to blend creativity with precision. I'm driven by the challenge of building applications that users love and solutions that make developers nod in approval. Let's build something that's as delightful to use as it was to create."}
                </p>
            </div>
            <ProfileCard
                name={"Kateryna K."}
                title={"Full-stack Developer"}
                handle={"mvkatt"}
                showUserInfo={true}
                enableTilt={true}
                className={"relative z-10"}
            />
        </section>
    );
};