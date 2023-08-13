import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpassword, setCPass] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("myUser")) {
      router.push("/");
    }
  }, []);

  const sendEmail = async () => {
    let data = { email, sendMail: true };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if (res.success) {
      toast.success("Reset instructions sent to your email", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Invalid user email", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const resetPassword = async () => {
    if (password == cpassword) {
      let data = { email, sendMail: false };
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res = await a.json();
      if (res.success) {
        toast.success("Successfully changed password", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Error while updating password", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  const handleChange = async (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPass(e.target.value);
    } else if (e.target.name == "cpassword") {
      setCPass(e.target.value);
    }
  };

  return (
    <div>
      <Head>
        <title>Forgot password - Carterz</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="bg-green-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Forgot your password
              </h1>
              {router.query.token && (
                <div>
                  <div className="my-4">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      New Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={password}
                      type="password"
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="*****"
                    />
                  </div>
                  <div className="my-4">
                    <label
                      htmlFor="cpassword"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm New Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={cpassword}
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="*****"
                    />
                  </div>
                  {password != cpassword && (
                    <span className=" my-4 text-red-500 text-sm">
                      Passwords do not match!!
                    </span>
                  )}
                  {password && password == cpassword && (
                    <span className="my-4 text-green-500 text-sm">
                      Yayy. Passwords matched
                    </span>
                  )}
                  <button
                    onC
                    lick={resetPassword}
                    type="submit"
                    className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 
        focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Continue
                  </button>
                  <p className="text-sm font-light text-gray-500 ">
                    Remember your password ?{" "}
                    <Link href="/login" legacyBehavior>
                      <a className="font-medium text-green-700 text-primary-600 hover:underline ">
                        Sign in
                      </a>
                    </Link>
                  </p>
                </div>
              )}
              {!router.query.token && (
                <div>
                  <div className="py-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      value={email}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>

                  <button
                    onClick={sendEmail}
                    type="submit"
                    className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 
        focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Continue
                  </button>
                  <p className=" py-4 text-sm font-light text-gray-500 ">
                    Remember your password ?{" "}
                    <Link href="/login" legacyBehavior>
                      <a className="font-medium text-green-700 text-primary-600 hover:underline ">
                        Sign in
                      </a>
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forget;
