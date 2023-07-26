import "@styles/MyAccount.scss";
function MyAccount() {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title"> My account</h1>
        <form action="/" className="new-password-form">
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
              required
            />
            <label htmlFor="password" className="password">
              {" "}
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <input
            type="submit"
            className="primary-button edit-button"
            defaultValue="Create"
          />
        </form>
      </div>
    </div>
  );
}

export default MyAccount;
