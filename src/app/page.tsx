import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { DownloadCVButton } from "@/components/header/DownloadCVButton";

export default function Home() {
    return (
        <div className={"min-h-screen"}>
            <Header/>
            <DownloadCVButton />
            <main>
                <Hero/>
                <Hero/>
                <Hero/>
            </main>
            <footer className={"flex gap-6 flex-wrap items-center justify-center py-8"}>
            </footer>
        </div>
    );
}
