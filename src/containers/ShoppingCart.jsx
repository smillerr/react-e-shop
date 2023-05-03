import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ShoppingCartItem } from '@components/ShoppingCartItem';
import '@styles/ShoppingCart.scss';
import flechita from '@images/flechita.svg';

function ShoppingCart(){
    const {appState} = useContext(AppContext);
    return (
        <aside className="my-shopping-cart inactive"> 
            <nav className="nav-bar-shopping-cart"> 
                <img src={flechita} alt="Menu" />
                <div>
                    <p> Shopping Cart </p>
                </div>
            </nav>
            <div className="shopping-cart-container">
                <div className="shopping-cart-products-container">
                    {/* Here goes our product of our shopping cart */}
                    {appState.cart.map(product => {
                    return <ShoppingCartItem name={product.title} price={product.price} image={product.images[0]} />;
                    })}
                </div>
                <div className="shopping-cart-info"> 
                    <p id="shopping-cart-info-description"> 
                        Your car is empty
                    </p>
                    <p id="total-value"> $0.00 </p>
                </div>
                <button className="primary-button checkout-button"> Checkout </button>
            </div>
        </aside>
    );
}

export {ShoppingCart};