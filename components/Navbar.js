import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import {
  AiOutlineCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";

const Navbar = ({
  user,
  cart,
  addtoCart,
  removefromCart,
  clearCart,
  total,
  logout,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const router = useRouter();

  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true);
    let nonSide = [
      "/checkout",
      "/order",
      "/orders",
      "/",
      "/myaccount",
      "/return",
      "/privacy",
      "/about",
      "/contact",
      "/tandc",
    ];
    if (nonSide.includes(router.pathname)) {
      setSidebar(false);
    }
  }, []);

  const toggleCart = () => {
    setSidebar(!sidebar);
  };
  const ref = useRef();

  return (
    <>
      <span>
        {dropdown && (
          <div
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
            className="fixed right-11 bg-white shadow-lg border top-10 rounded-md px-5 w-32 py-2 z-20"
          >
            <ul className="text-xl ">
              <Link href={"/myaccount"}>
                <li className="py-1 text-sm hover:text-blue-600 font-bold">
                  My Account
                </li>{" "}
              </Link>
              <Link href={"/orders"}>
                <li className="py-1 text-sm hover:text-blue-600 font-bold">
                  Orders
                </li>
              </Link>

              <button>
                <li
                  onClick={logout}
                  className="py-1 text-sm hover:text-blue-600 font-bold"
                >
                  Logout
                </li>
              </button>
            </ul>
          </div>
        )}
      </span>
      <div
        className={`flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 z-10 bg-white ${
          !sidebar && "overflow-hidden"
        }`}
      >
        <div className="logo mx-2 mr-auto md:mx-2">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={100} height={40}></Image>
          </Link>
        </div>
        <div className="nav">
          <ul className="flex items-center mx-7 space-x-6 font-bold sm:text-base md:text-lg">
            <Link href={"/tshirts"}>
              <li className="hover:text-blue-500">Tshirts</li>
            </Link>
            <Link href={"/jackets"}>
              <li className="hover:text-blue-500">Jackets</li>
            </Link>
            <Link href={"/shoes"}>
              <li className="hover:text-blue-500">Shoes</li>
            </Link>
            <Link href={"/trousers"}>
              <li className="hover:text-blue-500">Trousers</li>
            </Link>
          </ul>
        </div>
        <div className="cart items-center cursor-pointer absolute right-0 top-4 mx-5 flex">
          <span
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
          >
            {user.value && (
              <MdAccountCircle className="text-xl mx-4 md:text-2xl" />
            )}
          </span>

          {!user.value && (
            <Link href={"/login"}>
              <button className="bg-blue-700 px-2 py-1 rounded-md text-sm text-white mx-4">
                Login
              </button>
            </Link>
          )}
          <BsCart2 onClick={toggleCart} className=" text-xl md:text-2xl" />
        </div>
        <div
          ref={ref}
          className={`w-60 h-[100vh] sidecart top-0 overflow-y-scroll absolute bg-blue-200 px-8 py-10 text-base transition-all ${
            sidebar ? "right-0" : "-right-96"
          } `}
        >
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl"
          >
            <AiOutlineCloseCircle style={{ color: "blue" }} />
          </span>
          <ol className="list-decimal font-semibold ">
            {Object.keys(cart).length == 0 && (
              <div className="my-4 font-semibold">Your cart is empty</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5 ">
                    <div className="w-2/3 font-semibold mx-4">
                      {cart[k].iName} ({cart[k].size}/{cart[k].type})
                    </div>
                    <div className="flex items-center font-semibold justify-center w-1/3 ">
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
                      <span className="mx-2 text-sm">{cart[k].qty}</span>
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
          <div className="flex my-4">
            <Link href={"/checkout"} legacyBehavior>
              <button
                disabled={Object.keys(cart).length === 0 || !user.value}
                className=" disabled:bg-blue-300 flex mr-2  text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm"
              >
                Checkout
              </button>
            </Link>
            <button
              disabled={Object.keys(cart).length === 0}
              onClick={clearCart}
              className="  disabled:bg-blue-300 flex text-white bg-blue-500 border-0 py-2 px-1 focus:outline-none hover:bg-blue-600 rounded text-sm"
            >
              Clear Cart
            </button>
          </div>
          {!user.value && (
            <span className="text-red-700 text-sm">
              Please login to buy a product
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
