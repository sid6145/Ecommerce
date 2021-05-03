import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './style.css'
import Header from '../Header'
import Home from '../Home';
import Products from '../Products';
import Cart from '../Cart';
import Electronics from '../Categories/Electronics';
import Jewelery from '../Categories/Jewelery';
import MensClothing from '../Categories/MensClothing';
import WomansClothing from '../Categories/WomansClothing';
import Footer from '../Footer';
import ProductInfo from '../Products/ProductInfo';
import Login from '../Login';

function App(){
 return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/electronics" component={Electronics}/>
        <Route path="/jewelery" component={Jewelery}/>
        <Route path="/men's clothing" component={MensClothing}/>
        <Route path="/women's clothing" component={WomansClothing}/>
        <Route path="/cart" component={Cart} />
        <Route path="/products/:id" component={ProductInfo} />
        <Route path="/Login" component={Login} />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;