import { cn } from "@/utils/tailwind";
import { ComponentType, FC } from "react";

interface ExternalLinkProps {
  href: string
  className?: string
  icon: ComponentType<{ size?: number; className: string; }>;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ 
    href, 
    className,
    icon: Icon
}) => {
    return (
        <a
            href={href}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={cn(
                "inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group relative",
                className
            )}
        >
            <div className={"border border-white text-white size-14 rounded-full flex items-center justify-center"}>
                <Icon size={20} className={"text-white"} />
            </div>

            <div className={cn("-translate-x-6 bg-white text-black size-14 rounded-full flex items-center",
                "justify-center group-hover:-translate-x-4 transition-transform duration-300")}>
                <span className={"text-xl transition-transform duration-300 group-hover:rotate-45"}>
                    {"↗"}
                </span>
            </div>
        </a>
    );
}; 