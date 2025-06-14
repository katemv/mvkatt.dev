import { cn } from "@/utils/tailwind";
import { forwardRef, HTMLProps } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "ref"> {
    label: string;
    name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, id, label, name, className, ...props }, ref) => {
        const formContext = useFormContext();
        const error = formContext?.formState?.errors?.[name];
        const hasError = !!error;
        const errorMessage = error?.message as string;

        return (
            <div className={"flex flex-col gap-2"}>
                <label htmlFor={id} className={"text-base font-mono font-medium text-white"}>
                    {label}
                </label>
                <input
                    ref={ref}
                    type={type}
                    id={id}
                    name={name}
                    className={cn(
                        "px-4 py-3 border-b border-white",
                        "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        "transition-colors duration-200",
                        hasError && "border-red-500 focus:ring-red-500",
                        className
                    )}
                    {...props}
                />
                {hasError && errorMessage && (
                    <p className={"text-red-400 text-sm font-mono"}>
                        {errorMessage}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";