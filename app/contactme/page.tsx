"use client";

import { useState, useEffect } from "react"
import { brillant } from "../fonts";

export default function ContactMe() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    setIsFormValid(form.checkValidity());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      const formData = new FormData(form);
      fetch("https://formspree.io/f/mjkyzbzk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            setIsSubmitted(true);
            form.reset();
            setIsFormValid(false);
          }
        })
        .catch((err) => {
          console.error("Form submission error:", err);
        });
    }
  };

  // Auto-dismiss alert after 3 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000);
      return () => clearTimeout(timer); // cleanup
    }
  }, [isSubmitted]);

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center px-4"
      style={{ backgroundImage: "url('/images/waves.gif')" }}
    >
      <div className="bg-black/60 p-8 rounded-2xl shadow-lg max-w-xl w-full">
        {isSubmitted && (
          <div
            role="alert"
            className="alert alert-success mb-6 transition-opacity duration-500 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Thanks for reaching out! I’ll get back to you soon 😊</span>
          </div>
        )}

        <h1 className={`${brillant.className} text-3xl font-bold text-center mb-4`}>💌 Get in Touch</h1>
        <p className="text-center text-gray-300 mb-6">
          Whether you have a question, want to collaborate, or just want to say hi — my inbox is open!
        </p>

        <form
          onInput={handleInputChange}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-black/50 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-black/50 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-black/50 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-md font-semibold"
            disabled={!isFormValid}
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          Prefer socials? You can find me at the footer 👇
        </p>
      </div>
    </section>
  );
}
