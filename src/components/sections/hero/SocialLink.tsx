"use client";

import { cn } from "@/utils/tailwind";
import { FC, ComponentType } from "react";
import { trackSocialClick } from "@/lib/gtag";

interface SocialLinkProps {
    icon: ComponentType<{ size?: number; className: string; }>;
    label: string;
    href: string;
}

export const SocialLink:FC<SocialLinkProps> = ({ icon: Icon, label, href }) => {
    const handleClick = () => {
        trackSocialClick(label);
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            target={"_blank"}
            className={cn(
                "border border-white/50 rounded-full px-6 py-3 flex items-center gap-2 text-white/80",
                "hover:border-white/70 hover:text-white transition-colors duration-300 cursor-pointer italic"
            )}
        >
            <Icon size={20} className="text-white" />
            <span>{label}</span>
        </a>
    );
};
