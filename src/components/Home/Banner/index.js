import React from 'react'
import './style.css'

function Banner (props) {
    return (
        <div className="banner-container">
              <img src={props.image} width="100" className="banner-img"/>
        </div>
      
    )
}

export default Banner;