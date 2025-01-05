import { Logo, MovieIcon, TVIcon } from "@/components/svg";

export const TopBar = () => {
    return (
        <div id="navbar" className="bg-black px-4 py-2 text-white shadow-md">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <Logo />
                </div>
                <ul className="flex items-center gap-6">
                    <li className="flex cursor-pointer items-center gap-2 hover:text-gray-300">
                        <TVIcon />
                        <span>TV</span>
                    </li>
                    <li className="flex cursor-pointer items-center gap-2 hover:text-gray-300">
                        <MovieIcon />
                        <span>Movies</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
