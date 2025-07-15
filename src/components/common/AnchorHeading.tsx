import { FC } from "react";
import { cn } from "@/utils/tailwind";

interface  AnchorHeadingProps {
    id: string;
    className?: string;
}

export const AnchorHeading: FC<AnchorHeadingProps> = ({ id, className }) => (
    <h2
        id={id}
        className={cn("text-5xl md:text-7xl mb-8 font-mono font-semibold scroll-mt-16 capitalize", className)}
    >
        {id}
    </h2>
);
