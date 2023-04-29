import closeIcon from '@images/icon_close.png';
import '@styles/ProductDetailAside.scss';
import addToCart from '@images/bt_add_to_cart.svg';
import { ProductInfo } from '@components/ProductInfo';
function ProductDetailAside(){
    return(
        <aside className="ProductDetailAside">
            <div className="ProductDetailAsideClose">
                <img src={closeIcon} alt="Close product detail icon" />
            </div>
            {<ProductInfo parent="Product Detail" />}
            <button className="primary-button add-to-cart-button">
                <img src={addToCart} alt="Add to cart" />
                Add to cart
            </button>
        </aside>
    );
}

export {ProductDetailAside};