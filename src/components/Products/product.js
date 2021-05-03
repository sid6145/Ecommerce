import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './style.css'

function Product(props){

    return (
        
<Card style={{ width: '18rem' }}>
  <Card.Img className="product-img" variant="top" src={props.image}/>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <p>{props.description}</p>
    <p>{props.price}</p>  
    <Button className="btn">Add to Cart</Button>
  </Card.Body>
</Card>
    )

}

export default Product