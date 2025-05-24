import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";

const ProductList = ()=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/api/products')
        .then(respose =>setProducts(respose.data) )
        .catch(error=>console.error("error in fetching the product: ",error))
    },[]);

    return (
        <div className="container">
            <h2>GymCart Products</h2>
            <div className="product-list">
                {products.map(product=>(
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>

        </div>
    );
}
export default ProductList;