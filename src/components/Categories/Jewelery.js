import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Product from '../Products/product'


function Jewelery (){
    const [jewelery, setJewelery] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then((res)=> res.json())
        .then((json) => setJewelery(json))
    },[])


    return (
        <div className="card-container">
        {
             jewelery.map((item) => (
              <Link to={"/products/" + item.id}>
              <Product title={item.title} image={item.image} price={item.price}/>
              </Link>
             ))
        }   
        </div>
    )
}

export default Jewelery;