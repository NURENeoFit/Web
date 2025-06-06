"use client";
import { useEffect, useState } from "react";
import crypto from "crypto";

const publicKey = "sandbox_i91911055214";
const privateKey = "sandbox_3OLgdJAZ7FmH9xWSZah4wE09iVAEzS6tU5NlpoPO";

const generateOrderId = () => {
    return "order_" + Date.now() + "_" + Math.floor(Math.random() * 100000);
};

function createSignature(data) {
    const json = JSON.stringify(data);
    const base64 = Buffer.from(json).toString("base64");
    const signature = crypto
        .createHash("sha1")
        .update(privateKey + base64 + privateKey)
        .digest("base64");
    return { data: base64, signature };
}
export default function Pricing() {
    const [memberships, setMemberships] = useState([]);
    const paymentData = {
        public_key: publicKey,
        version: "3",
        action: "pay",
        amount: "1",
        currency: "USD",
        description: "Test payment",
        order_id: generateOrderId(), 
        sandbox: "1", // тестовый режим
        // callback URL и другие параметры можно добавить
    };

    const { data, signature } = createSignature(paymentData);
    useEffect(() => {
        fetch("http://localhost:3001/memberships")
            .then((res) => res.json())
            .then((data) => setMemberships(data))
            .catch((error) =>
                console.error("Error fetching memberships:", error)
            );
    }, []);

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Membership Plans
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Choose the perfect plan for your fitness journey
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {memberships.map((membership) => {
                        const paymentData = {
                            public_key: publicKey,
                            version: "3",
                            action: "pay",
                            amount: `${membership.membership_price}`,
                            currency: "USD",
                            description: membership.membership_name,
                            order_id: `order_${membership.id}_${Date.now()}`, // уникальный
                            sandbox: "1",
                        };

                        const { data, signature } =
                            createSignature(paymentData);

                        return (
                            <div
                                key={membership.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="px-6 py-8">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {membership.membership_name}
                                    </h3>
                                    <p className="mt-4 text-gray-600">
                                        {membership.membership_description}
                                    </p>
                                    <div className="mt-6">
                                        <span className="text-4xl font-extrabold text-gray-900">
                                            ${membership.membership_price}
                                        </span>
                                        <span className="text-base font-medium text-gray-500">
                                            /month
                                        </span>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-center">
                                            <span className="text-gray-600">
                                                Type:{" "}
                                                {membership.membership_type}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-gray-600">
                                                Training Sessions:{" "}
                                                {membership.count_of_training}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-gray-600">
                                                Training Type: {membership.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <form
                                            method="POST"
                                            action="https://www.liqpay.ua/api/3/checkout"
                                            acceptCharset="utf-8"
                                        >
                                            <input
                                                type="hidden"
                                                name="data"
                                                value={data}
                                            />
                                            <input
                                                type="hidden"
                                                name="signature"
                                                value={signature}
                                            />
                                            <button
                                                type="submit"
                                                className="w-full bg-lime-200 py-2 px-4 rounded hover:bg-lime-300 transition duration-200 cursor-pointer"
                                            >
                                                Choose Plan
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
