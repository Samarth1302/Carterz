import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import {
  AiOutlineCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={100} height={40}></Image>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/jackets"}>
            <li>Jackets</li>
          </Link>
          <Link href={"/shoes"}>
            <li>Shoes</li>
          </Link>
          <Link href={"/trousers"}>
            <li>Trousers</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cart cursor-pointer absolute right-0 top-4 mx-5"
      >
        <BsCart2 className=" text-xl md:text-2xl " />
      </div>
      <div
        ref={ref}
        className="w-60 h-full sidecart absolute top-0 right-0 bg-green-200 px-8 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl"
        >
          <AiOutlineCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold mx-4">T-shirt - Carterz</div>
              <div className="flex items-center font-semibold justify-center w-1/3 text-lg">
                <AiOutlineMinusCircle className="cursor-pointer" />
                <span className="mx-2">1</span>
                <AiOutlinePlusCircle className="cursor-pointer" />
              </div>
            </div>
          </li>{" "}
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold mx-4">T-shirt - Carterz</div>
              <div className="flex items-center font-semibold justify-center w-1/3 text-lg">
                <AiOutlineMinusCircle className="cursor-pointer" />
                <span className="mx-2">1</span>
                <AiOutlinePlusCircle className="cursor-pointer" />
              </div>
            </div>
          </li>{" "}
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold mx-4">T-shirt - Carterz</div>
              <div className="flex items-center font-semibold justify-center w-1/3 text-lg">
                <AiOutlineMinusCircle className="cursor-pointer" />
                <span className="mx-2">1</span>
                <AiOutlinePlusCircle className="cursor-pointer" />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex flex-row items-center ">
          <button className="flex mr-2  text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm">
            Checkout
          </button>
          <button className="flex ml-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm">
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
