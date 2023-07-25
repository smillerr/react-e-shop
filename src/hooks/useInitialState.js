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
const initialUserLS = () => {
  const userInLocalStorage = localStorage.getItem("user");
  let parsedUser;
  if (!userInLocalStorage) {
    localStorage.setItem("user", JSON.stringify({}));
    parsedUser = {};
  } else {
    parsedUser = JSON.parse(userInLocalStorage);
  }
  return parsedUser;
};
const initalLoginStatusLS = () => {
  const isLoggedInLocalStorage = localStorage.getItem("isLogged");
  let parsedLogged;
  if (!isLoggedInLocalStorage) {
    localStorage.setItem("isLogged", JSON.stringify(false));
    parsedLogged = false;
  } else {
    parsedLogged = JSON.parse(isLoggedInLocalStorage);
  }
  return parsedLogged;
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
  const [user, setUser] = useState(initialUserLS);
  const [isLogged, setIsLogged] = useState(initalLoginStatusLS);
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
    user,
    isLogged,
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
    setUser,
    setIsLogged,
  };
}

export { useInitialState };
