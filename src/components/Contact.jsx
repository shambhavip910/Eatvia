import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", email: "", subject: "", message: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-red-100 to-white text-gray-900 px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-600 mb-3">Let’s Stay in Touch</h1>
        <p className="text-gray-600">
          Got feedback, a craving, or a collab idea? We’d love to hear from you!
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-lg p-10 gap-10 w-full max-w-5xl border border-red-100">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:w-1/2">
          <img
            src="https://ik.imagekit.io/hs2rog7qb/burgercartoon.png"
            alt="Eatvia illustration"
            className="w-52 drop-shadow-md"
          />
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">
              Contact Information
            </h2>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-red-500 text-xl">📧</span>
              <p className="text-gray-700">support@eatvia.com</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-red-500 text-xl">📞</span>
              <p className="text-gray-700">+91 90000 11111</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500 text-xl">📍</span>
              <p className="text-gray-700">Prayagraj, India</p>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col w-full md:w-1/2 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-200"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-600 text-center font-medium mt-2">
              ✅ Thank you for reaching out!
            </p>
          )}
        </form>
      </div>

      <footer className="text-center mt-10 text-red-600 font-semibold">
        <h2 className="text-xl">Eatvia — Taste Without The Wait</h2>
      </footer>
    </div>
  );
};

export default Contact;

