import { useState } from "react";
//Setting the inital state of our app, that we are going to share with all the components
const initialState = {
    cart: [],
    isCartOpen: false,
    isAsideOpen: false,
}


//Custom hook to handle our inital state 
function useInitialState(){
    //Initial state of the app
    const [appState, setAppState] = useState(initialState);
    const [productToShow, setProductToShow] = useState({})
    
    const addProductToCart = (payload) => {
        setAppState({
            ...appState,
            cart: [...appState.cart, payload]
        });
    };

    const removeProductFromCart = (indexOfProduct) =>{
		const newCart = appState.cart.filter((products,index) => index !== indexOfProduct);
		setAppState({
			...appState,
			cart: [...newCart]
		});
	}

    const openShoppingCart = () =>{
        setAppState({
            ...appState ,
            isCartOpen: true,
        })
    }

    const closeShoppingCart = () =>{
        setAppState({
            ...appState ,
            isCartOpen: false,
        })
    }

    const showProduct = (payload) =>{
        setProductToShow(payload)
    }

    const openAside = () => {
        setAppState({
            ...appState,
            isAsideOpen: true,
        })
    }

    const closeAside = () => {
        setAppState({
            ...appState,
            isAsideOpen: false,
        })
    }


    return {appState , productToShow, addProductToCart, removeProductFromCart, openShoppingCart, closeShoppingCart, openAside, showProduct, closeAside}
}

export {useInitialState};