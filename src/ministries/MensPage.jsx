import React from "react";
import GetInTouch from "../components/GetInTouch";
import ScrollToTop from "../components/ScrollToTop";
import useTitle from "../components/useTitle";

const MensPage = () => {
  const ministryData = {
    title: "Men's Ministry",
    image:
      "https://res.cloudinary.com/df17ci9pu/image/upload/v1752492227/mens-2_wzsfer.jpg",
    meetings: "Every Sunday at 10:00 AM (during main service)",
    activities: [
      "Brotherhood Fellowship",
      "Community Service Projects",
      "Men's Conference",
      "Mentorship and Discipleship",
    ],
  };
  useTitle("Men's Ministey");

  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden hidden md:flex items-center justify-center">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000`}
          style={{ backgroundImage: `url(${ministryData.image})` }}
        />

        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-white border-4 border-white inline-block px-6 py-3 bebas">
            {ministryData.title}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={ministryData.image}
                alt="Men's Ministry"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">PEMEM</h2>
              <div className="w-24 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-8">
                The Pentecost Men’s Ministry (PEMEM) caters for the interest of
                all the men in the Church. The Men’s Ministry organises
                seminars, workshops, lectures and symposia on all aspects of
                life including: Marriage enrichment, husbands’ responsibilities
                at home, child care and education; business management and
                techniques; leadership and responsibility in the Church.
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
            </div>
          </div>
        </div>
      </section>

      <GetInTouch title={ministryData.title} />
      <ScrollToTop />
    </div>
  );
};

export default MensPage;
