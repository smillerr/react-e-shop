import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { ShoppingCartItem } from '@components/ShoppingCartItem';
import calculateTotal from '../utils/calculateTotal';
import '@styles/ShoppingCart.scss';
import flechita from '@images/flechita.svg';

function ShoppingCart(){
    const {appState} = useContext(AppContext);
    const {removeProductFromCart} = useContext(AppContext);
    const {closeShoppingCart} = useContext(AppContext);

    const handleRemove = (item) =>{
        removeProductFromCart(item);
    }
    const handleClose = () => {
        closeShoppingCart();
    }
    return (
        <>
        {appState.isCartOpen ? 
            <aside className="my-shopping-cart"> 
                <nav className="nav-bar-shopping-cart"> 
                    <img src={flechita} alt="Close cart icon" onClick={handleClose} />
                    <div>
                        <p> Shopping Cart </p>
                    </div>
                </nav>
                <div className="shopping-cart-container">
                    <div className="shopping-cart-products-container">
                        {/* Here goes our product of our shopping cart */}
                        {appState.cart.map((product , index) => {
                        return <ShoppingCartItem product={product} removeProductFromCart={handleRemove} key={`cartItem-${index}-${product.id}`} index={index}/>;
                        })}
                    </div>
                    <div className="shopping-cart-info">
                        {
                            appState.cart.length==0 ? 
                            <p id="shopping-cart-info-description">  Your car is empty
                            </p>
                            :
                            <>
                            <p id="shopping-cart-info-description">  Total
                            </p>
                            <p id="total-value"> 
                            {calculateTotal(appState.cart)}
                            </p>
                            </>
                            
                        }
                    </div>
                    <button className="primary-button checkout-button"> Checkout </button>
                </div>
            </aside>
            :
            null
        }
            
        </>
    );
}

export {ShoppingCart};