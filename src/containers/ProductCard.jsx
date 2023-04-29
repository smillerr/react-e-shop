import '@styles/ProductCard.scss';
import { ProductInfo } from '@components/ProductInfo';
function ProductCard( {product} ){
    return(
        <div className="ProductCard">
            <ProductInfo product={product} parent="Product Card" />
        </div>
    )
}

export {ProductCard};