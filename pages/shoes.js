import React from "react";
import Link from "next/link";
import Product from "@/models/Product";
import mongoose from "mongoose";

const Shoes = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && (
              <p>Sorry all shoes are out of stock. Stay tuned..</p>
            )}
            {Object.keys(products).map((item) => {
              return (
                <Link
                  key={products[item]._id}
                  href={`/product/${products[item].slug}`}
                  legacyBehavior
                >
                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                    <a className="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto w-full block"
                        src={products[item].image}
                      />
                    </a>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Shoes
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">₹{products[item].price}</p>
                      <div className="mt-1">
                        {products[item].size.includes("S") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            S
                          </span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            M
                          </span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            L
                          </span>
                        )}
                        {products[item].size.includes("XL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XL
                          </span>
                        )}
                      </div>
                      <div className="mt-1">
                        {products[item].color.includes("black") && (
                          <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("white") && (
                          <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("red") && (
                          <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find({ category: "shoes" });
  let shoes = {};
  for (let item of products) {
    if (item.title in shoes) {
      if (
        !shoes[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        shoes[item.title].color.push(item.color);
      }
      if (
        !shoes[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        shoes[item.title].size.push(item.size);
      }
    } else {
      shoes[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        shoes[item.title].color = [item.color];
        shoes[item.title].size = [item.size];
      }
    }
  }
  return { props: { products: JSON.parse(JSON.stringify(shoes)) } };
}

export default Shoes;
