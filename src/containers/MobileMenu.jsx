import { FilterCategory } from "@components/FilterCategory";
import "@styles/MobileMenu.scss";
import MyOrdersLink from "../components/MyOrdersLink";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SignInButton from "../components/SignInButton";
function MobileMenu({ isHome }) {
  const { setIsLogged } = useContext(AppContext);
  const handleSignIn = () => {
    const stringifiedLogIn = JSON.stringify(true);
    localStorage.setItem("isLogged", stringifiedLogIn);
    setIsLogged(true);
  };
  const { isLogged } = useContext(AppContext);
  return (
    <div className="MobileMenu inactive">
      {isHome && (
        <div className="MobileMenuList">
          <ul className="Categories">
            <li>
              <a> CATEGORIES </a>
            </li>
            <FilterCategory categoryName="All" categoryID={0} />
            <FilterCategory categoryName="Clothes" categoryID={1} />
            <FilterCategory categoryName="Electronics" categoryID={2} />
            <FilterCategory categoryName="Furniture" categoryID={3} />
            <FilterCategory categoryName="Toys" categoryID={4} />
            <FilterCategory categoryName="Others" categoryID={5} />
          </ul>
        </div>
      )}
      <div className="other-info-list">
        <ul className="primary-list">
          <MyOrdersLink>
            <li className="categories-item">My orders</li>
          </MyOrdersLink>
          <li className="categories-item">
            <a href="/"> My account </a>
          </li>
        </ul>
      </div>
      <div className="my-info">
        <ul className="primary-list">
          {!isLogged ? (
            <>
            <p> Yoooo what up </p>
            <SignInButton handleSignIn={handleSignIn} />
            </>
          ) : (
            <>
              <li className="categories-item">
                <a href="/"> example@somedomain.com </a>
              </li>
              <li className="categories-item">
                <a href="/" id="sign-out">
                  {" "}
                  Sign out{" "}
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export { MobileMenu };
