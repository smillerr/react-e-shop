import closeIcon from '@images/icon_close.png';

import '@styles/ShoppingCartItem.scss';

function ShoppingCartItem({ product, removeProductFromCart, index}){
    return (
        <div className="product-item">
            <div className="product-info">
                <figure>
                    <img src={product.images[0]} alt="Product in shopping cart"/>
                </figure>
                <p> {product.title} </p>
            </div>
            <div className="product-cancelled">
                <p className="shopping-cart-product-price"> {`$${product.price}.00`} </p>
                <figure className="remove-from-shopping-cart" onClick={() => removeProductFromCart(index)}>
                    <img src={closeIcon} alt="Remove product from cart icon"/>
                </figure>
            </div>
        </div>
    );
    
}

export { ShoppingCartItem };