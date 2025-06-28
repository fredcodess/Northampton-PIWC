import React, { useEffect, useState } from "react";
import GetInTouch from "../components/GetInTouch";
import ScrollToTop from "../components/ScrollToTop";
import useTitle from "../components/useTitle";

const WomensPage = () => {
  const ministryData = {
    title: "Virtuous Ladies",
    image: [
      "/media/women-3.jpeg",
      "/media/women-2.jpeg",
      "/media/women-1.jpeg",
    ],
  };
  useTitle("Women's Ministey");

  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = ministryData.image.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden hidden md:flex items-center justify-center">
        {ministryData.image.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-white border-4 border-white inline-block px-6 py-3 bebas">
            {ministryData.title}
          </h1>
        </div>
      </section>

      <section className="md:hidden bg-teal-700 text-white py-20 flex items-center justify-center">
        <h1 className="text-4xl font-bold border-4 border-white px-4 py-2 text-center">
          {ministryData.title}
        </h1>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <svg viewBox="0 0 500 100" className="w-full h-20 mx-auto ">
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-teal-600 font-bold "
                style={{
                  fontFamily: "serif",
                  fontSize: "28px",
                }}
              >
                Holiness!! Unto The Lord!!
              </text>
            </svg>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            The National Women’s Ministry is the Mothering Arm of the church and
            seeks to be a beacon of light in The Church of God that fosters the
            Spiritual Growth of our women through prayers, holy lives, wholistic
            teachings of The Word of God & personal relationship with Him.
            <br />
            <br />
            The ministry is for every female, from the age of 18 upwards. The
            National Women’s Ministry aims to be each other’s keeper, by
            creating an open & welcoming family to all our women, irrespective
            of their background.
            <br />
            <br />
            In our quest to be Christ-like, we pray for The Holy Spirit to
            enable all our women to live lives of holiness, show love, respect
            and empathy to all; and endeavour to be exemplary in all we do.
            <br />
            <br />
            The National Women’s Ministry, through various organised programmes
            and events, will continue to Equip, Encourage & Enable every woman
            to live a full and purposeful life to their God-given potentials;
            and to the glory of God.
            <br />
            <br />
            It is our prayer that God enables the Ministry to continue to grow
            together in our quest to possess the nations for Jesus Christ.
          </p>
        </div>
      </section>

      <GetInTouch title={ministryData.title} />
      <ScrollToTop />
    </div>
  );
};

export default WomensPage;
