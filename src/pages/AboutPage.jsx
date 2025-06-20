import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const AboutPage = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="flex-grow pt-20">
      <section id="about" className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary text-center">
            About Us
          </h2>
          <p className="mt-4 text-gray-700 text-center">
            We are a community of believers dedicated to worship, service and
            spiritual growth. Join us as we make a difference in our community
            and beyond.
          </p>
        </div>
      </section>

      <section id="mission" className="container mx-auto px-4 py-12">
        <div className="bg-gray-200 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
          <p className="mt-2 text-gray-700">
            At Northampton PIWC, our mission is to:
          </p>
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            <li>Preach the Word of God and bring people to Christ.</li>
            <li>Create an atmosphere for passionate worship and prayer.</li>
            <li>Equip believers with biblical teachings.</li>
            <li>Foster a strong community and support system.</li>
            <li>Engage in evangelism and outreach programmes.</li>
          </ul>
        </div>
      </section>

      <section id="vision" className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
          <p className="mt-2 text-gray-700">
            We envision a church where people grow in faith, impact society, and
            live Christ-centred lives.
          </p>
        </div>
      </section>

      <section id="beliefs" className="container mx-auto px-4 py-12">
        <div className="bg-gray-200 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary">What We Believe</h2>
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            <li>The Bible is the inspired Word of God.</li>
            <li>Jesus Christ is the foundation of salvation.</li>
            <li>
              The baptism of the Holy Spirit and the gifts of the Spirit empower
              us.
            </li>
            <li>
              Holiness, righteousness, and love are central Christian virtues.
            </li>
            <li>
              We believe in the second coming of Christ and eternal life for
              believers.
            </li>
          </ul>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary">
            Our Worship Services
          </h2>
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            <li>
              <strong>Sunday Celebration Service:</strong> Uplifting worship,
              teaching, and fellowship.
            </li>
            <li>
              <strong>Midweek Bible Studies &amp; Prayer:</strong> In-depth
              study and spiritual empowerment.
            </li>
            <li>
              <strong>Youth &amp; Young Adults Ministry:</strong> Faith,
              mentorship, and personal development.
            </li>
            <li>
              <strong>Evangelism &amp; Community Outreach:</strong> Spreading
              the gospel and making a difference.
            </li>
          </ul>
        </div>
      </section>

      <button
        onClick={handleBackToTop}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
      >
        <ArrowUp />
      </button>
    </main>
  );
};

export default AboutPage;
