import { useState , useEffect } from "react";
import axios from 'axios';

function useGetProducts(urlAPI){
    const [products , setProducts] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await axios(urlAPI);
            setProducts(response.data);
        }
        fetchData();
    },[])
    return products
}


export {useGetProducts}