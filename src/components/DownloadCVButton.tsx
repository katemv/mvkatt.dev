import { cn } from "@/utils/tailwind";
import { Download } from "lucide-react";
import CircularText from "@/components/animations/CircularText/CircularText";
import GlareHover from "@/components/animations/GlareHover/GlareHover";

export const DownloadCVButton = () => {
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
                className="h-36 w-36 absolute inset-0 z-20"
                onHover="speedUp"
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
                <a
                    href={"/cv.pdf"}
                    download={"Kateryna_Khremuchkova_CV.pdf"}
                    aria-label={"Download CV"}
                >
                    <Download
                        className="w-6 h-6 text-white mb-1"
                        strokeWidth={2}
                    />
                </a>
            </GlareHover>

        </div>
    );
}; 