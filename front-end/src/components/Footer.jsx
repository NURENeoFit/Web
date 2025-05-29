export default function Footer() {
    return (
        <footer className="bg-lime-300 rounded-t-[2rem] px-8 py-6 flex flex-col md:flex-row justify-between items-center text-black shrink-0 ">
            <h2 className="text-2xl font-normal mb-4 md:mb-0">NeoFit</h2>
            <nav>
                <ul className="flex gap-8 text-base font-regular text-lg">
                    <li>
                        <a href="/about" className="hover:underline">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="/pricing" className="hover:underline">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="/profile" className="hover:underline">
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
