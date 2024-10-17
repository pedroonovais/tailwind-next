import Link from "next/link";

export const Header = () => {
    return (
        <header className="bg-blue-700 pt-4 pb-4 ">
            <div className="container mx-auto flex items-center justify-between">
                <span className="text-4xl text-amber-400 font-bold">LOGO</span>
                <nav>
                    <ul>
                        <li className="inline-block px-3">
                            <Link
                                href="/"
                                className="text-tomato hover:text-amber-400 hover:underline py-4"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="inline-block px-3">
                            <Link
                                href="/"
                                className="text-neutral-200 hover:text-amber-400 hover:underline py-4"
                            >
                                Sobre
                            </Link>
                        </li>
                        <li className="inline-block px-3">
                            <Link
                                href="/"
                                className="text-neutral-200 hover:text-amber-400 hover:underline py-4"
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
