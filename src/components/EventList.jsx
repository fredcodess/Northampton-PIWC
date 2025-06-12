import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const API_KEY = process.env.Calendar_API_Key;
  const CALENDAR_ID = process.env.Calendar_ID;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`,
          { method: "GET" }
        );
        const data = await response.json();
        if (data.items) {
          setEvents(
            data.items.map((item) => ({
              summary: item.summary,
              date: item.start.dateTime || item.start.date,
              description: item.description || "",
              time: item.start.dateTime
                ? new Date(item.start.dateTime).toLocaleTimeString()
                : "",
              location: item.location || "",
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching events:", error);
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
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {events.length > 0 ? (
        <AnimatePresence>
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 p-6 text-center bg-gray-100 rounded-lg shadow-sm"
              custom={index}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={cardVariants}
              layout
            >
              <h2 className="text-2xl font-bold text-gray-800">
                {event.summary}
              </h2>
              <h3 className="text-lg text-gray-600 mb-2">
                {new Date(event.date).toLocaleDateString()}
              </h3>
              <p className="text-gray-700 mb-1">{event.description}</p>
              <p className="text-gray-700 mb-1">{event.time}</p>
              <p className="text-gray-700">{event.location}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          Loading events...
        </p>
      )}
    </div>
  );
};

export default EventList;
