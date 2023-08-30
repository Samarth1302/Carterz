import Head from "next/head";

export default function Return() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Return Policy - Carterz</title>
        <meta
          name="keywords"
          content="e-commerce, shopping, online shopping, Carterz"
        />
      </Head>

      <header className="bg-blue-600 py-4 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-white">Return Policy</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold">1. Returns</h2>
          <p>
            We accept returns within 30 days of the original purchase date. To
            be eligible for a return, your item must be unused and in the same
            condition that you received it. It must also be in the original
            packaging.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">2. Refunds</h2>
          <p>
            Once we receive your item, we will inspect it and notify you that we
            have received your returned item. We will immediately notify you on
            the status of your refund after inspecting the item.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold">3. Shipping</h2>
          <p>
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are non-refundable. If you
            receive a refund, the cost of return shipping will be deducted from
            your refund.
          </p>
        </section>
      </main>
    </div>
  );
}
