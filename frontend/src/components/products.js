
import React from 'react'
import FairjobProduct from './fairjobProduct'
import LvcSpotlightProduct from "./lvcSpotlightProduct"
import Lvc320CareerProduct from './lvc320CareerProduct'

const Products = () => {
  return (
    <div className="products-page">
      <FairjobProduct/>
      <LvcSpotlightProduct/>
      <Lvc320CareerProduct/>
    </div>
  )
}

export default Products
