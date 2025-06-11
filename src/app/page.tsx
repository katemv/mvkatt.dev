import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Work } from "@/components/work/Work";
import { DownloadCVButton } from "@/components/header/DownloadCVButton";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
    return (
        <div className={"min-h-screen"}>
            <Header/>
            <DownloadCVButton />
            <main>
                <Hero />
                <Work />
                <Skills />
            </main>
            <footer className={"flex gap-6 flex-wrap items-center justify-center py-8"}>
            </footer>
        </div>
    );
}
