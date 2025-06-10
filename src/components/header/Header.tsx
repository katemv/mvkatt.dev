import { cn } from "@/utils/tailwind";
import { Menu } from "lucide-react";

export const Header = () => {
    return (
        <header className={"fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"}>
            <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"}>
                <div className="flex items-center">
                    <h1 className="text-lg text-white flex flex-col leading-tight font-semibold">
                        <span>{"Kateryna"}</span>
                        <span>{"Khremuchkova"}</span>
                    </h1>
                </div>

                <nav className={"hidden md:flex items-center space-x-8"}>
                    <a 
                        href={"#about"}
                        className={"text-gray-300 hover:text-white transition-colors duration-200"}
                    >
                        {"About"}
                    </a>
                    <a 
                        href={"#projects"} 
                        className={"text-gray-300 hover:text-white transition-colors duration-200"}
                    >
                        {"Projects"}
                    </a>
                    <a 
                        href={"#contact"}
                        className={"text-gray-300 hover:text-white transition-colors duration-200"}
                    >
                        {"Contact"}
                    </a>
                </nav>

                <div className="w-32 hidden md:block" />

                <div className={"md:hidden flex items-center gap-4"}>
                    <button
                        className={cn("p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800",
                            "transition-colors duration-200")}
                        aria-label={"Open menu"}
                    >
                        <Menu className={"w-6 h-6"} />
                    </button>
                </div>
            </div>
        </header>
    );
};