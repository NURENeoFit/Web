"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";

interface Training {
    id: number;
    capacity: number;
    date_of_day: string;
    start_time: string;
    end_time: string;
    user_id: string[];
}

export default function Calendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchTrainings = async () => {
            try {
                const response = await fetch('http://localhost:3001/trainings');
                const trainings: Training[] = await response.json();
                
                const calendarEvents = trainings.map(training => ({
                    title: `Training Session`,
                    date: training.date_of_day,
                    start: `${training.date_of_day}T${training.start_time}`,
                    end: `${training.date_of_day}T${training.end_time}`,
                    extendedProps: {
                        capacity: training.capacity,
                        userCount: training.user_id.length,
                        startTime: training.start_time,
                        endTime: training.end_time
                    }
                }));
                
                setEvents(calendarEvents);
            } catch (error) {
                console.error('Error fetching trainings:', error);
            }
        };

        fetchTrainings();
    }, []);

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
            events={events}
            eventContent={(eventInfo) => (
                <div className="p-1">
                    <div className="font-semibold">{eventInfo.event.title}</div>
                    <div className="text-sm">
                        {eventInfo.event.extendedProps.startTime} - {eventInfo.event.extendedProps.endTime}
                    </div>
                    <div className="text-xs text-gray-500">
                        {eventInfo.event.extendedProps.userCount}/{eventInfo.event.extendedProps.capacity} participants
                    </div>
                </div>
            )}
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"
            slotLabelInterval={{ hours: 1 }}
            slotLabelFormat={{
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: false,
                meridiem: 'short'
            }}
            dayHeaderFormat={{
                weekday: 'short',
                day: 'numeric',
                month: 'numeric'
            }}
            allDaySlot={false}
        />
    );
}
