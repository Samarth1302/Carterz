import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
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
      <div className="cart absolute right-0 top-4 mx-5">
        <BsCart2 className=" text-xl md:text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
