import '@styles/ProductInfo.scss';
import addToCart from '@images/bt_add_to_cart.svg';
import { useState , useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ProductInfo( { product , parent } ){
    const isChildrenOf = parent;
    //Creating a product 
    if(isChildrenOf==="Product Detail"){
        return(
            <>
            <img className="ProductInfoImage" src={product.images[0]} alt="Selected product image" />
            <div className="ProductInfo">
                <p> {product.price}</p>
                <p> {product.title} </p>
                <p> {product.description} </p>
            </div>
            </>
        )
    }
    else if(isChildrenOf==="Product Card"){
        const {addProductToCart} = useContext(AppContext);

        const handleCart = (item) => {
            addProductToCart(item);
            console.log('Added')
        }
        return (
            <>
                <img className="ProductImage" src={product.images[0]}/>
                <div className="ProductDescriptionContainer">
                    <div className='ProductDescription'>
                        <p className="ProductName"> {product.title} </p>
                        <p className='ProductPrice'> {`$${product.price}.00`} </p>
                    </div>
                    <figure className="PurchaseProduct" onClick={()=> handleCart(product)}>
                        <img src={addToCart} alt="Purchase Item Button" />
                    </figure>
                </div>
                
            </>
        )
    }
}


export {ProductInfo};