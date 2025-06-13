"use client";

import { FC, ReactNode, useState, useEffect } from "react";
import { cn } from "@/utils/tailwind";

interface CollapsibleProps {
  trigger: ReactNode
  children: ReactNode
  isOpen?: boolean
  onToggle?: (isOpen: boolean) => void
  className?: string
  contentClassName?: string
}

export const Collapsible: FC<CollapsibleProps> = ({
    trigger,
    children,
    isOpen = false,
    onToggle,
    className,
    contentClassName
}) => {
    const [internalIsOpen, setInternalIsOpen] = useState(isOpen);
  
    useEffect(() => {
        setInternalIsOpen(isOpen);
    }, [isOpen]);
  
    const handleToggle = () => {
        const newState = !internalIsOpen;
        setInternalIsOpen(newState);
        onToggle?.(newState);
    };

    const isExpanded = isOpen !== undefined ? isOpen : internalIsOpen;

    return (
        <div className={cn("w-full", className)}>
            <div onClick={handleToggle} className={"cursor-pointer"}>
                {trigger}
            </div>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
                    contentClassName
                )}
            >
                <div className={"py-4"}>
                    {children}
                </div>
            </div>
        </div>
    );
}; 