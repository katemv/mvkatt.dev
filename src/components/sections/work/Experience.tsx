"use client";

import { FC, useState } from "react";
import { Collapsible } from "@/components/common/Collapsible";
import { cn } from "@/utils/tailwind";
import { trackWorkExperienceExpand } from "@/lib/gtag";
import { PlusMorph } from "@/components/animations/PlusMorph";
import SpotlightCard from "@/components/animations/SpotlightCard/SpotlightCard";

interface ExperienceProps {
    startDate: string;
    endDate: string;
    companyName: string;
    title: string;
    tech: string;
    location: string;
    description: string[];
}

export const Experience: FC<ExperienceProps> = ({
    startDate,
    endDate,
    tech,
    companyName,
    title,
    location,
    description
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (newState: boolean) => {
        setIsOpen(newState);
        if (newState) {
            trackWorkExperienceExpand(companyName);
        }
    };

    const triggerContent = (
        <div className={"w-full transition-all duration-300"}>
            <div className={"flex items-center gap-6 md:gap-8 max-w-7xl mx-auto w-full"}>
                <PlusMorph
                    isActive={isOpen}
                    size={"sm"}
                    color={"bg-white"}
                    className={"w-7 h-7"}
                />
                <div className={"flex w-full flex-col md:flex-row justify-between gap-4"}>
                    <div className={"flex flex-col md:flex-row items-start md:items-center order-2 md:order-1"}>
                        <div className={"text-white md:w-36"}>
                            <span className="text-xs md:text-base">{startDate}</span>
                            {" - "}
                            <span className="text-xs md:text-base">{endDate}</span>
                            <p className="text-xs md:text-base">{location}</p>
                        </div>
                    </div>
                    <div className={"md:text-right text-sm md:text-lg text-white order-1 md:order-2"}>
                        <div className={"text-base font-semibold"}>{title} @ {companyName}</div>
                        <div>{tech}</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const detailsContent = (
        <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"}>
            <ul className={"space-y-2 pl-12 md:pl-22"}>
                {description.map((item, index) => (
                    <li
                        key={index}
                        className={cn(
                            "text-base leading-relaxed relative before:content-['■']",
                            "before:absolute before:-left-6 before:top-[-2px]",
                            "text-white before:text-white"
                        )}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className={"border-b border-gray-400/10 w-full first:border-t first:border-gray-400/10"}>
            <SpotlightCard 
                className={cn(
                    "group w-full transition-all duration-300 rounded-none border-0 p-0 bg-transparent backdrop-blur-none"
                )}
                spotlightColor="rgba(53, 60, 90, 0.6)"
            >
                <Collapsible
                    trigger={triggerContent}
                    isOpen={isOpen}
                    onToggle={handleToggle}
                >
                    {detailsContent}
                </Collapsible>
            </SpotlightCard>
        </div>
    );
};