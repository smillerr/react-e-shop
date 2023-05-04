import { useState } from "react";
//Setting the inital state of our app, that we are going to share with all the components
const initialState = {
    cart: [],
}
//Custom hook to handle our inital state 
function useInitialState(){
    //Initial state of the app
    const [appState, setAppState] = useState(initialState);
    
    const addProductToCart = (payload) => {
        setAppState({
            ...appState,
            cart: [...appState.cart, payload]
        });
    };

    const removeProductFromCart = (payload) =>{
		const newCart = appState.cart.filter(product => product != payload);
		setAppState({
			...appState,
			cart: [...newCart]
		});
	}

    return {appState , addProductToCart, removeProductFromCart}
}

export {useInitialState};