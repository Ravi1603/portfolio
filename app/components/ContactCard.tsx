import React, { useRef } from 'react';

const ContactCard = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    // Replace with your email
    const mailto = `mailto:ravirogannagari@email.com?subject=Portfolio Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    window.location.href = mailto;
  };

  return (
    <div className="bg-[#1e2633] p-6 rounded-2xl shadow-lg max-w-md mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-2 rounded bg-[#232b39] border border-gray-600 focus:outline-none text-lg"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full p-2 rounded bg-[#232b39] border border-gray-600 focus:outline-none text-lg"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={3}
          className="w-full p-2 rounded bg-[#232b39] border border-gray-600 focus:outline-none text-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition text-sm"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactCard;