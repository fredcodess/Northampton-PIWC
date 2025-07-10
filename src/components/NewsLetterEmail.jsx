import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const NewsLetterEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(import.meta.env.VITE_NEWSLETTER_EMAIL_ENTRY_ID, email);

    await fetch(import.meta.env.VITE_NEWSLETTER_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setEmail("");
    setTimeout(() => {
      toast.success("Thanks for subscribing!");
    }, 800);
  };

  return (
    <div className="container">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
