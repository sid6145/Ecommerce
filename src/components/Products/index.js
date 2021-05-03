import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import Product from './product'



function Products(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json()
            )
            .then((json) => setProducts(json))
            
    },[]);


    return (
        <div className="card-container">
        {
            products.map((product) => (
              <Link to={"/products/" + product.id}>
                <Product title={product.title} image={product.image} />
             </Link> 
            ))
        }
       </div>
    )
}

export default Products;