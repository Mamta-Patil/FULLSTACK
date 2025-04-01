import React from 'react'
import Layout from './layout'
import Header from './header'
import Home from './home'
// import Product from './product'
import Aboutus from './aboutUs'
import FloorPlans from './floorPlans'
import Product from './product/product'

const Payment = () => {
  return (
    <div>
      <Home />
      <Aboutus />
      <Layout />
      <FloorPlans />
      {/* <Product /> */}
      <Product />
    </div>
  )
}

export default Payment
