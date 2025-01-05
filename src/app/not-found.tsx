import Link from "next/link";

const NotFound404 = () => {
    return (
        <div className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-center">
            <h2 className="mb-4 text-4xl font-bold text-black dark:text-white">
                Not Found
            </h2>
            <p className="text-gray-400">Could not find requested resource</p>
            <Link href="/">
                <span className="mt-4 text-black transition-colors duration-200 hover:text-[#eda1c5] dark:text-white">
                    Go back home
                </span>
            </Link>
        </div>
    );
};

export default NotFound404;
