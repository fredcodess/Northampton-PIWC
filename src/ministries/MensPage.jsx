import React from "react";
import GetInTouch from "../components/GetInTouch";
import ScrollToTop from "../components/ScrollToTop";

const MensPage = () => {
  const ministryData = {
    title: "Men's Ministry",
    image: "/media/mens-2.jpeg",
    meetings: "Every Sunday at 10:00 AM (during main service)",
    activities: [
      "Brotherhood Fellowship",
      "Community Service Projects",
      "Men's Conference",
      "Mentorship and Discipleship",
    ],
    contact: "",
  };

  return (
    <div className="min-h-screen">
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${ministryData.image})` }}
      >
        <div className="bg-black/50 p-10 rounded-lg text-center">
          <h1 className="text-5xl lg:text-6xl font-bold border-4 border-white px-6 py-3 inline-block">
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
