import React from "react";
import NewsLetterEmail from "./NewsLetterEmail";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            Northampton PIWC is a vibrant community of believers dedicated to
            spreading God's love.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="/ministries"
                className="hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-white transition-colors">
                Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/give" className="hover:text-white transition-colors">
                Give
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Minitries</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="/mens-ministry"
                className="hover:text-white transition-colors"
              >
                Men's Ministry
              </a>
            </li>
            <li>
              <a
                href="/womens-ministry"
                className="hover:text-white transition-colors"
              >
                Women's Ministry
              </a>
            </li>
            <li>
              <a
                href="/youth-ministry"
                className="hover:text-white transition-colors"
              >
                Youth Ministry
              </a>
            </li>
            <li>
              <a
                href="/childrens-ministry"
                className="hover:text-white transition-colors"
              >
                Children's Ministry
              </a>
            </li>
            <li>
              <a
                href="/evangelism-ministry"
                className="hover:text-white transition-colors"
              >
                Evangelism Ministry
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <NewsLetterEmail />
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 mb-8 pt-8 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Northampton PIWC. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
