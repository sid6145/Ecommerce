import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Product from '../Products/product'

function MensClothing (){
    const [menclothing, setMenClothing] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res)=> res.json())
        .then((json) => setMenClothing(json))
    },[])


    return (
        <div className="card-container">
        {
             menclothing.map((item) => (
              <Link to={"/products/" + item.id}>
              <Product title={item.title} image={item.image} price={item.price}/>
            </Link>
             ))
        }   
        </div>
    )
}

export default MensClothing;