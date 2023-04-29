import '@styles/NavBar.scss';
import logo from '@images/logo_yard_sale.svg';
import shoppingCartIcon from '@images/icon_shopping_cart.svg';
import menuIcon from '@images/icon_menu.svg';
import { FilterCategory } from './FilterCategory';
import { DesktopMenu } from '@containers/DesktopMenu';
import { MobileMenu } from '@containers/MobileMenu';
import { useState } from 'react';
function NavBar(){
    //Desktop Menu state
    const [toggleMenuDesktop , setToggleMenuDesktop] = useState(false);
    //Mobile Menu state
    const [toggleMenuMobile , setToggleMenuMobile] = useState(false);

    const handleToggleMenuMobile = () => {
        setToggleMenuMobile(!toggleMenuMobile);
        // In case user switches from a mobile view to a desktop view
        setToggleMenuDesktop(false);
    }

    const handleToggleMenuDesktop = () => {
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
                    <FilterCategory category="All" />
                    <FilterCategory category="Clothes" />
                    <FilterCategory category="Electronics" />
                    <FilterCategory category="Furniture" />
                    <FilterCategory category="Toys" />
                    <FilterCategory category="Others" />
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="nav-bar-email" onClick={handleToggleMenuDesktop}> 
                    someUser@example.com 
                    </li>
                    
                    <li className="nav-bar-cart"> 
                        <img src={shoppingCartIcon} alt="Cart notification" id="nav-bar-cart-icon" />
                    </li> 
                </ul>
            </div>
            {toggleMenuDesktop ? <DesktopMenu /> : null}
        </nav>

    )
}

export {NavBar};