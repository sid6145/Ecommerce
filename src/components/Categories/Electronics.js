import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Product from '../Products/product'

function Electronics (){
    const [electronics, setElectronics] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then((res)=> res.json())
        .then((json) => setElectronics(json))
    },[])


    return (
        <div className="card-container">
        {
             electronics.map((item) => (
              <Link to={"/products/" + item.id}>
                <Product title={item.title} image={item.image} price={item.price}/>
              </Link>
             ))
        }   
        </div>
    )
}

export default Electronics;