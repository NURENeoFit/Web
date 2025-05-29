export default function Header() {
    return (
        <header className="py-4">
            <nav className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src="/Logo.svg" alt="Logo" />
                </div>
                <ul className="flex items-center space-x-8 text-lg text-black">
                    <li>
                        <a href="/" className="hover:underline">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="/pricing" className="hover:underline">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="/profile"
                            className="bg-lime-300 text-black px-4 py-2 rounded-md hover:bg-lime-500 transition"
                        >
                            Profile
                        </a>
                    </li>
                    <li>
                        <a
                            href="/signup"
                            className="border border-lime-400 text-black px-4 py-2 rounded-md hover:bg-lime-100 transition"
                        >
                            Sign up
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
