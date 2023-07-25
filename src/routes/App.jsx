import React, { useContext } from "react";
//Styles
import "@styles/global.scss";
//Router
import {
  BrowserRouter,
  Routes,
  Route,
  NavigationType,
  Navigate,
} from "react-router-dom";
//Containers
import { Layout } from "@containers/Layout";
//Pages
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { SetNewPwd } from "@pages/SetNewPwd";
import { RecoveryPwd } from "@pages/RecoveryPwd";
import { NotFound } from "@pages/NotFound";
//Context
import { AppContext } from "../context/AppContext";
//Hooks
import { useInitialState } from "../hooks/useInitialState";
import MyOrders from "../pages/MyOrders";
import MyOrderContent from "../components/MyOrderContent";

function App() {
  const appInitialState = useInitialState();
  const routesVisibility = () => {
    const { isLogged, user } = useContext(AppContext);
    if (
      isLogged &&
      user !== {} &&
      localStorage.getItem("user") !== {} &&
      localStorage.getItem("isLogged") === true
    ) {
      return true;
    } else {
      return false;
    }
  };
  const userAccessAllowed = routesVisibility();
  return (
    <AppContext.Provider value={appInitialState}>
      <BrowserRouter>
        {" "}
        {/*This is where our app will be wrapped*/}
        <Layout>
          {" "}
          {/*The template that we are using to wrap all of our containers*/}
          <Routes>
            {" "}
            {/*This is for every single one of our routes that we will be using throught the app*/}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recovery-password" element={<RecoveryPwd />} />
            <Route path="/new-password" element={<SetNewPwd />} />{" "}
            {/*A single route that represents a part of our applicattion, for example the form 'Forgot my password'*/}
            <Route
              path="/my-orders"
              element={
                userAccessAllowed ? (
                  <MyOrders />
                ) : (
                  <Navigate replace to={"/login"} />
                )
              }
            />
            <Route
              path="/my-orders/:orderIndex"
              element={
                userAccessAllowed ? (
                  <MyOrderContent />
                ) : (
                  <Navigate replace to={"/login"} />
                )
              }
            />{" "}
            {/*A single route that represents a part of our applicattion, for example the form 'Forgot my password'*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export { App };
