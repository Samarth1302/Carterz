import Head from "next/head";
import React, { useState } from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About Us - Carterz</title>
        <meta
          name="keywords"
          content="e-commerce, shopping, online shopping, Carterz"
        />
      </Head>
      <header className="bg-blue-800 py-4 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-white">About Us</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <section className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold">1. Our Story</h2>
          <p>
            At Carterz, our journey began with a passion for providing quality
            products and exceptional customer service. Founded in 2023, we've
            since grown into a trusted online marketplace, serving customers
            worldwide.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">2. Our Mission</h2>
          <p>
            Our mission is to provide quality and value for money. We are
            committed to environmental friendly products.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">3. Meet Our Team</h2>
          <p>
            Behind Carterz is a dedicated team of professionals who are
            passionate about what they do. Our team members bring a wealth of
            experience and expertise to ensure your shopping experience is
            exceptional.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
