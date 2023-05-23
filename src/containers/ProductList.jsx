import '@styles/ProductList.scss';
import { useGetProducts } from '@hooks/useGetProducts';
import { ProductCard } from "./ProductCard";
import { ProductDetailAside } from './ProductDetailAside';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';




function ProductList( {} ){
    const {filteredUrl} = useContext(AppContext);
    const products = useGetProducts(filteredUrl);
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