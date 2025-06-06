"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Training {
    id: number;
    fitness_room_name: string;
    capacity: number;
    date_of_day: string;
    start_time: string;
    end_time: string;
    user_id: string[];
}

export default function Calendar() {
    const [events, setEvents] = useState([]);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push("/login");
            return;
        }

        const fetchUserData = async () => {
            try {
                const res = await fetch(
                    `https://db-zkzn.onrender.com/usersI?email=${session.user.email}`
                );
                const users = await res.json();
                if (users.length > 0) {
                    const userId = users[0].id;
                    fetchTrainings(userId);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        const fetchTrainings = async (userId: string) => {
            try {
                const response = await fetch(
                    "https://db-zkzn.onrender.com/trainingsI"
                );
                const trainings: Training[] = await response.json();

                const calendarEvents = trainings.map((training) => ({
                    id: training.id,
                    title: training.fitness_room_name,
                    date: training.date_of_day,
                    start: `${training.date_of_day}T${training.start_time}`,
                    end: `${training.date_of_day}T${training.end_time}`,
                    extendedProps: {
                        ...training,
                    },
                }));
                setEvents(calendarEvents);
            } catch (error) {
                console.error("Error fetching trainings:", error);
            }
        };

        fetchUserData();
    }, [session, router]);

    const handleJoin = async (training: Training) => {
        if (!session) {
            router.push("/login");
            return;
        }

        try {
            const res = await fetch(
                `https://db-zkzn.onrender.com/usersI?email=${session.user.email}`
            );
            const users = await res.json();
            if (users.length === 0) return;

            const userId = users[0].id;
            if (training.user_id.includes(userId)) {
                alert("You have already signed up for this workout.");
                return;
            }

            const updatedTraining = {
                ...training,
                user_id: [...training.user_id, userId],
            };

            const response = await fetch(
                `https://db-zkzn.onrender.com/trainingsI/${training.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedTraining),
                }
            );

            if (response.ok) {
                alert("Successfully booked!");
                setEvents((prev) =>
                    prev.map((event) =>
                        event.id === training.id
                            ? {
                                  ...event,
                                  extendedProps: {
                                      ...event.extendedProps,
                                      user_id: [...training.user_id, userId],
                                  },
                              }
                            : event
                    )
                );
            } else {
                throw new Error("Failed to sign up");
            }
        } catch (error) {
            alert("Write Error.");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    GROUP FITNESS CLASS SCHEDULE 
                </h1>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    initialView="timeGridWeek"
                    events={events}
                    height="auto"
                    eventContent={(eventInfo) => {
                        const training = eventInfo.event
                            .extendedProps as Training;
                        const isFull =
                            training.user_id.length >= training.capacity;

                        return (
                            <div className="p-1 text-gray-800 space-y-1">
                                <div className="font-semibold">
                                    {eventInfo.event.title}
                                </div>
                                <div className="text-sm">
                                    {training.start_time} - {training.end_time}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {training.user_id.length}/
                                    {training.capacity} members
                                </div>

                                {!isFull && (
                                    <button
                                        className="mt-1 px-2 py-1 text-xs bg-lime-500 text-white rounded hover:bg-lime-600 transition"
                                        onClick={() => handleJoin(training)}
                                    >
                                        Sign up
                                    </button>
                                )}
                            </div>
                        );
                    }}
                    slotMinTime="08:00:00"
                    slotMaxTime="20:00:00"
                    slotLabelInterval={{ hours: 1 }}
                    slotLabelFormat={{
                        hour: "numeric",
                        minute: "2-digit",
                        omitZeroMinute: false,
                        meridiem: "short",
                    }}
                    dayHeaderFormat={{
                        weekday: "short",
                        day: "numeric",
                        month: "numeric",
                    }}
                    allDaySlot={false}
                />
                {session?.user.email === "admin@gmail.com" && (
                    <Link
                        href="/admin/add-event"
                        className="mt-6 block text-center bg-lime-300 hover:bg-lime-400  py-2 px-4 rounded transition-colors"
                    >
                        Додати тренування
                    </Link>
                )}
            </div>
        </div>
    );
}
