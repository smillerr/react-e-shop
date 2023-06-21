import "@styles/DesktopMenu.scss";
import MyOrdersLink from "../components/MyOrdersLink";
function DesktopMenu() {
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
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export { DesktopMenu };
