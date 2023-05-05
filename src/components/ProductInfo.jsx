import { useState , useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '@styles/ProductInfo.scss';
import addToCart from '@images/bt_add_to_cart.svg';
import addedToCart from '@images/bt_added_to_cart.svg';

function ProductInfo( { product , parent } ){
    const isChildrenOf = parent;
    const {appState} = useContext(AppContext);
    const {addProductToCart} = useContext(AppContext);
    //This is our context, which contains the cart of the products that we have added to the cart, this is useful because when we want to render our shopping cart
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

        const handleCart = (item) => {
            addProductToCart(item);
        }
        return (
            <>
                <img className="ProductImage" src={product.images[0]}/>
                <div className="ProductDescriptionContainer">
                    <div className='ProductDescription'>
                        <p className="ProductName"> {product.title} </p>
                        <p className='ProductPrice'> {`$${product.price}.00`} </p>
                    </div>
                    <figure className="PurchaseProduct" onClick={() => handleCart(product)}>
                        <img src={!appState.cart.includes(product) ? addToCart : addedToCart} alt="Purchase Item Button" />
                    </figure>
                </div>
                
            </>
        )
    }
}


export {ProductInfo};