import React, { useState, useEffect } from "react";
import GetInTouch from "../components/GetInTouch";
import ScrollToTop from "../components/ScrollToTop";

const ChildrensPage = () => {
  const ministryData = {
    title: "Children's Ministry",
    image: [
      "/media/children-1.jpeg",
      "/media/children-2.jpeg",
      "/media/children-3.jpeg",
    ],
    description:
      "Creating a safe, fun, and nurturing environment where children can learn about God's love through age-appropriate activities and lessons. This includes lessons on Salvation, Worship and Obedience.",
    meetings: "Every Sunday at 10:00 AM (during main service)",
    activities: [
      "Sunday School",
      "Children's Church",
      "Bible Quiz",
      "Kids' Choir",
      "Family Fun Days",
    ],
    contact: "Sister Lisa Brown - children@northamptonpiwc.org",
  };

  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = ministryData.image.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-indigo-500 to-teal-400 uppercase p-10 md:p-20 font-bold text-4xl md:text-7xl text-gray-100 leading-tight">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {ministryData.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[700px] overflow-hidden rounded-lg shadow-xl">
              {ministryData.image.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  alt={`Children's Ministry ${idx + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                    idx === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                CHILDREN
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-8">
                {ministryData.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">
                  Meeting Times
                </h3>
                <p className="text-gray-600 font-medium">
                  {ministryData.meetings}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">
                  Our Activities
                </h3>
                <ul className="space-y-2">
                  {ministryData.activities.map((activity, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-teal-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">
                  Contact
                </h3>
                <p className="text-gray-600">{ministryData.contact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch title={ministryData.title} />
      <ScrollToTop />
    </div>
  );
};

export default ChildrensPage;
