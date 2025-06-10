import { FC } from "react";

interface ExperienceProps {
    startDate: string;
    endDate: string;
    companyName: string;
    title: string;
    tech: string;
    location: string;
}

export const Experience: FC<ExperienceProps> =  ({ startDate, endDate, tech, companyName, title, location }) => {
    return (
        <div className={"py-4 border-b border-white/15 w-full group hover:bg-white transition-all duration-300 first:border-t first:border-white/15"}>
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
};