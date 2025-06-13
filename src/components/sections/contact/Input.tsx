import { cn } from "@/utils/tailwind";
import { FC, HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
    label: string;
}

export const Input: FC<InputProps> = ({ value, onChange, type, id, name, required, placeholder, label }) => {
    return (
        <div className={"flex flex-col"}>
            <label htmlFor="email" className={"text-base font-mono font-medium text-white"}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className={cn(
                    "px-4 py-3 border-b border-white",
                    "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    "transition-colors duration-200"
                )}
            />
        </div>
    );
};