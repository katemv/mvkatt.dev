import { cn } from "@/utils/tailwind";
import { Download } from "lucide-react";
import CircularText from "@/components/animations/CircularText/CircularText";

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

            <a
                href={"/cv.pdf"}
                download={"Kateryna_Khremuchkova_CV.pdf"}
                className={cn(
                    "flex flex-col items-center justify-center w-22 h-22 rounded-full z-30",
                    "bg-gradient-to-br from-purple-500 to-blue-500 transition-all duration-300 transform",
                    "group-hover:scale-102 shadow-lg hover:shadow-xl group"
                )}
                aria-label={"Download CV"}
            >
                <Download
                    className="w-6 h-6 text-white mb-1"
                    strokeWidth={2}
                />
            </a>
        </div>
    );
}; 