import React from "react";
import logo from '@images/logo_yard_sale.svg';
import '@styles/ShopLogo.scss';
function ShopLogo(){
    return (
        <img src={logo} alt="Shop logo" className="logo"/>
    );
}

export {ShopLogo};