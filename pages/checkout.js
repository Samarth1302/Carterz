import React, { useState } from "react";
import Link from "next/link";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = ({ cart, clearCart, addtoCart, removefromCart, total }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [disable, setDisable] = useState(true);

  const handleChange = async (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "pincode") {
      setPincode(e.target.value);
      if (e.target.value.length == 6) {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        let pinJson = await pins.json();
        if (Object.keys(pinJson).includes(e.target.value)) {
          setCity(pinJson[e.target.value][0]);
          setState(pinJson[e.target.value][1]);
        } else {
          setCity("");
          setState("");
        }
      } else {
        setCity("");
        setState("");
      }
    }
    setTimeout(() => {
      if (
        name.length > 3 &&
        email.length > 3 &&
        phone.length > 3 &&
        address.length > 3 &&
        pincode.length > 3
      ) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }, 100);
  };

  const initPayment = async () => {
    let oid = Math.floor(Math.random() * Date.now());
    const data = {
      cart,
      total,
      oid,
      email: email,
      name,
      address,
      pincode,
      phone,
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let txnRes = await a.json();
    if (txnRes.success) {
      let txnToken = txnRes.txnToken;
      var config = {
        root: "",
        flow: "DEFAULT",
        data: {
          orderId: oid /* update order id */,
          token: txnToken /* update token value */,
          tokenType: "TXN_TOKEN",
          amount: total /* update amount */,
        },
        handler: {
          notifyMerchant: function (eventName, data) {
            console.log("notifyMerchant handler function called");
            console.log("eventName => ", eventName);
            console.log("data => ", data);
          },
        },
      };

      window.Paytm.CheckoutJS.init(config)
        .then(function onSuccess() {
          window.Paytm.CheckoutJS.invoke();
        })
        .catch(function onError(error) {
          console.log("error => ", error);
        });
    } else {
      toast.error(txnRes.error, {
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

  return (
    <div className="container px-2 sm:m-auto">
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
      />
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              onChange={handleChange}
              value={name}
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={handleChange}
              value={email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            value={address}
            onChange={handleChange}
            id="address"
            name="address"
            cols="10"
            rows="2"
            placeholder="Type your full address"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone number
            </label>
            <input
              onChange={handleChange}
              value={phone}
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              onChange={handleChange}
              value={pincode}
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              value={state}
              onChange={handleChange}
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              value={city}
              onChange={handleChange}
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <h2 className="font-semibold text-xl">2. Review Cart and Pay</h2>
      <div className=" sidecart bg-green-200 p-6 m-2">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">Your cart is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="font-semibold mx-4">
                    {cart[k].iName} ({cart[k].size}/{cart[k].type})
                  </div>
                  <div className="flex items-center font-semibold justify-center w-1/3 text-lg">
                    <AiOutlineMinusCircle
                      onClick={() => {
                        removefromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].iName,
                          cart[k].size,
                          cart[k].type
                        );
                      }}
                      className="cursor-pointer"
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiOutlinePlusCircle
                      onClick={() => {
                        addtoCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].iName,
                          cart[k].size,
                          cart[k].type
                        );
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className="total font-bold">SubTotal: ₹{total}</span>
      </div>
      <div className="mx-4">
        <Link href={"/checkout"} legacyBehavior>
          <button
            disabled={disable}
            // onClick={initPayment}
            className="disabled:bg-green-300 flex mr-2  text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm"
          >
            Pay ₹{total}
          </button>
        </Link>
        <p className="text-xs text-red-500">Currently not accepting payment</p>
      </div>
    </div>
  );
};

export default Checkout;
