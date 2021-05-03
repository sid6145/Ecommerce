import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Product from '../Products/product'

function WomansClothing(){
    const [womensclothing, setWomenClothing] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res)=> res.json())
        .then((json) => setWomenClothing(json))
    },[])


    return (
        <div className="card-container">
        {
             womensclothing.map((item) => (
              <Link to={"/products/" + item.id}>
              <Product title={item.title} image={item.image} price={item.price}/>
            </Link>
             ))
        }   
        </div>
    )
}

export default WomansClothing;