import React from 'react'
import './style.css'

function Deals (){
    return (
    <div className="deals">
        <h2>Deals on the day</h2>
        <div className="deals-container">
            <div className="deal-items">
                <img src="images/img1.jpg" />
                <h2>Samsung A20</h2>
            </div>
            <div className="deal-items">
                <img src="images/img2.jpg" />
                <h2>The watch</h2>
            </div>
            <div className="deal-items">
                <img src="images/img3.jpg" />
                <h2>RTX 3090</h2>
            </div>
            <div className="deal-items">
                <img src="images/img4.jpg" />
                <h2>Asus Rog</h2>
            </div>
        </div>
    </div>
    )
}

export default Deals;