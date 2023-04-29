import '@styles/ProductCard.scss';
import { ProductInfo } from '@components/ProductInfo';
function ProductCard( {product} ){
    return(
        <div className="ProductCard">
            <ProductInfo title={product?.title} price={product?.price} image={product?.images[1]} parent="Product Card" />
        </div>
    )
}

export {ProductCard};