import { cn } from "@/utils/tailwind";
import { Menu } from "lucide-react";

const navItems = [
    "about",
    "work",
    "skills",
    "projects",
    "contact"
];

export const Header = () => {
    return (
        <header className={"fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"}>
            <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"}>
                <a className="flex items-center" href={"#hero"}>
                    <h1 className="text-lg text-white flex flex-col leading-tight font-semibold">
                        <span>{"Kateryna"}</span>
                        <span>{"Khremuchkova"}</span>
                    </h1>
                </a>

                <nav className={"hidden md:flex items-center space-x-8"}>
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={"#" + item}
                            className={"text-gray-300 hover:text-white transition-colors duration-200 capitalize"}
                        >
                            {item}
                        </a>
                    ))}
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