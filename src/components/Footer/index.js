import React from 'react'
import './style.css'

function Footer(){
    const date = new Date()
    const year = date.getFullYear()
    console.log(year)

    return (
        
            <p className="footer">©copyright {year}</p>
        
    )
}

export default Footer