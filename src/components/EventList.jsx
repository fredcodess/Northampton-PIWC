import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_CALENDAR_API_KEY;
  const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`
        );
        const data = await response.json();
        if (data.items) {
          setEvents(
            data.items.map((item) => ({
              summary: item.summary,
              date: item.start.dateTime || item.start.date,
              description: item.description || "",
              time: item.start.dateTime
                ? new Date(item.start.dateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "",
              location: item.location || "",
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {loading ? (
        <p className="text-center text-gray-500 col-span-full">
          Loading events...
        </p>
      ) : events.length > 0 ? (
        <AnimatePresence>
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 p-6 text-center bg-white rounded-lg shadow transition-transform hover:scale-[1.02]"
              custom={index}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={cardVariants}
              layout
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {event.summary}
              </h2>
              <h3 className="text-sm text-gray-500 mb-2">
                {new Date(event.date).toLocaleDateString()}
                {event.time && ` • ${event.time}`}
              </h3>
              {event.description && (
                <p className="text-gray-600 mb-1">{event.description}</p>
              )}
              {event.location && (
                <p className="text-gray-500 text-sm">{event.location}</p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No upcoming events found.
        </p>
      )}
    </div>
  );
};

export default EventList;
