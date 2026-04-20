import React from "react";
import { useNavigate } from "react-router-dom";
import "./trustedSection.css";

const trustPoints = [
  "U.S. Federal Vendor (SAM.gov Registered)",
  "CAGE Code Verified Entity",
  "Enterprise-Grade AI & Software Solutions",
  "Fast & Scalable Project Delivery",
];

const TrustedSection = () => {
  const navigate = useNavigate();

  return (
    <section className="trusted-section">
      <div className="container">
        <div className="trusted-header">
          <p className="trusted-subtitle">Trusted. Verified. Contract-Ready.</p>
          <h2 className="trusted-title">Built for Enterprise. Verified for Government.</h2>
          <p className="trusted-description">
            LVC Solutions is an active SAM.gov registered company with a verified CAGE Code, enabling us
            to deliver secure, compliant, and scalable AI and software solutions for both commercial and U.S.
            government clients.
          </p>
        </div>

        <div className="trust-points-grid">
          {trustPoints.map((point, index) => (
            <div key={index} className="trust-point">
              {/* <div className="trust-icon"></div> */}
              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="trusted-cta">
          <button className="cta-button" onClick={() => navigate("/contact")}>
            Work With a Verified Vendor
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;