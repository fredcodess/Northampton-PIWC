import React from "react";
import { Link } from "react-router-dom";
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
              <Link
                to="/ministries"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-white transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/give" className="hover:text-white transition-colors">
                Give
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Ministries</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                to="/mens-ministry"
                className="hover:text-white transition-colors"
              >
                Men's Ministry
              </Link>
            </li>
            <li>
              <Link
                to="/womens-ministry"
                className="hover:text-white transition-colors"
              >
                Women's Ministry
              </Link>
            </li>
            <li>
              <Link
                to="/youth-ministry"
                className="hover:text-white transition-colors"
              >
                Youth Ministry
              </Link>
            </li>
            <li>
              <Link
                to="/childrens-ministry"
                className="hover:text-white transition-colors"
              >
                Children's Ministry
              </Link>
            </li>
            <li>
              <Link
                to="/evangelism-ministry"
                className="hover:text-white transition-colors"
              >
                Evangelism Ministry
              </Link>
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
