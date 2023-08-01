import React from "react";
import { useContext, useEffect, useState } from "react";

import { AppContext } from "../context/AppContext";
import { ShoppingCartItem } from "@components/ShoppingCartItem";
import calculateTotal from "../utils/calculateTotal";
import "@styles/ShoppingCart.scss";
import flechita from "@images/flechita.svg";
import { useNavigate } from "react-router-dom";
import getOrderIndex from "../utils/getOrderIndex";
import { currentDate } from "../utils/getTodayDate";

function ShoppingCart() {
  const {
    appState,
    removeProductFromCart,
    clearShoppingCart,
    closeShoppingCart,
    user,
    orders,
    newOrder,
    newOrderInList,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [lastOrder, setLastOrder] = useState({})
  const handleRemove = (item) => {
    removeProductFromCart(item);
  };
  const handleClose = () => {
    closeShoppingCart();
  };
  const handleCheckout = (payload) => {
    if (appState.cart.length !== 0) {
      const orderToAdd = {
        products: payload,
        date: currentDate(),
        totalOrder: calculateTotal(payload),
      };
      newOrderInList(orderToAdd);
      newOrder(orderToAdd);
      setShouldRedirect(true)
      setLastOrder(orderToAdd);
      closeShoppingCart();
      clearShoppingCart();
    }
  };
  useEffect(() => {
    if (shouldRedirect) {
      if (Object.keys(user).length !== 0) {
        localStorage.setItem("orders", JSON.stringify(orders));
      }
      const currentOrder = getOrderIndex(orders, lastOrder);
      navigate(`/my-orders/${currentOrder}`);
    }
    return () => {
      setLastOrder({})
      setShouldRedirect(false)
    }
  }, [orders])

  return (
    <>
      {appState.isCartOpen ? (
        <aside className="my-shopping-cart">
          <nav className="nav-bar-shopping-cart">
            <img src={flechita} alt="Close cart icon" onClick={handleClose} />
            <div>
              <p> Shopping Cart </p>
            </div>
          </nav>
          <div className="shopping-cart-container">
            <div
              className="shopping-cart-products-container"
              style={{ paddingRight: "1rem" }}
            >
              {/* Here goes our product of our shopping cart */}
              {appState.cart.map((product, index) => {
                return (
                  <ShoppingCartItem
                    product={product}
                    removeProductFromCart={handleRemove}
                    key={`cartItem-${index}-${product.id}`}
                    index={index}
                  />
                );
              })}
            </div>
            <div className="shopping-cart-info">
              {appState.cart.length == 0 ? (
                <p id="shopping-cart-info-description"> Your car is empty</p>
              ) : (
                <>
                  <p id="shopping-cart-info-description"> Total</p>
                  <p id="total-value">{calculateTotal(appState.cart)}</p>
                </>
              )}
            </div>

            <button
              type="button"
              className="primary-button checkout-button"
              onClick={() => {
                handleCheckout(appState.cart)
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}

export { ShoppingCart };
