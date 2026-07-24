import React from 'react'
import FairJobCarousel from './fairJobCarousel.js';

const FairjobProduct = () => {
  return (
       <main className="page-home product-page-shell" style={{ padding: '20px', marginTop: '80px' }}>
        <section className='bg-black product-hero-section'>
          <h1 className='product-title product-hero-title' style={{ color: 'white', }}>
              LVC Fair Job Portal <br/>
            <strong className='product-text product-hero-subtitle' style={{ color: 'white' }}>
              The World's First Scam-Free Job Portal
            </strong>
          </h1>
        </section>
        <FairJobCarousel />
      </main>
  )
}

export default FairjobProduct
