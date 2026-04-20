import React from 'react'
import SpotLightCarousel from "./spotlightCarousel"
import SpotLogo from "../assets/spotlight-media.png";

const LvcSpotlightProduct = () => {
  return (
  <section
          style={{
            fontSize: "14px",
            color: "000",
            fontWeight: "500",
            background: "black",
            borderBottom: "2px solid grey"
          }}
          className="py-5"
        >
          <div
            className="container section-4"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <div
              className="academy-heading-row spotlight-heading-row product-section-heading"
              style={{ columnGap: "clamp(6px, 1vw, 12px)" }}
            >
              <div className="product-section-logo" style={{ textAlign: "center", display: "grid" }}>
                <img
                  src={SpotLogo}
                  alt="LVC Spotlight Media Logo"
                  className="spotlight-section-logo"
                  style={{ maxWidth: "300px", height: "auto" }}
                />
              </div>
              <div>
              </div>
            </div>
          </div>

          <div className="spotlight-carousel-container ">
            <SpotLightCarousel />
          </div>
          <div className="product-section-footer" style={{ textAlign: "center"}} >
            <p className="product-section-footnote" style={{ fontSize: "25px", color: "white" }}>
              As Seen In → Forbes | Entrepreneur | Yahoo | TechCrunch | Medium
            </p>
          </div>
      
        </section> 
  )
}

export default LvcSpotlightProduct
