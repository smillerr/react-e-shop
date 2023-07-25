import "@styles/DesktopMenu.scss";
import MyOrdersLink from "../components/MyOrdersLink";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function DesktopMenu() {
  const { setIsLogged, setUser } = useContext(AppContext);
  const handleLogOut = () => {
    const stringifiedNoUser = JSON.stringify({});
    localStorage.setItem("user", stringifiedNoUser);
    const stringifiedLogOut = JSON.stringify(false);
    localStorage.setItem("isLogged", stringifiedLogOut);
    setIsLogged(false);
    setUser({});
  };
  return (
    <div className="DesktopMenu">
      <ul className="DesktopMenuList">
        <MyOrdersLink>
          <li>My orders</li>
        </MyOrdersLink>
        <li>
          <a href="/my-account" className="MyAccount">
            My account
          </a>
        </li>
        <li>
          <a href="/" onClick={handleLogOut}>
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}

export { DesktopMenu };
