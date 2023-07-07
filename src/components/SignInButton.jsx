import React from "react";
import { Link } from "react-router-dom";
import '@styles/SignInButton.scss'
const SingInButton = () => {
  return (
    <Link to={"/login"} className="mobile-invisible">
      <button
        type="text"
        style={{
          cursor: "pointer",
          color: "var(--hospital-green)",
          backgroundColor: "var(--white)",
          border: "none",
          height: "3rem",
          width: "100%",
        }}
      >
        {" "}
        Sign in{" "}
      </button>
    </Link>
  );
};

export default SingInButton;
