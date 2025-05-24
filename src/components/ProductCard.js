import React  from "react";
const ProductCard =({product})=>{
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Price:${product.price}</p>
            <p>Category: ${product.category}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;