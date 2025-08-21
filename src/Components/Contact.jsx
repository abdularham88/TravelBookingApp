import React from 'react'

function Contact() {
  return (
    <>
    <div className="min-h-screen bg-white text-black flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      {/* Google Map */}
      <div className="w-full max-w-4xl h-96 mb-10 shadow-lg rounded-lg overflow-hidden">
        <iframe
          title="Bangalore Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.38226559941!2d77.5945623!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670a0a0a0a1%3A0xa2e9b8e5f6d89d07!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1692553229084!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-2xl bg-gray-50 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 hover:bg-white hover:text-red-600 border border-red-600"
        >
          Send Message
        </button>
      </form>
    </div>


    </>
  )
}

export default Contact
