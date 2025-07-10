import React, { useState, useRef } from "react";
import Swal from "sweetalert2";

export const ContactFormHandler = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);

    const form = event.target;
    const formDataObj = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const validationErrors = validate(formDataObj);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSending(false);
      return;
    }

    setErrors({});
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "We will get back to you.",
          icon: "success",
        });
        form.reset();
      } else {
        Swal.fire({
          title: "Error",
          text: data.message || "Something went wrong!",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Network Error",
        text: "Failed to send message. Please try again.",
        icon: "error",
      });
    }

    setSending(false);
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
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
          disabled={sending}
          className={`w-full bg-cyan-700 text-black font-extrabold py-4 rounded-md uppercase tracking-widest text-lg hover:bg-cyan-800 transition ${
            sending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};
