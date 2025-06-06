"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";
import { useSession, signOut } from "next-auth/react";

type navLink = {
    href: string;
    label: string;
};

type Props = {
    navLinks: navLink[];
};

export default function Navigation({ navLinks }: Props) {
    const pathname = usePathname();
    const session = useSession();

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`px-3 py-2 mr-15 rounded-md transition-all duration-500 ${
                            isActive
                                ? "bg-lime-300"
                                : "text-black hover:underline"
                        }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
            {session?.data ? (
                <Link
                    href="/"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="border border-lime-400 text-black px-4 py-2 rounded-md hover:bg-lime-100 transition"
                >
                    Sign Out
                </Link>
            ) : (
                <Link
                    href="/register"
                    className="border border-lime-400 text-black px-4 py-2 rounded-md hover:bg-lime-100 transition"
                >
                    Sign In
                </Link>
            )}
        </>
    );
}
