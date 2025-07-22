import type { Metadata } from "next";
import { Open_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import { Toaster } from "sonner";
import { ParallaxWrapper } from "@/components/common/ParallaxWrapper";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kateryna Khremuchkova | Full-Stack Developer",
    description: "Experienced full-stack developer specializing in modern web technologies. Explore my projects, skills, and get in touch for collaboration opportunities.",
    keywords: [
        "full-stack developer",
        "web developer",
        "frontend developer", 
        "backend developer",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "portfolio",
        "mvkatt"
    ],
    authors: [{ name: "Kateryna Khremuchkova" }],
    creator: "Kateryna Khremuchkova",
    metadataBase: new URL("https://mvkatt.dev"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Kateryna Khremuchkova | Full-Stack Developer Portfolio",
        description: "Experienced full-stack developer specializing in modern web technologies. Explore my projects, skills, and get in touch for collaboration opportunities.",
        url: "https://mvkatt.dev",
        siteName: "mvkatt.dev",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Kateryna Khremuchkova - Full-Stack Developer Portfolio",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kateryna Khremuchkova | Full-Stack Developer Portfolio",
        description: "Experienced full-stack developer specializing in modern web technologies. Explore my projects, skills, and get in touch for collaboration opportunities.",
        images: ["/og-image.png"],
        creator: "@kateryna30715",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${openSans.variable} ${firaCode.variable} antialiased`}>
                <GoogleAnalytics />
                <ParallaxWrapper>
                    {children}
                </ParallaxWrapper>
                <Toaster theme="dark" />
            </body>
        </html>
    );
}
