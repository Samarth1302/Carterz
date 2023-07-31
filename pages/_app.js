import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
    router.push("/");
  };
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
      <LoadingBar
        color="#22c55e"
        progress={progress}
        waitingTime={300}
        onLoaderFinished={() => setProgress(0)}
      />
      {/* {key && ( */}
      <Navbar
        user={user}
        key={key}
        cart={cart}
        addtoCart={addtoCart}
        removefromCart={removefromCart}
        clearCart={clearCart}
        total={total}
        logout={logout}
      />
      ) {/*}*/}
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
