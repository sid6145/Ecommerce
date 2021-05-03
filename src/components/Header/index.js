import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function Header(){
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
        <Navbar bg="dark" variant="dark">
          <Link to="/">
        <Navbar.Brand href="#home">Amazon</Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
        <Link to="/">
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>    
        <Link to="/products">
          <Nav.Link href="#products">Products</Nav.Link>
          </Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
          {categories.map((category) => (
                <div >
                  <Link to={category}>
                   <NavDropdown.Item href="#categories">{category}</NavDropdown.Item>
                  </Link>
                </div>
               
            ))}
          </NavDropdown>
          <Link to="/cart">
          <Nav.Link href="#cart">Cart</Nav.Link>
          </Link>
          <Link to="/login">
          <Nav.Link href="#login">Login</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
       
    )
}

export default Header;