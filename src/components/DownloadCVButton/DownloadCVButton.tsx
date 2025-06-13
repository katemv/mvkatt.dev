"use client";

import { cn } from "@/utils/tailwind";
import { useState } from "react";
import { trackDownloadCV } from "@/lib/gtag";

import CircularText from "@/components/animations/CircularText/CircularText";
import GlareHover from "@/components/animations/GlareHover/GlareHover";
import { Icon } from "./Icon";

export const DownloadCVButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    const handleDownload = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("/api/cv");

            if (!response.ok) {
                throw new Error("Failed to download CV");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "KaterynaKhremuchkova.pdf";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            trackDownloadCV();

            setIsLoading(false);
            setShowSuccess(true);
            
            setTimeout(() => {
                setShowSuccess(false);
            }, 2000);
        } catch (error) {
            console.error("Error downloading CV:", error);
            alert("Failed to download CV. Please try again later.");
        } finally {
            if (!showSuccess) {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className={"fixed -top-10 right-16 h-36 w-36 flex items-center justify-center group z-55 cursor-pointer"}>
            {/* Outer circle */}
            <div className={cn(
                "absolute inset-0 size-46 rounded-full border border-white/20 z-0 transform",
                "-translate-x-5 -translate-y-5 group-hover:scale-105 transition-all duration-300"
            )}
            />

            {/* Middle circle */}
            <div className={cn(
                "absolute inset-0 w-38 h-38 rounded-full z-10 transform -translate-x-1 -translate-y-1",
                "backdrop-blur-md bg-gradient-to-br from-gray-900/30 to-gray-500/30"
            )}
            />

            <CircularText
                text={"DOWNLOAD * CV * DOWNLOAD * CV * "}
                className={"h-36 w-36 absolute inset-0 z-20"}
                onHover={"speedUp"}
            />

            <GlareHover
                style={{
                    height: 94,
                    width: 94,
                    borderRadius: "100%",
                    zIndex: 30,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(to bottom right, #8b5cf6, #3b82f6)",
                    transition: "all 0.3s",
                }}
                className={"group"}
            >
                <button
                    onClick={handleDownload}
                    disabled={isLoading}
                    aria-label={"Download CV"}
                    className={cn("bg-transparent border-none cursor-pointer h-full w-full rounded-full",
                        "flex items-center justify-center"
                    )}
                >
                    <Icon isLoading={isLoading} showSuccess={showSuccess} />
                </button>
            </GlareHover>

        </div>
    );
}; 