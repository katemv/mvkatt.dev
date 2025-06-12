import { cn } from "@/utils/tailwind";
import { FC, ComponentType } from "react";

interface SocialLinkProps {
    icon: ComponentType<{ size?: number; className: string; }>;
    label: string;
}

export const SocialLink:FC<SocialLinkProps> = ({ icon: Icon, label }) => {
    return (
        <a
            href={"#"}
            className={cn(
                "border border-white/20 rounded-full px-6 py-3 flex items-center gap-2 text-gray-400",
                "hover:border-white/50 hover:text-white transition-colors duration-300 cursor-pointer italic"
            )}
        >
            <Icon size={20} className="text-white" />
            <span>{label}</span>
        </a>
    );
};
