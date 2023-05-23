import '@styles/NavBar.scss';
import logo from '@images/logo_yard_sale.svg';
import shoppingCartIcon from '@images/icon_shopping_cart.svg';
import shoppingCartFilled from '@images/icon_shopping_cart_notification.svg';
import menuIcon from '@images/icon_menu.svg';
import { FilterCategory } from './FilterCategory';
import { DesktopMenu } from '@containers/DesktopMenu';
import { MobileMenu } from '@containers/MobileMenu';
import { useState , useContext } from 'react';
import { AppContext } from '../context/AppContext';


function NavBar(){
    const {appState} = useContext(AppContext);
    const {openShoppingCart} = useContext(AppContext);
    const {closeShoppingCart} = useContext(AppContext);
    const {closeAside} = useContext(AppContext);

    const isCarEmpty = appState.cart.length;
    //Desktop Menu state
    const [toggleMenuDesktop , setToggleMenuDesktop] = useState(false);
    //Mobile Menu state
    const [toggleMenuMobile , setToggleMenuMobile] = useState(false);

    const handleOpenCart = () => {
        closeAside();
        openShoppingCart();
        setToggleMenuDesktop(false);
        setToggleMenuMobile(false);
    }
    const handleToggleMenuMobile = () => {
        closeShoppingCart();
        setToggleMenuMobile(!toggleMenuMobile);
        // In case user switches from a mobile view to a desktop view
        setToggleMenuDesktop(false);
    }

    const handleToggleMenuDesktop = () => {
        closeShoppingCart();
        setToggleMenuMobile(false);
        setToggleMenuDesktop(!toggleMenuDesktop);
    }
    return(
        <nav className="main-navbar"> 
            <img className="menu" src={menuIcon} alt="Menu" onClick={handleToggleMenuMobile}/>
            {toggleMenuMobile ? <MobileMenu /> : null} 
            <div className="navbar-left"> 
                <div>
                    <img src={logo} alt="Yard sale logo" />
                </div>
                <ul> 
                    <FilterCategory categoryName="All" categoryID={0} />
                    <FilterCategory categoryName="Electronics" categoryID={1} />
                    <FilterCategory categoryName="Clothes" categoryID={2} />
                    <FilterCategory categoryName="Furniture" categoryID={3} />
                    <FilterCategory categoryName="Toys" categoryID={4} />
                    <FilterCategory categoryName="Others" categoryID={5} />
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="nav-bar-email" onClick={handleToggleMenuDesktop}> 
                    someUser@example.com 
                    </li>
                    <li className="nav-bar-cart"> 
                        <img src={isCarEmpty==0 ? shoppingCartIcon : shoppingCartFilled} alt="Cart notification" id="nav-bar-cart-icon" onClick={handleOpenCart} />
                    </li> 
                </ul>
            </div>
            {toggleMenuDesktop ? <DesktopMenu /> : null}
        </nav>

    )
}

export {NavBar};