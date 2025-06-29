import React from "react";
import { motion } from "framer-motion";

const GiveModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
      <motion.div
        className="bg-white text-black rounded-lg shadow-lg p-8 max-w-md mx-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h3 className="text-2xl font-bold mb-4">Online Giving Details</h3>
        <ul className="space-y-3 text-lg">
          <li>
            <strong>Account Name:</strong> Northampton PIWC
          </li>
          <li>
            <strong>Sort Code:</strong> 12-34-56
          </li>
          <li>
            <strong>Account Number:</strong> 12345678
          </li>
          <li>
            <strong>Reference:</strong> Donation
          </li>
        </ul>
        <button
          className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default GiveModal;
