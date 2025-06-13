"use client";

import { FC, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Collapsible } from "@/components/common/Collapsible";
import { cn } from "@/utils/tailwind";

interface ExperienceProps {
    startDate: string;
    endDate: string;
    companyName: string;
    title: string;
    tech: string;
    location: string;
    description: string[];
}

export const Experience: FC<ExperienceProps> =  ({ startDate, endDate, tech, companyName, title, location, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const triggerContent = (
        <div className={cn(
            "w-full py-4 transition-colors duration-300",
            isOpen 
                ? "bg-white" 
                : "group-hover:bg-white"
        )}>
            <div className={"flex items-center gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"}>
                <div className={"flex items-center gap-4"}>
                    <div className={cn(
                        "relative transition-colors duration-300 w-5 h-5 mr-6",
                        isOpen 
                            ? "text-black" 
                            : "text-white group-hover:text-black"
                    )}>
                        <Plus 
                            className={cn(
                                "size-7 absolute inset-0 transition-all duration-300 ease-in-out",
                                isOpen 
                                    ? "opacity-0 rotate-180 scale-75" 
                                    : "opacity-100 rotate-0 scale-100"
                            )} 
                        />
                        <Minus 
                            className={cn(
                                "size-7 absolute inset-0 transition-all duration-300 ease-in-out",
                                isOpen 
                                    ? "opacity-100 rotate-0 scale-100" 
                                    : "opacity-0 rotate-180 scale-75"
                            )} 
                        />
                    </div>
                    <div className={cn(
                        "w-42 transition-colors duration-300",
                        isOpen 
                            ? "text-black" 
                            : "text-white group-hover:text-black"
                    )}>
                        <span className="text-base">{startDate}</span>
                        {" - "}
                        <span className="text-base">{endDate}</span>
                        <p className="text-sm">{location}</p>
                    </div>
                </div>
                <div className={cn(
                    "flex-1 text-lg font-semibold transition-colors duration-300",
                    isOpen 
                        ? "text-black" 
                        : "text-white group-hover:text-black"
                )}>
                    {companyName}
                </div>
                <div className={cn(
                    "text-right text-lg transition-colors duration-300",
                    isOpen 
                        ? "text-black" 
                        : "text-white group-hover:text-black"
                )}>
                    <div>{title} | {tech}</div>
                </div>
            </div>
        </div>
    );

    const detailsContent = (
        <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"}>
            <ul className={"space-y-2 pl-22"}>
                {description.map((item, index) => (
                    <li
                        key={index}
                        className={cn("text-base leading-relaxed relative before:content-['■']",
                            "before:absolute before:-left-6 before:text-white before:top-[-2px]")}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div 
            className={"border-b border-white/15 w-full group transition-all duration-300 first:border-t first:border-white/15"}
        >
            <Collapsible
                trigger={triggerContent}
                isOpen={isOpen}
                onToggle={setIsOpen}
            >
                {detailsContent}
            </Collapsible>
        </div>
    );
};