import React from 'react';
import {productSelector} from '../Redux/productSlice.js';
import { useSelector } from "react-redux";
import './Product.css';
const Product = () => {
    const products = useSelector(productSelector);
    console.log("products",products);
    return (
        <div className="product-container">
            {products.map(product =>(<div>
                {product.name}
                {product.price}
                <img src={product.image} className="img-responsive"/>
            </div>))}
        </div>
    );
}

export default Product;
