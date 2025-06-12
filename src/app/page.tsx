import { Header } from "@/components/header/Header";
import { Hero } from "@/components/sections/hero/Hero";
import { Work } from "@/components/sections/work/Work";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { Skills } from "@/components/sections/skills/Skills";
import { About } from "@/components/sections/about/About";

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
            </main>
            <footer className={"flex gap-6 flex-wrap items-center justify-center py-8"}>
            </footer>
        </div>
    );
}
