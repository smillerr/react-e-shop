import { useState , useEffect} from "react";
import axios from 'axios';

function useGetProducts(urlAPI){
    const [products , setProducts] = useState([]);
    

    useEffect(() => {
        async function fetchData(){
            console.log("Fetching data...");
            const response = await axios(urlAPI);
            setProducts(response.data);
        }
        fetchData();
    },[urlAPI])
    return products
}


export {useGetProducts}