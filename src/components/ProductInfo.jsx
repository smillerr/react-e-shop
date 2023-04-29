import '@styles/ProductInfo.scss';
import addToCart from '@images/bt_add_to_cart.svg';
import { useState } from 'react';
function ProductInfo( {title, price, image, description, parent } ){
    const isChildrenOf = parent;

    if(isChildrenOf==="Product Detail"){
        return(
            <>
            <img className="ProductInfoImage"src="https://picsum.photos/200/300" alt="Selected product image" />
            <div className="ProductInfo">
                <p> $12.00</p>
                <p> Flowers bouquet </p>
                <p> {description} </p>
            </div>
            </>
        )
    }
    else if(isChildrenOf==="Product Card"){
        const [cart, setCart] = useState([]);

        const handleCart = () => {
            setCart([])
        }
        return (
            <>
                <img className="ProductImage" src={image}/>
                <div className="ProductDescriptionContainer">
                    <div className='ProductDescription'>
                        <p className="ProductName"> {title} </p>
                        <p className='ProductPrice'> {`$${price}.00`} </p>
                    </div>
                    <figure className="PurchaseProduct"onClick={handleCart}>
                        <img src={addToCart} alt="Purchase Item Button" />
                    </figure>
                </div>
                
            </>
        )
    }
}


export {ProductInfo};