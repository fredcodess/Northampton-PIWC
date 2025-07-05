import React from "react";
import { motion } from "framer-motion";
import useTitle from "../components/useTitle";
import GetInTouch from "../components/GetInTouch";
import ScrollToTop from "../components/ScrollToTop";

const EvangelismPage = () => {
  useTitle("Evangelism Ministry");

  const imageVariants = {
    hiddenLeft: { opacity: 0, x: -80 },
    hiddenRight: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-teal-500 uppercase py-16 px-6 md:py-24 text-center text-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow">
            Evangelism Ministry
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-20 bg-gray-50 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-lg md:text-xl leading-relaxed space-y-6 font-light">
            <p>
              This is the evangelistic wing of the Church. This Ministry
              undertakes gospel rallies, crusades, conventions, house-to-house
              evangelism, and other forms of outreach.
            </p>
            <p>
              These include preaching, witnessing, winning and discipling souls,
              and encouraging church members to participate in church programs
              and ministries. It allows members to plan and organize
              evangelistic activities in villages, towns, cities, and
              specialized ministries.
            </p>
            <p>
              The ministry also provides counseling and ministers to prisoners,
              emerging religious groups, the physically challenged, drug
              addicts, politicians, and hospital patients. It organizes beach
              events and other creative outreach activities.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {["/media/evangelism-1.jpeg", "/media/evangelism-2.jpeg"].map(
            (src, idx) => (
              <motion.div
                key={idx}
                initial={idx % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={imageVariants}
                className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Evangelism outreach ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            )
          )}
        </div>
      </section>

      <GetInTouch title={"Evangelism"} />
      <ScrollToTop />
    </div>
  );
};

export default EvangelismPage;
