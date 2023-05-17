import '@styles/ProductList.scss';
import { useGetProducts } from '@hooks/useGetProducts';
import { ProductCard } from "./ProductCard";
import { ProductDetailAside } from './ProductDetailAside';


const API='https://api.escuelajs.co/api/v1/products';

function ProductList( {} ){
    const products = useGetProducts(API);
    return(
        <section className="ProductListContainer">
            <div className="ProductList">
                {products.map(product => {
                    return <ProductCard product={product} key={product.id} />;
                })}
            </div>
            <ProductDetailAside />
        </section>
    )
}

export {ProductList};