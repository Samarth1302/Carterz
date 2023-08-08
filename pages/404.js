import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-4/5 mx-auto mt-20 mb-16 flex flex-col justify-center items-center space-y-4">
      <h1 className=" errhead text-red-600 text-3xl font-medium">
        404 - Page Not Found
      </h1>
      <Link
        className=" py-5 font-medium text-green-600 text-3xl hover:text-green-800"
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}
