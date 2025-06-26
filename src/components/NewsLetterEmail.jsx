import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const NewsLetterEmail = () => {
  const joinForm = useRef();
  const userID = "process.env.EmailJSUserID";

  useEffect(() => {
    emailjs.init(userID);
  }, []);

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    const serviceID = "process.env.EmailJSServiceID";
    const templateID = "process.env.EmailJSTemplateID";

    emailjs.sendForm(serviceID, templateID, joinForm.current).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for joining!");
        joinForm.current.reset();
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to join. Please try again.");
      }
    );
  };

  return (
    <div className="container">
      <form
        ref={joinForm}
        onSubmit={handleJoinSubmit}
        className="form-container"
      >
        <input
          name="user_email"
          id="user_email"
          type="email"
          placeholder="Your email"
          required
          className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-transform transform hover:scale-105"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterEmail;
