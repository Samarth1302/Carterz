import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-4/5 mx-auto mt-20 mb-24 flex flex-col justify-center items-center space-y-4">
      <h1 className=" text-red-600 text-4xl font-semibold">
        404 - Page Not Found
      </h1>
      <Link
        className="underline text-blue-600 hover:text-red-500 duration-300"
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}
