import React from "react";
import { useState } from "react";
//Setting the inital state of our app, that we are going to share with all the components
const initialState = {
  cart: [],
  isCartOpen: false,
  isAsideOpen: false,
  filterCategoryID: 0,
  order: {},
};

//Custom hook to handle our inital state
function useInitialState() {
  //Initial state of the app
  const [appState, setAppState] = useState(initialState);
  const [productToShow, setProductToShow] = useState({});
  const [filteredUrl, setFilteredUrl] = useState(
    `https://api.escuelajs.co/api/v1/products`
  );
  const [orders, setOrders] = useState([]);

  const addProductToCart = (payload) => {
    setAppState({
      ...appState,
      cart: [...appState.cart, payload],
    });
  };

  const removeProductFromCart = (indexOfProduct) => {
    const newCart = appState.cart.filter(
      (_, index) => index !== indexOfProduct
    );
    setAppState({
      ...appState,
      cart: [...newCart],
    });
  };
  const clearShoppingCart = () => {
    setAppState({
      ...appState,
      cart: [],
    });
  };
  const openShoppingCart = () => {
    setAppState({
      ...appState,
      isCartOpen: true,
    });
  };

  const closeShoppingCart = () => {
    setAppState({
      ...appState,
      isCartOpen: false,
    });
  };

  const showProduct = (payload) => {
    setProductToShow(payload);
  };

  const openAside = () => {
    setAppState({
      ...appState,
      isAsideOpen: true,
    });
  };

  const closeAside = () => {
    setAppState({
      ...appState,
      isAsideOpen: false,
    });
  };

  const filterByCategory = (categoryID) => {
    if (categoryID !== 0) {
      setAppState({
        ...appState,
        filterCategoryID: categoryID,
      });
      setFilteredUrl(
        `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryID}`
      );
    } else {
      setFilteredUrl(`https://api.escuelajs.co/api/v1/products`);
    }
  };
  const newOrder = (payload) => {
    setAppState({
      ...appState,
      order: payload,
    });
  };
  const newOrderInList = (content) => {
    setOrders([...orders, content]);
  };
  return {
    appState,
    productToShow,
    filteredUrl,
    orders,
    addProductToCart,
    removeProductFromCart,
    clearShoppingCart,
    openShoppingCart,
    closeShoppingCart,
    openAside,
    showProduct,
    closeAside,
    filterByCategory,
    newOrder,
    newOrderInList,
  };
}

export { useInitialState };
