import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const router = useRouter();
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setTotal(subt);
  };

  const addtoCart = (itemId, qty, price, iName, size, type) => {
    let newCart = cart;
    if (itemId in cart) {
      newCart[itemId].qty += 1;
    } else {
      newCart[itemId] = { qty: 1, price, iName, size, type };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removefromCart = (itemId, qty, price, iName, size, type) => {
    let newCart = cart;
    if (itemId in cart) {
      newCart[itemId].qty -= 1;
    }
    if (newCart[itemId].qty <= 0) {
      delete newCart[itemId];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const buyNow = (itemId, qty, price, iName, size, type) => {
    let newCart = { itemId: { qty: 1, price, iName, size, type } };
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };

  return (
    <>
      <Navbar
        key={total}
        cart={cart}
        addtoCart={addtoCart}
        removefromCart={removefromCart}
        clearCart={clearCart}
        total={total}
      />

      <Component
        cart={cart}
        addtoCart={addtoCart}
        removefromCart={removefromCart}
        clearCart={clearCart}
        total={total}
        buyNow={buyNow}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
