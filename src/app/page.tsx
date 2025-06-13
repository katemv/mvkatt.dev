import { DownloadCVButton } from "@/components/DownloadCVButton";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/sections/hero/Hero";
import { Work } from "@/components/sections/work/Work";
import { Skills } from "@/components/sections/skills/Skills";
import { About } from "@/components/sections/about/About";
import { Contact } from "@/components/sections/contact/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <div className={"min-h-screen"}>
            <Header/>
            <DownloadCVButton />
            <main>
                <Hero />
                <About />
                <Work />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
