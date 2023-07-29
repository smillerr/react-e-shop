import "@styles/MyAccount.scss";
import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavBar } from "../components/NavBar";
function MyAccount() {
  const { user } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <NavBar />
      <div className="login">
        <div className="form-container">
          <h1 className="title"> My account</h1>
          <form onSubmit={handleSubmit} className="new-password-form">
            <div className="text-field">
              <label htmlFor="name" className="name">
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name here"
                className="input input-name"
                value={user.name ? user.name : ""}
                disabled={editStatus ? false : true}
              />
              <label htmlFor="email" className="email">
                {" "}
                Email address{" "}
              </label>
              <input
                type="email"
                id="email"
                placeholder="someone@example.com"
                className="input input-email"
                value={user.email}
                disabled={editStatus ? false : true}
                required
              />
              <label htmlFor="password" className="password">
                {" "}
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="*********"
                className="input input-password"
                value={user.password}
                disabled={editStatus ? false : true}
              />
            </div>
            <input
              type="submit"
              className="primary-button edit-button"
              value={editStatus ? "Save changes" : "Edit"}
              onClick={() => setEditStatus(!editStatus)}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
