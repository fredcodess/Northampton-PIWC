import React from "react";

const GetInTouch = ({ title }) => {
  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Ready to Join Us?
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          We'd love to have you as part of our {title} community. Come as you
          are and experience the love and fellowship that awaits you.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("contact-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default GetInTouch;
