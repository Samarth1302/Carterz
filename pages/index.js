import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carterz</title>
        <meta
          name="description"
          content="Carterz E-Commerce Platform - Shop the Web using Carterz.  A cutting-edge ecommerce platform designed to redefine online shopping. Carterz seamlessly combines sleek design with robust functionality, offering users an intuitive interface to explore a diverse range of products. Our haven is designed to stretch your budget without compromising quality. Carterz ensures your cravings are met at lightning speed, with seamless deliveries."
        />
        <meta
          name="keywords"
          content="e-commerce, shopping, online shopping, Carterz, payments, cart, orders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col items-center">
        <Image
          src="/home.png"
          alt="Carterz -Ecommerce Platform Home"
          width={800}
          height={550}
        />
        <a
          href="https://www.freepik.com/free-vector/ecommerce-checkout-laptop-concept-illustration_21726897.htm#query=e%20commerce&position=24&from_view=keyword&track=ais"
          className="mt-1 text-xs text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Image by storyset on Freepik
        </a>{" "}
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Shop the Web using Carterz
            </h1>
            <h4 className=" sm:text-lg lg:w-1/2 w-full leading-relaxed text-gray-500">
              Shopping needs fulfilled using the web
            </h4>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-black-500 mb-4">
                  <svg
                    fill="none"
                    stroke="#4b5563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Stellar Wear
                </h2>
                <p className="leading-relaxed text-base">
                  Unveil a universe of possibilities. From trendy street styles
                  to chic evening ensembles, find your star-studded look.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-black-500 mb-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Value for money
                </h2>
                <p className="leading-relaxed text-base">
                  Unbox a smarter way to shop. Our haven is designed to stretch
                  your budget without compromising quality.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-black-500 mb-4">
                  <svg
                    stroke="#22c55eff"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Fast Delivery
                </h2>
                <p className="leading-relaxed text-base">
                  Get what you love, when you want it. Carterz ensures your
                  cravings are met at lightning speed, with seamless deliveries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
