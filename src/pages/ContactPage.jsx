import { TypeAnimation } from "react-type-animation";
import { ContactFormHandler } from "../components/ContactFormHandler";
import ScrollToTop from "../components/ScrollToTop";
import useTitle from "../components/useTitle";

const ContactPage = () => {
  useTitle("Contact Us");
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="text-center py-16 playfair">
        <TypeAnimation
          sequence={["Contact Us", 1000]}
          speed={50}
          repeat={Infinity}
          className="font-extrabold text-cyan-700 text-5xl md:text-7xl uppercase tracking-widest "
        />
      </div>

      <section className="max-w-4xl mx-auto px-8 py-12 bg-gray-200 border-4 border-cyan-700 rounded-lg shadow-2xl">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-cyan-700 uppercase tracking-widest">
            Reach out to us
          </h2>
          <p className="text-black text-base mt-4">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="mb-10 text-base text-white space-y-4">
          <p>
            <strong className="text-cyan-700 uppercase">Phone:</strong>
            <a href="tel:+441234567890" className="text-black">
              +44 7904 354927
            </a>
          </p>
          <p>
            <strong className="text-cyan-700 uppercase">Email:</strong>
            <a href="mailto:npiwc24@gmail.com" className="text-black">
              npiwc24@gmail.com
            </a>
          </p>
        </div>
        <ContactFormHandler />
      </section>
      <div className="text-center mt-20 mb-12 playfair">
        <TypeAnimation
          sequence={["Find Us", 1000]}
          speed={50}
          repeat={Infinity}
          className="font-extrabold text-cyan-700 text-5xl md:text-7xl uppercase tracking-widest mb-6"
        />
        <h3 className="text-2xl font-bold text-black uppercase tracking-widest">
          KG House
        </h3>
        <h2 className="text-4xl font-extrabold text-cyan-700 uppercase tracking-widest mb-8">
          Northampton
        </h2>
        <div className="max-w-2xl mx-auto px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.4994015339716!2d-0.9206617237423795!3d52.252475771992216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770e8b5e93224f%3A0xd8091c17b648dc2!2sK%20G%20House%2C%20Unit%20H5%20Kingsfield%20Way%2C%20Kings%20Heath%20Industrial%20Estate%2C%20Northampton%20NN5%207QS!5e0!3m2!1sen!2suk!4v1752626741519!5m2!1sen!2suk"
            width="100%"
            height="350"
            style={{ border: "4px solidrgb(12, 190, 230)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Northampton PIWC Location"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-8 text-black">
          <p className="text-lg leading-loose">
            Unit L27, NN5 7QS <br /> Northampton NN5 7QS <br />
            <span className="text-cyan-700 font-extrabold uppercase tracking-widest">
              Hours
            </span>
            <br />
            <span className="ttext-cyan-700 font-extrabold uppercase tracking-widest">
              Sundays
            </span>
            <br />
            10:00 AM - 12:30 PM
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
