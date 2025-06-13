import { Check, Download } from "lucide-react";
import { FC } from "react";

import { Spinner } from "@/components/common/Spinner";

interface IconProps {
    isLoading: boolean;
    showSuccess: boolean;
}

export const Icon: FC<IconProps> = ({ isLoading, showSuccess }) => {
    if (isLoading) {
        return (
            <div className={"transform transition-all duration-300 ease-in-out"}>
                <Spinner className={"text-white"} />
            </div>
        );
    }

    if (showSuccess) {
        return (
            <div className={"transform transition-all duration-300 ease-in-out scale-110"}>
                <Check
                    className={"w-6 h-6 text-white mb-1"}
                    strokeWidth={2}
                />
            </div>
        );
    }

    return (
        <div className={"transform transition-all duration-300 ease-in-out"}>
            <Download
                className={"w-6 h-6 text-white mb-1"}
                strokeWidth={2}
            />
        </div>
    );
};
