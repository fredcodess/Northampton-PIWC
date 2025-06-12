import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactFormHandler = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EmailJSServiceID,
        process.env.EmailJSTemplateID,
        form.current,
        {
          publicKey: process.env.EmailJSUserID,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold text-cyan-700 uppercase tracking-wide">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-2 w-full bg-gray-500 border border-white rounded-md p-4 text-white focus:ring-2 focus:ring-white outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-cyan-700 uppercase tracking-wide">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full bg-gray-500 border border-white rounded-md p-4 text-white focus:ring-2 focus:ring-white outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-cyan-700 uppercase tracking-wide">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          className="mt-2 w-full bg-gray-500 border border-white rounded-md p-4 text-white focus:ring-2 focus:ring-white outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-cyan-700 uppercase tracking-wide">
          Message
        </label>
        <textarea
          name="message"
          rows="6"
          required
          className="mt-2 w-full bg-gray-500 border border-white rounded-md p-4 text-white focus:ring-2 focus:ring-white outline-none"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-cyan-700 text-black font-extrabold py-4 rounded-md uppercase tracking-widest text-lg"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
