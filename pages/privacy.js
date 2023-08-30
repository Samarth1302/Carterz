import Head from "next/head";

export default function Privacy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Privacy Policy - Carterz</title>
        <meta
          name="keywords"
          content="e-commerce, shopping, online shopping, Carterz"
        />
      </Head>

      <header className="bg-blue-600 py-4 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Carterz! At Carterz, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and disclose your personal
            information when you use our services.
          </p>
        </section>
        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <p>
            We collect various types of information, including personal
            information, when you use our website. This information may include
            your name, email address, shipping address, payment information, and
            more. We collect this information for the purpose of providing and
            improving our services.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>
            We use the information we collect for various purposes, including
            processing orders, communicating with you, improving our services,
            and ensuring the security of your account. We may also use your
            information for marketing purposes, but only with your consent.
          </p>
        </section>
      </main>
    </div>
  );
}
