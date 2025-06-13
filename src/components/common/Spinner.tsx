import { cn } from "@/utils/tailwind";

export const Spinner = ({ className }: { className?: string }) => {
    return (
        <div className={cn("animate-spin", className)}>
            <svg className={"w-6 h-6"} viewBox={"0 0 24 24"} fill={"none"}>
                <circle
                    cx={"12"}
                    cy={"12"}
                    r={"10"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeDasharray={"32"}
                    strokeDashoffset={"32"}
                    className={"animate-pulse"}
                />
                <path
                    d={"M12 2a10 10 0 0 1 10 10"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeDasharray={"16"}
                    strokeDashoffset={"16"}
                    className={"opacity-75"}
                />
            </svg>
        </div>
    );
};