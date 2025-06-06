"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddEventPage() {
    const [form, setForm] = useState({
        fitness_room_name: "",
        capacity: "",
        date_of_day: "",
        start_time: "",
        end_time: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const router = useRouter();

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!form.fitness_room_name.trim()) {
            newErrors.fitness_room_name = "Hall name is required";
        }

        const capacity = Number(form.capacity);
        if (!form.capacity || isNaN(capacity) || capacity <= 0) {
            newErrors.capacity = "Enter a positive number for the capacity";
        }

        if (!form.date_of_day) {
            newErrors.date_of_day = "choose a date";
        }

        if (!form.start_time) {
            newErrors.start_time = "Start time required";
        }

        if (!form.end_time) {
            newErrors.end_time = "End time required";
        }

        if (
            form.start_time &&
            form.end_time &&
            form.start_time >= form.end_time
        ) {
            newErrors.end_time = "End time must be later than start time";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const generateRandomId = () => {
        return Math.floor(100000 + Math.random() * 900000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        const newEvent = {
            ...form,
            id: generateRandomId(),
            capacity: Number(form.capacity),
            user_id: [],
        };

        const res = await fetch("https://db-zkzn.onrender.com/trainingsI", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent),
        });

        if (res.ok) {
            router.push("/calendar");
        } else {
            setErrors({ general: "Error adding workout." });
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Add a new workout</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="fitness_room_name"
                        placeholder="Назва залу (напр. Pilates)"
                        value={form.fitness_room_name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.fitness_room_name && (
                        <p className="text-red-500 text-sm">
                            {errors.fitness_room_name}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="number"
                        name="capacity"
                        placeholder="Максимальна кількість учасників"
                        value={form.capacity}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.capacity && (
                        <p className="text-red-500 text-sm">
                            {errors.capacity}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="date"
                        name="date_of_day"
                        value={form.date_of_day}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.date_of_day && (
                        <p className="text-red-500 text-sm">
                            {errors.date_of_day}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="time"
                        name="start_time"
                        value={form.start_time}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.start_time && (
                        <p className="text-red-500 text-sm">
                            {errors.start_time}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="time"
                        name="end_time"
                        value={form.end_time}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.end_time && (
                        <p className="text-red-500 text-sm">
                            {errors.end_time}
                        </p>
                    )}
                </div>

                {errors.general && (
                    <p className="text-red-500 text-sm">{errors.general}</p>
                )}

                <button
                    type="submit"
                    className="w-full bg-lime-300 py-2 rounded hover:bg-lime-400"
                >
                    Add training
                </button>
            </form>
        </div>
    );
}
