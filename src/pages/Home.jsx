import React from "react";
import { NavBar } from "@components/NavBar";
import { ProductDetailAside } from "@containers/ProductDetailAside";
import { ProductList } from "@containers/ProductList";
import { DesktopMenu } from "@containers/DesktopMenu";
import { MobileMenu } from "@containers/MobileMenu";
function Home(){
    return(
        <>
            <NavBar />
            <ProductList />
            {/* <ProductDetailAside /> */}
            {/* <DesktopMenu /> */}
            {/* <MobileMenu /> */}
        </>
    );
}

export {Home}; 
