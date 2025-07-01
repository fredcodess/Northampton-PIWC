import React from "react";
import useTitle from "../components/useTitle";

const EvangelismPage = () => {
  useTitle("Evangelism Ministry");

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
      <section className="px-6 md:px-16 py-16 text-gray-800 bg-gray-50">
        <div className="max-w-4xl mx-auto text-lg md:text-xl leading-8 space-y-6">
          <p>
            This is the evangelistic wing of the Church. This Ministry
            undertakes gospel rallies, crusades, conventions, house-to-house
            evangelism, and other forms of outreach.
          </p>
          <p>
            These include preaching, witnessing, winning and discipling souls,
            and encouraging church members to participate in church programs and
            ministries. It allows members to plan and organize evangelistic
            activities in villages, towns, cities, and specialized ministries.
          </p>
          <p>
            The ministry also provides counseling and ministers to prisoners,
            emerging religious groups, the physically challenged, drug addicts,
            politicians, and hospital patients. It organizes beach events and
            other creative outreach activities.
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/media/evangelism-1.jpeg"
              alt="Evangelism outreach 1"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/media/evangelism-2.jpeg"
              alt="Evangelism outreach 2"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvangelismPage;
