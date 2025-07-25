import React, { useState, useEffect } from "react";
import { PlayCircle } from "lucide-react";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaBookBible } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import WhatWeBelieve from "../components/WhatWeBelieve";
import useTitle from "../components/useTitle";

const bgImages = [
  "https://res.cloudinary.com/df17ci9pu/image/upload/v1752422070/home-1_bj5edl.jpg",
  "https://res.cloudinary.com/df17ci9pu/image/upload/v1752422070/home-2_tq0tvq.jpg",
  "https://res.cloudinary.com/df17ci9pu/image/upload/v1752422070/home-3_axnpbg.jpg",
];

const QuickAccessCard = ({ icon: Icon, title, description, link }) => (
  <Link to={link} className="block">
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
  </Link>
);

const ministries = [
  {
    name: "Men's MINISTRY",
    image:
      "https://res.cloudinary.com/df17ci9pu/image/upload/v1752490700/MensMin_vj7xmc.png",
    href: "/mens-ministry",
  },
  {
    name: "Women's MINISTRY",
    image:
      "https://res.cloudinary.com/df17ci9pu/image/upload/v1752490700/WomenMin_u9bcsj.png",
    href: "/womens-ministry",
  },
  {
    name: "Children's MINISTRY",
    image:
      "https://res.cloudinary.com/df17ci9pu/image/upload/v1752490701/ChildrensMin_xjumxz.png",
    href: "/children-ministry",
  },
  {
    name: "Youth's MINISTRY",
    image:
      "https://res.cloudinary.com/df17ci9pu/image/upload/v1752490700/YouthMin_dumnyb.png",
    href: "/youth-ministry",
  },
  {
    name: "Evangelism's MINISTRY",
    image:
      "https://res.cloudinary.com/df17ci9pu/image/upload/v1752490700/EvangelismMin_adoxvi.png",
    href: "/evangelism-ministry",
  },
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useTitle("Home");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const svg = (
    <svg
      className="w-8 h-8 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );

  return (
    <div className="flex-grow">
      {/* HERO SECTION */}
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

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 playfair"
          >
            Welcome To <br />
            <span className="mt-10 text-5xl md:text-9xl text-cyan-700 drop-shadow-xl/50 bebas">
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
            className="font-extrabold text-white md:text-4xl tracking-widest playfair"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6"
          >
            <a
              href="https://www.youtube.com/@northamptonPIWC"
              className="bg-primary oswald text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-all transform hover:scale-105 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayCircle className="mr-2" /> Watch
            </a>
            <Link
              to="/events"
              className="bg-white oswald text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Service Times
            </Link>
          </motion.div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="relative -mt-20 z-30 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickAccessCard
            icon={FaHeart}
            title="Love"
            description="Spreading God's love through our actions and words"
          />
          <QuickAccessCard
            icon={MdOutlineFamilyRestroom}
            title="Community"
            description="Building strong, meaningful bonds within our church family."
          />
          <QuickAccessCard
            icon={FaBookBible}
            title="Growth"
            description="Encouraging spiritual development and discipleship"
          />
        </div>
      </section>

      {/* WORSHIP SECTION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="uppercase font-bold text-4xl md:text-5xl mb-4 playfair">
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
              KG House - Northampton
              <br />
              Unit L27, NN5 7QS
              <br />
              10:00 AM – 12:30 PM
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-cyan-700/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.4994015339716!2d-0.9206617237423795!3d52.252475771992216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770e8b5e93224f%3A0xd8091c17b648dc2!2sK%20G%20House%2C%20Unit%20H5%20Kingsfield%20Way%2C%20Kings%20Heath%20Industrial%20Estate%2C%20Northampton%20NN5%207QS!5e0!3m2!1sen!2suk!4v1752626741519!5m2!1sen!2suk"
                width="100%"
                height="350"
                allowFullScreen=""
                loading="lazy"
                title="Northampton PIWC Location"
                className="w-full h-[350px] md:h-[400px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MINISTRY GROUPS */}
      <section className="bg-gradient-to-r from-indigo-500 to-teal-400 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-6xl font-bold mb-12 bebas"
          >
            MINISTRY GROUPS
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center items-center">
            {ministries.map((group, index) => (
              <Link
                to={group.href}
                key={index}
                className="flex flex-col items-center text-white"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={group.image}
                    alt={group.name}
                    className="h-32 w-32 md:h-40 md:w-40 rounded-full shadow-xl object-cover"
                  />
                  <p className="mt-4 text-center font-medium leading-tight">
                    {group.name}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatWeBelieve />

      <ScrollToTop />
    </div>
  );
};

export default HomePage;
