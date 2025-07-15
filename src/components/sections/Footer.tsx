const navItems = [
    "about",
    "work",
    "skills",
    "contact"
];

export const Footer = () => {
    return (
        <footer className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full gap-10 border-t border-white/20 py-8"}>
            <nav className={"flex items-center justify-end space-x-8"}>
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
        </footer>
    );
};
