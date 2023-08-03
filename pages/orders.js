import React, { useEffect, useState } from "react";
import Order from "@/models/Order";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import Link from "next/link";

const Orders = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Myorders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("token") }),
      });
      let res = await a.json();
      setOrders(res.orders);
    };
    if (!localStorage.getItem("token")) {
      router.push("/");
    } else {
      fetchOrders();
    }
  });

  return (
    <div>
      <h1 className="font-semibold text-center text-xl p-8">My Orders</h1>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto px-8 sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full  sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left">
                  <thead className="bg-white border-b font-medium">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item) => {
                      return (
                        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {item.orderId}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.amount}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href={"/order?id=" + item._id} legacyBehavior>
                              <a>Details</a>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
