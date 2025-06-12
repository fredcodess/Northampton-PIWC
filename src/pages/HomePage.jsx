import React, { useState, useEffect } from "react";
import { PlayCircle, Church, BookOpen, HelpingHand } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const bgImages = [
  "/media/image1.1.JPG",
  "/media/image2.1.JPG",
  "/media/image3.1.JPG",
];

const QuickAccessCard = ({ icon: Icon, title, description, link }) => (
  <a href={link} className="block">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="card bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="text-primary text-2xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  </a>
);

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-grow pt-20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {bgImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50 to-transparent z-10"></div>

        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 montserrat"
          >
            Welcome To <br />{" "}
            <span className=" mt-10 text-5xl md:text-9xl text-cyan-700 drop-shadow-xl/50">
              Northampton PIWC
            </span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Join us in worship every Sunday as we celebrate God's love and grace together",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-extrabold text-white md:text-4xl tracking-widest"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6"
          >
            <a
              href="https://www.youtube.com/@northamptonPIWC"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-all transform hover:scale-105 flex items-center"
            >
              <PlayCircle className="mr-2" /> Watch
            </a>
            <a
              href="/events"
              className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Service Times
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-20 z-30 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickAccessCard
            icon={Church}
            title="New Here?"
            description="Learn what to expect"
            link="test.html"
          />
          <QuickAccessCard
            icon={HelpingHand}
            title="Get Involved"
            description="Join our ministries"
            link="test.html"
          />
          <QuickAccessCard
            icon={BookOpen}
            title="Baptism"
            description="Submit your request"
            link="/baptism"
          />
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="uppercase font-bold text-4xl md:text-5xl mb-4">
              <span className="text-cyan-800 sacramento">Worship</span> with us
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Looking for a place to Worship?
            </h3>

            <p className="text-gray-600 mb-3">
              Use our Branch finder to locate the Church.
            </p>
            <p className="text-gray-600 mb-6">
              Northampton PIWC also has Worship services in the Ghanaian dialect
              (Twi/Akan).
            </p>

            <div className="text-gray-800 bg-gray-100 p-4 rounded-lg w-fit shadow">
              <strong className="text-cyan-800">Sundays</strong>
              <br />
              10:00 AM – 12:30 PM
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-cyan-700/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.511790444395!2d-0.9196533867058443!3d52.25225077187539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770e8b5ec0711b%3A0x143c55538a85fa3d!2sKingsfield%20Cl%2C%20Northampton%20NN5%207QS!5e0!3m2!1sen!2suk!4v1748744151188!5m2!1sen!2suk"
                width="100%"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Northampton PIWC Location"
                className="w-full h-[350px] md:h-[400px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-500 to-teal-400 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-6xl font-bold mb-12"
          >
            MINISTRY GROUPS
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center items-center">
            {[
              { name: "Men's MINISTRY", image: "/media/MensMin.png" },
              { name: "Women's MINISTRY", image: "/media/WomenMin.png" },
              { name: "Children's MINISTRY", image: "/media/ChildrensMin.png" },
              { name: "Youth's MINISTRY", image: "/media/YouthMin.png" },
              {
                name: "Evangelism's MINISTRY",
                image: "/media/EvangelismMin.png",
              },
            ].map((group, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center text-white"
              >
                <img
                  src={group.image}
                  alt={group.name}
                  className="h-32 w-32 md:h-40 md:w-40 rounded-full shadow-xl object-cover"
                />
                <p className="mt-4 text-center font-medium leading-tight">
                  {group.name}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
