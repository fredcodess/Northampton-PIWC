import React from "react";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const GivePage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(rgba(75,147,162,255), rgb(0, 36, 55))",
      }}
      className="min-h-screen text-black"
    >
      <div className="px-6 py-16 md:py-24 text-center">
        <motion.div
          className="relative z-20 text-black max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <motion.h1 className="text-4xl sm:text-5xl md:text-[10rem] font-bold mb-6 anton leading-tight">
            YOU CANNOT <br /> OUTGIVE GOD
          </motion.h1>
          <motion.p className="text-lg md:text-xl mb-8 px-4 font-semibold">
            At Northampton PIWC, we give as an act of worship because God first
            gave to us! Not out of obligation, but believing that God will use
            our giving to continue transforming lives forever. Learn more about
            our heart for generosity and see how you can contribute to our
            mission today by clicking the button below.
          </motion.p>
          <motion.button
            className="bg-black text-white py-4 px-8 rounded anton tracking-wide text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            GIVING
          </motion.button>
        </motion.div>
      </div>

      <div className="px-14 py-12 md:py-20 space-y-20">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
            hidden: { opacity: 0 },
          }}
        >
          <motion.img
            src="/media/offering.jpg"
            alt="In-person offering"
            className="w-full md:w-1/2 h-100 rounded-xl shadow-lg object-cover"
            variants={fadeInVariant}
          />
          <motion.div
            className="text-center md:text-left"
            variants={fadeInVariant}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 anton">
              IN-PERSON
            </h2>
            <p className="text-lg md:text-xl font-semibold">
              You can give in person during our Sunday experience at Northampton
              PIWC. <br />
              Thank you for your generosity!
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
            hidden: { opacity: 0 },
          }}
        >
          <motion.div
            className="text-center md:text-left"
            variants={fadeInVariant}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 anton">
              ONLINE
            </h2>
            <p className="text-lg md:text-xl font-semibold">
              Support Northampton PIWC with your generosity online! Visit our
              secure giving page to make a donation from the comfort of your
              home. Whether it's a one-time gift or a recurring contribution,
              your support helps us make a difference. Thank you for partnering
              with us in our mission!
            </p>
            <motion.button
              className="bg-black text-white py-3 px-6 rounded mt-8 anton text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              ONLINE GIVING
            </motion.button>
          </motion.div>
          <motion.img
            src="/media/cardpay.jpg"
            alt="Card payment"
            className="w-full md:w-1/2 h-auto rounded-xl shadow-lg object-cover"
            variants={fadeInVariant}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GivePage;
