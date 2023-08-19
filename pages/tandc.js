import Head from "next/head";

export default function TAndC() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Terms and Conditions - Carterz</title>
      </Head>

      <header className="bg-blue-600 py-4 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-white">
            Terms and Conditions
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Carterz! These terms and conditions outline the rules and
            regulations for the use of our website. By accessing this website,
            we assume you accept these terms and conditions. Do not continue to
            use our website if you do not agree with the terms and conditions
            stated on this page.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">
            2. Intellectual Property Rights
          </h2>
          <p>
            Other than the content you own, under these terms, Carterz and/or
            its licensors own all the intellectual property rights and materials
            contained on this website. You are granted limited license only for
            purposes of viewing the material contained on this website.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">3. Restrictions</h2>
          <p>
            You are specifically restricted from all the following:
            <ul className="list-disc pl-6">
              <li>Publishing any website material in any other media.</li>
              <li>
                Selling, sublicensing, and/or otherwise commercializing any
                website material.
              </li>
              <li>Publicly performing and/or showing any website material.</li>
              <li>
                Using this website in any way that is, or may be, damaging to
                this website.
              </li>
              <li>
                Using this website in any way that impacts user access to this
                website.
              </li>
              <li>
                Using this website contrary to applicable laws and regulations,
                or in a way that causes, or may cause, harm to the website or to
                any person or business entity.
              </li>
            </ul>
          </p>
        </section>
      </main>
    </div>
  );
}
