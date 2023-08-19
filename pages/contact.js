import Head from "next/head";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Contact Us - Carterz</title>
      </Head>

      <header className="bg-green-700 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-white">Contact Us</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold">1. Get in Touch</h2>
          <p>
            Have a question or feedback for us? We'd love to hear from you.
            Please feel free to contact us using the information below, and
            we'll get back to you as soon as possible.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">2. Contact Information</h2>
          <p>
            <strong>Email:</strong> info@carterz.com
          </p>
          <p>
            <strong>Phone:</strong> +91 1234567890
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, City, Country - PinCode
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">3. Contact Form</h2>
          <p>
            You can also reach us by filling out the contact form below. We'll
            respond to your message as soon as possible.
          </p>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                disabled={true}
                className="bg-green-500 hover:bg-green-700 disabled:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
