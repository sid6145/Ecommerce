import React, { useEffect, useState } from 'react'
import Product from './product';
import './style.css'

function ProductInfo (props){
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/' + props.match.params.id)
        .then((res) => res.json())
        .then((json) => setProduct(json) )
    },[])


    return (
    <div className="card-container">
        <Product title={product.title} image={product.image} description={product.description} price={product.price}/>
    </div>
    )
}

export default ProductInfo;