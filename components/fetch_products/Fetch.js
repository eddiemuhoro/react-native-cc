import axios from "axios";
import { useEffect, useState } from "react";

//fetch data from the API
const Fetch = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

   
    
    useEffect(() => {
        const fetchProducts = async () => {
        try {
            // Set loading to true
            setLoading(true);
            // Clear errors
            setError(null);
            // Fetch data from the API
            const response = await axios.get(
            "https://usella.fly.dev/product"
            );
            // Set products
            setProducts(response.data);
        } catch (error) {
            // Set error
            setError(error.message);
        }
        // Set loading to false
        setLoading(false);
        };
        // Invoke the async function
        fetchProducts();
    }, []);

    const getProducts = () => {
        return products;
    };
    
    
    return { getProducts, loading, error };
    }


export  default Fetch