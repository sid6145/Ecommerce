import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import './style.css'



function Categories (props){
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then( res => res.json())
        .then( (json) => {
            console.log(json)
            setCategories(json)
        })
    },[])


    return (
        <>
        {
            categories.map((category) => (
                <div className="category-item">
                    <h2><Link to={"categories/" + category}>{category}</Link></h2>
                </div>
               
            ))
        }
        </>
    )
}

export default Categories