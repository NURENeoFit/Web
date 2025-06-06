'use client';
import { useEffect, useState } from 'react';

export default function Pricing() {
    const [memberships, setMemberships] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/memberships')
            .then(res => res.json())
            .then(data => setMemberships(data))
            .catch(error => console.error('Error fetching memberships:', error));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
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
                    {memberships.map((membership) => (
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
                                            Type: {membership.membership_type}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600">
                                            Training Sessions: {membership.count_of_training}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600">
                                            Training Type: {membership.type}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600">
                                            Valid until: {new Date(membership.end_date).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button
                                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
