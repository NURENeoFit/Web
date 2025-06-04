import Link from "next/link";
import Navigation from "./Navigation";

const navItems = [
    { label: "About Us", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Profile", href: "/profile" },
];

export default function Header() {
    return (
        <header className="py-4 ">
            <nav className="flex items-center justify-between container mx-auto max-w-7xl">
                <div className="flex items-center space-x-2">
                    <img src="/Logo.svg" alt="Logo" />
                </div>
                <ul className="flex items-center text-xl text-black">
                    <li className="">
                        <Navigation navLinks={navItems} />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
