import { useEffect, useState } from "react";
import GetInTouch from "../components/GetInTouch";
import ScrollToTop from "../components/ScrollToTop";

const YouthPage = () => {
  const ministryData = {
    title: "Youth & Pensa",
    image: ["/media/youth-4.jpg", "/media/youth-6.jpg", "/media/youth-2.jpeg"],
    description:
      "Empowering the next generation through dynamic worship, relevant teaching, and fun activities that build lasting friendships and strong faith.",
    meetings: "Every Friday at 6:00 PM",
    activities: [
      "Youth Service",
      "Game and Social Events",
      "Bible Study Groups",
      "Youth Camps",
      "Family Fun Days",
    ],
    contact: "youth@churchdomain.com",
    video: ["/media/football-game.mp4", "/media/pensa.mp4"],
  };

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl lg:text-6xl font-bold text-white border-4 border-white inline-block px-6 py-3">
            {ministryData.title}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">PENSA</h2>
              <div className="w-24 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Raising World Changers with the Christ Factor
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  Meeting Times
                </h3>
                <p className="text-gray-600 font-medium">
                  Every Tuesday at 6:30 PM <br />
                  Waterside Campus, University of Northampton
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  Contact
                </h3>
                <p className="text-gray-600">{ministryData.contact}</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <video
                className="w-full h-auto rounded-lg shadow-lg"
                src={ministryData.video[1]}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <video
                className="w-full h-auto rounded-lg shadow-lg"
                src={ministryData.video[0]}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Youth</h2>
              <div className="w-24 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-8">
                {ministryData.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  Meeting Times
                </h3>
                <p className="text-gray-600 font-medium">
                  {ministryData.meetings}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
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
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
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

export default YouthPage;
