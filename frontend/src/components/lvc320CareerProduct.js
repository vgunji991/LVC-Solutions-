import React from 'react'
import AcademyCarousel from "./academyCarousel"
import lvc360logo from "../assets/lvc360logo.png";

const Lvc320CareerProduct = () => {
  return (
   <section className="container py-5 section-4 product-academy-section">
          <div className="academy-heading-row product-section-heading">
            <div
              className="product-section-logo"
              style={{
                textAlign: "center",
                display: "grid",
              }}
            >
              <img
                src={lvc360logo}
                alt="LVC360 Logo"
                className="academy-section-logo"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </div>
            <div>
              <h1
                className="product-academy-title"
                style={{
                  color: "white",
                  fontSize: "clamp(30px, 2.5vmax, 60px)",
                }}
              >
                LVC360 career program - 
                <span
                  className="product-academy-subtitle"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "clamp(20px, 1.5vmax, 40px)",
                  }}
                >
                   Stop guessing. Let your career be managed.
                </span>
              </h1>
            </div>
          </div>
          <div className="academy-carousel-container bg-black">
            <AcademyCarousel />
          </div>
          <div className="container my-5 product-academy-cta">
            <div className="p-5 text-center">
              <h2 className="fw-bold mb-4 product-academy-cta-title">
                Choose Your Path: 6-Month Fast Track or 12-Month Comprehensive
                Bootcamp.
              </h2>
              <a
                href="https://www.lvcacademy.com"
                className="btn btn-primary-whatwedo btn-lg"
              >
                View More Bootcamps
              </a>
            </div>
          </div>
        </section>
  )
}

export default Lvc320CareerProduct
