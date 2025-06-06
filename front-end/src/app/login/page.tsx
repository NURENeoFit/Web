"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const router = useRouter();

    async function handleLogin(e) {
        e.preventDefault();
        const res = await signIn("credentials", {
            redirect: false,
            email: form.email,
            password: form.password,
        });

        if (res?.ok) router.push("/profile");
        else alert("Invalid credentials");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold mb-8">Log in</h1>
            <form
                onSubmit={handleLogin}
                className="space-y-4 max-w-md w-full mx-auto"
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="blablabla@gmail.com"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        className="w-full border p-2 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        className="w-full border p-2 rounded-md"
                        required
                    />
                    {/* Password eye icon can be added here */}
                </div>
                <button
                    type="submit"
                    className="w-full bg-lime-400 text-black px-4 py-2 rounded-md font-bold"
                >
                    Log In
                </button>
                <button
                    type="button"
                    onClick={() =>
                        signIn("google", { callbackUrl: "/profile" })
                    }
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-md font-bold flex items-center justify-center space-x-2"
                >
                    {/* Google icon can be added here */}
                    <span>Continue with Google</span>
                </button>
                <div className="text-center text-sm mt-4">
                    Dont Have An Account?{" "}
                    <Link href="/register" className="underline">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
}
