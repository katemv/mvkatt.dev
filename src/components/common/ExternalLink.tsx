"use client";

import { ComponentType, FC } from "react";
import { cn } from "@/utils/tailwind";

import { trackSocialClick } from "@/lib/gtag";

interface ExternalLinkProps {
    href: string
    className?: string
    icon: ComponentType<{ size?: number; className: string; }>;
    color?: boolean
}

export const ExternalLink: FC<ExternalLinkProps> = ({ 
    href, 
    className,
    color = false,
    icon: Icon
}) => {
    const handleClick = () => {
        trackSocialClick(href);
    };

    return (
        <a
            href={href}
            target={"_blank"}
            rel={"noopener noreferrer"}
            onClick={handleClick}
            className={cn(
                "inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group relative",
                className
            )}
        >
            <div className={"border border-white text-white size-14 rounded-full flex items-center justify-center"}>
                <Icon size={20} className={"text-white"} />
            </div>

            <div className={cn("-translate-x-6 text-white size-14 rounded-full flex items-center",
                "justify-center group-hover:-translate-x-4 transition-transform duration-300",
                color ? "bg-gradient-purple-blue" : "bg-white")}>
                <span className={cn("text-xl transition-transform duration-300 group-hover:rotate-45",
                    color ? "text-white" : "text-black")}>
                    {"↗"}
                </span>
            </div>
        </a>
    );
}; 