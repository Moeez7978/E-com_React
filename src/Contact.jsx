import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>

      <div className="rounded-lg overflow-hidden shadow-lg mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.2141788102244!2d74.44636337507146!3d31.573174044532248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190fd45adc314d%3A0xdf0715ced147a1d!2sHajvery%20Housing%20Scheme%20Hajveri%20Housing%20Scheme%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1756194047103!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>

      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Leave Us a Message</h2>
        <form action="https://formspree.io/f/xnnbqdeg" method="POST" className="space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Enter Your Name"
            required
            autoComplete="off"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            autoComplete="off"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-4/12 ml-[33%] bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
