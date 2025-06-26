import { motion, AnimatePresence } from "framer-motion";
import EventList from "../components/EventList";
import ScrollToTop from "../components/ScrollToTop";
import useTitle from "../components/useTitle";

const EventsPage = () => {
  useTitle("Events");
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
  const weeklyEvents = [
    {
      summary: "Morning Devotion",
      date: "Every Monday and Wednesday",
      description:
        "Online Teams – Meeting ID: 396 164 678 07; Passcode: DNTk7V",
      time: "6:00 AM",
      location: "Online (Teams)",
    },
    {
      summary: "Open Heavens Prayers",
      date: "Every Wednesday",
      description: "PHYSIC meeting at KG HOUSE",
      time: "9:30 AM – 11:00 AM",
      location: "In-person at KG House",
    },
    {
      summary: "Midweek Bible Service",
      date: "Every Wednesday",
      description: "Bible studies – Meeting ID: 39616467807; Passcode: DNTK7V",
      time: "7:00 PM – 9:00 PM",
      location: "Online (Teams)",
    },
    {
      summary: "Sunday Service",
      date: "Every Sunday",
      description: "Join us for a uplifting worship and sermon.",
      time: "10:00 AM – 12:00 PM",
      location: "In-person at KG House",
    },
  ];

  return (
    <div className="p-6 sm:p-12 space-y-12">
      <section>
        <h2 className="text-4xl font-extrabold text-center text-white bg-gradient-to-r from-teal-500 to-blue-600 p-2 rounded-md shadow-md hover:bg-teal-600 transition-colors duration-300 mb-6">
          Weekly Events
        </h2>
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {weeklyEvents.map((event, index) => (
              <motion.div
                key={index}
                className="border border-gray-300 p-6 text-center bg-gray-100 rounded-lg shadow-sm"
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardVariants}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                layout
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {event.summary}
                  </h3>
                  <p className="text-gray-600 italic">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
                  <p className="text-gray-700">{event.time}</p>
                  <p className="text-gray-700">{event.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </section>

      <section>
        <h2 className="text-4xl font-extrabold text-center text-white bg-gradient-to-r from-teal-500 to-blue-600 p-2 rounded-md shadow-md hover:bg-teal-600 transition-colors duration-300 mb-6">
          Special Events
        </h2>
        <EventList />
      </section>
      <ScrollToTop />
    </div>
  );
};

export default EventsPage;
