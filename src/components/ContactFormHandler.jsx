import React, { useRef, useState } from "react";

export const ContactFormHandler = () => {
  const form = useRef();

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      {success && (
        <p className="text-green-600 font-semibold text-center">
          Message sent successfully!
        </p>
      )}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold text-cyan-700 uppercase tracking-wide">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className={`mt-2 w-full bg-gray-500 border ${
              errors.name ? "border-red-500" : "border-white"
            } rounded-md p-4 text-white focus:ring-2 focus:ring-white outline-none`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-bold text-cyan-700 uppercase tracking-wide">
            Email
          </label>
          <input
            type="email"
            name="email"
            className={`mt-2 w-full bg-gray-500 border ${
              errors.email ? "border-red-500" : "border-white"
            } rounded-md p-4 text-white focus:ring-2 focus:ring-white outline-none`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-cyan-700 uppercase tracking-wide">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          className={`mt-2 w-full bg-gray-500 border ${
            errors.subject ? "border-red-500" : "border-white"
          } rounded-md p-4 text-white focus:ring-2 focus:ring-white outline-none`}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-cyan-700 uppercase tracking-wide">
          Message
        </label>
        <textarea
          name="message"
          rows="6"
          className={`mt-2 w-full bg-gray-500 border ${
            errors.message ? "border-red-500" : "border-white"
          } rounded-md p-4 text-white focus:ring-2 focus:ring-white outline-none`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-cyan-700 text-black font-extrabold py-4 rounded-md uppercase tracking-widest text-lg hover:bg-cyan-800 transition"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
