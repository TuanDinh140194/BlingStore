import React, { useState, useEffect } from "react";
import {
  Products,
  Navbar,
  Cart,
  Checkout,
  CenteredFooter,
  LandingPage,
} from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // New loading state variable

  const fetchProducts = async () => {
    setIsLoading(true);
    const { data } = await commerce.products.list();
    setProducts(data);
    setIsLoading(false);
  };

  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };
  const fetchCart = async () => {
    setIsLoading(true);
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching cart:", error);
    }
  };

  // const handleAddCart = async (productId, quantity) => {
  //   // const item = await commerce.cart.add(productId, quantity);
  //   // setCart(item.cart);
  //   await commerce.cart.add(productId, quantity);
  //   const updatedCart = await commerce.cart.retrieve();
  //   setCart({ ...updatedCart, totalItems: updatedCart.total_items });
  // };
  const handleAddCart = async (productId, quantity) => {
    try {
      await Promise.all([
        commerce.cart.add(productId, quantity),
        commerce.cart.retrieve(),
      ]);

      const updatedCart = await commerce.cart.retrieve();
      setCart({ ...updatedCart, totalItems: updatedCart.total_items });
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  };

  // const handleUpdateCartQty = async (productId, quantity) => {
  //   const {cart} = await commerce.cart.update(productId, { quantity });

  //   setCart(cart);
  // };
  const handleUpdateCartQty = async (productId, quantity) => {
    try {
      await commerce.cart.update(productId, { quantity });
      fetchCart();
    } catch (error) {
      console.log("Error updating cart:", error);
    }
  };

  // const handleRemoveFromCart = async (productId) => {
  //   const { cart } = await commerce.cart.remove(productId);
  //   setCart(cart);
  // };
  const handleRemoveFromCart = async (productId) => {
    try {
      await commerce.cart.remove(productId);
      fetchCart();
    } catch (error) {
      console.log("Error removing from cart:", error);
    }
  };

  // const handleEmptyCart = async () => {
  //   const { cart } = await commerce.cart.empty();
  //   setCart(cart);
  // };
  const handleEmptyCart = async () => {
    try {
      await commerce.cart.empty();
      fetchCart();
    } catch (error) {
      console.log("Error emptying cart:", error);
    }
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };
  // const refreshCart = async () => {
  //   try {
  //     await commerce.cart.refresh();
  //     fetchCart();
  //   } catch (error) {
  //     console.log("Error emptying cart:", error);
  //   }
  // };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
              exact
              path="/store"
              element={
                <>
                  {isLoading ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "calc(100vh - 64px)",
                      }}
                    >
                      <CircularProgress />
                    </div>
                  ) : (
                    <>
                      <Navbar totalItems={cart.total_items} />
                      <Products
                        products={products}
                        onAddToCart={handleAddCart}
                      />
                      <CenteredFooter />
                    </>
                  )}
                </>
              }
            />

            <Route
              exact
              path="/cart"
              element={
                <>
                  <Navbar totalItems={cart.total_items} />
                  <Cart
                    cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                  />
                  <CenteredFooter />
                </>
              }
            />

            <Route
              exact
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  order={order}
                  handleCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
