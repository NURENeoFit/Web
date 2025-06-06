import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const res = await fetch(
                    `https://db-zkzn.onrender.com/usersI?email=${credentials?.email}`
                );
                const users = await res.json();

                if (
                    users.length > 0 &&
                    users[0].password === credentials?.password
                ) {
                    return users[0];
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                const res = await fetch(
                    `https://db-zkzn.onrender.com/usersI?email=${user.email}`
                );
                const existing = await res.json();

                if (existing.length === 0) {
                    await fetch("https://db-zkzn.onrender.com/usersI", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: user.name,
                            email: user.email,
                            provider: "google",
                        }),
                    });
                }
            }
            return true;
        },
        async session({ session, token, user }) {
            return session;
        },
    },
};
