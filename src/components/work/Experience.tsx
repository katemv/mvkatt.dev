"use client";

import { FC, useState } from "react";
import { Collapsible } from "@/components/Collapsible";
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
    const [isHovered, setIsHovered] = useState(false);

    const triggerContent = (
        <div className={"w-full group-hover:bg-white py-4"}>
            <div className={"flex items-center gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"}>
                <div className={"w-42 text-gray-400 group-hover:text-black"}>
                    <span className="text-lg">{startDate}</span>
                    {" - "}
                    <span className="text-lg">{endDate}</span>
                    <p className="text-sm">{location}</p>
                </div>
                <div className={"flex-1 text-lg font-medium group-hover:text-black"}>
                    {companyName}
                </div>
                <div className={"text-right text-lg group-hover:text-black"}>
                    <div>{title} | {tech}</div>
                </div>
            </div>
        </div>
    );

    const detailsContent = (
        <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"}>
            <ul className={"space-y-2 pl-6"}>
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Collapsible
                trigger={triggerContent}
                isOpen={isHovered}
            >
                {detailsContent}
            </Collapsible>
        </div>
    );
};