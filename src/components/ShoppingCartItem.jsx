import closeIcon from '@images/icon_close.png';
function ShoppingCartItem({ name , price , image}){
    return (
        <div className="product-item">
            <div className="product-info">
                <figure>
                    <img src={image} alt="Product in shopping cart"/>
                </figure>
                <p> {name} </p>
            </div>
            <div className="product-cancelled">
                <p className="shopping-cart-product-price"> {price} </p>
                <figure className="remove-from-shopping-cart">
                    <img src={closeIcon} alt="Remove product from cart icon"/>
                </figure>
            </div>
        </div>
    );
    
}

export { ShoppingCartItem };