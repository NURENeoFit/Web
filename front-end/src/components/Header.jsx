import Link from 'next/link';

export default function Header() {
    return (
        <header className="py-4 ">
            <nav className="flex items-center justify-between container mx-auto max-w-7xl">
                <div className="flex items-center space-x-2">
                    <img src="/Logo.svg" alt="Logo" />
                </div>
                <ul className="flex items-center space-x-8 text-lg text-black">
                    <li>
                        <Link href="/" className="hover:underline">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="hover:underline">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/profile"
                            className="bg-lime-300 text-black px-4 py-2 rounded-md hover:bg-lime-500 transition"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/signup"
                            className="border border-lime-400 text-black px-4 py-2 rounded-md hover:bg-lime-100 transition"
                        >
                            Sign up
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
