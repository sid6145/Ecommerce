import React from 'react'
import Banner from './Banner'
import Deals from './Deals'
import Welcome from './Welcome'


function Home(){
    return (
      <div>
         <Welcome />
         <Deals />
         <hr />
      
         <Banner image="images/banner1.jpg"/>
      </div>
     
    )
}

export default Home;