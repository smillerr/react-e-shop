import { useContext, useRef } from "react";
import "@styles/Login.scss";
import { SecondaryButton } from "@components/SecondaryButton";
import { ShopLogo } from "@components/ShopLogo";
import { Link, Router, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Login() {
  const form = useRef(null);
  const router = useNavigate();
  const { setUser } = useContext(AppContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    setUser(data);
    const stringifiedUser = JSON.stringify(data);
    localStorage.setItem("user", stringifiedUser);
    router("/");
  };
  return (
    <div className="Login">
      <div className="Login-container">
        <ShopLogo />
        <form onSubmit={handleSubmit} className="login-form" ref={form}>
          <label htmlFor="email" className="email">
            {" "}
            Email address{" "}
          </label>
          <input
            type="email"
            name="email"
            placeholder="someone@example.com"
            className="input input-email"
            required
          />
          <label htmlFor="password" className="password">
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
            required
          />
          <input
            type="submit"
            className="primary-button logIn-button"
            value="Log in"
          />
          <a href="/recovery-password" className="forgot-password">
            Forgot my password
          </a>
        </form>
        <SecondaryButton text="Sign up" />
      </div>
    </div>
  );
}

export { Login };
