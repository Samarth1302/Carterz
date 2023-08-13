import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carterz</title>
        <meta name="description" content="Carterz E-Commerce Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col items-center">
        <Image src="/home.png" alt="Home" width={800} height={550} />
        <a
          href="https://www.freepik.com/free-vector/ecommerce-checkout-laptop-concept-illustration_21726897.htm#query=e%20commerce&position=24&from_view=keyword&track=ais"
          className="mt-1 text-xs text-gray-400"
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
              <div className=" bg-green-50 border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black-100 text-black-500 mb-4">
                  <svg
                    fill="none"
                    stroke="#22c55eff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Luxe Haven
                </h2>
                <p className="leading-relaxed text-base">
                  Elevate your lifestyle with LuxeHaven's exquisite collection
                  of premium fashion. Discover elegance and comfort combined.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="  bg-green-50 border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black-100 text-black-500 mb-4">
                  <svg
                    fill="none"
                    stroke="#22c55eff"
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
                  Unveil a universe of fashion possibilities. From trendy street
                  styles to chic evening ensembles, find your star-studded look.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="  bg-green-50 border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black-100 text-black-500 mb-4">
                  <svg
                    fill="none"
                    stroke="#22c55eff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Tech Fusion
                </h2>
                <p className="leading-relaxed text-base">
                  Dive into the world of innovation with TechFusion's futuristic
                  clothing line. Seamlessly merge fashion with your everyday
                  life.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="  bg-green-50 border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black-100 text-black-500 mb-4">
                  <svg
                    fill="none"
                    stroke="#22c55eff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Wanderlust Wares
                </h2>
                <p className="leading-relaxed text-base">
                  Embark on a journey of discovery, explore a curated collection
                  of dressing essentials that inspire adventure.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="  bg-green-50 border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black-100 text-black-500 mb-4">
                  <svg
                    fill="none"
                    stroke="#22c55eff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Zen Zone
                </h2>
                <p className="leading-relaxed text-base">
                  Find tranquility in the chaos with ZenZone's mindfulness
                  products. Create your serene haven at home.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="  bg-green-50 border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black-100 text-black-500 mb-4">
                  <svg
                    fill="none"
                    stroke="#22c55eff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Eco Vibe
                </h2>
                <p className="leading-relaxed text-base">
                  Embrace sustainability in style with EcoVibe. Discover
                  eco-friendly fashion products that resonate with your values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
