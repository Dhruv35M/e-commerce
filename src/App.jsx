import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {
  const jwtToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(null);

  const fetchUserDetails = async () => {
    const responseData = await fetch(
      `${SummaryApi.currentUser.url}/${userId}`,
      {
        method: SummaryApi.currentUser.method,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const dataApi = await responseData.json();
    console.log("user: ", dataApi);

    if (dataApi) {
      dispatch(setUserDetails(dataApi));
    }
  };

  const fetchUserAddToCart = async () => {
    try {
      const cartId = 123;
      const responseData = await fetch(
        `${SummaryApi.addToCart.url}/${cartId}/products/${productId}/quantity/${quantity}`,
        {
          method: SummaryApi.addToCartProductCount.method,
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const dataApi = await responseData.json();
      setCartProductCount(dataApi?.data?.count ?? 0);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
    fetchUserAddToCart();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails,
          cartProductCount,
          fetchUserAddToCart,
        }}
      >
        <ToastContainer position="top-center" />

        <Header />
        <main className="min-h-[calc(100vh-120px)] pt-16">
          <Outlet />
          {cartProductCount > 0 && (
            <span className="cart-count">{cartProductCount}</span>
          )}
          {cartProductCount === 0 && (
            <p className="cart-empty">Your cart is empty.</p>
          )}
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
