// import { Link } from "react-router-dom"; //added link import for the useful links
// import twitter from '../assets/vecteezy_twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x_31737215.png'
// import ig from '../assets/vecteezy_instagram-logo-png-instagram-icon-transparent_18930460.png'
// import linkedIn from '../assets/vecteezy_linkedin-logo-png-linkedin-logo-transparent-png-linkedin_23986569.png'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../style.css";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#000000",
//         color: "#fff", 
//         padding: "10px",
//         width: "100%",
//       }}
//     >
//       <div className="container mt-5 mb-0">
//         <footer className="text-center text-lg-start text-white" >
//           <section>
//             <div className="container text-center text-md-start mt-5">
//               <div className="row mt-3">
//                 <div className="col-12 text-center mb-4">
//                   <div className="footer-brand">
//                     <Link to="/" onClick={() => window.scrollTo(0, 0)} className="d-flex align-items-center" style={{ textDecoration: 'none', color: 'inherit' }}>
//                       <img
//                         src={logo}
//                         alt="Company Logo"
//                         className="footer-logo-small"
//                         // style={{ width: '72px', height: 'auto' }}
//                       />
//                       {/* <span className="footer-brand-text">LVC Solutions</span> */}
//                     </Link>
//                   </div>
//                 </div>
                                
//                 <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-1 quick-links">
//                   <h6 className="fw-bold">Quick Links</h6>
//                   {/* <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} /> */}
//                   <p>
//                     <a href="/" >
//                       About
//                     </a>
//                   </p>
//                   <p>
//                     <a href="https://lvcspotlightmedia.com/" target="_blank" rel="noopener noreferrer" >
//                      LVC Spotlight Media
//                     </a>
//                   </p>
//                   <p>
//                     <a href="https://www.lvcfairjob.com/" target="_blank" rel="noopener noreferrer">
//                       LVC Fair Job Portal
//                     </a>
//                   </p>
//                   <p>
//                     <a href="https://www.lvc360.com/Terms#Terms" target="_blank" rel="noopener noreferrer">
//                   Terms
//                     </a>
//                   </p>
//                   <p>
//                     <a href="https://www.lvc360.com/Privacy#Privacy" target="_blank" rel="noopener noreferrer">
//                       Privacy
//                     </a>
//                   </p>
//                 </div>
          
//                 <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-1"  >
//                   <h6 className="fw-bold">Contact Us</h6>
//                   {/* <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} /> */}
//                   <p>
//                     <i className="fas fa-home mr-3"></i> 5015 Addison Circle,<br/>
//                     Addison, TX 75001, USA
//                   </p>
//                   <p>
//                     <i className="fas fa-home mr-3"></i> 228 Hamilton Avenue
//                      3rd Floor,<br/>
//                     Palo Alto, CA 94301, USA
//                   </p>
//                   {/* <p>
//                     <i className="fas fa-envelope mr-3"></i> info@example.com
//                   </p>
//                   <p>
//                     <i className="fas fa-phone mr-3"></i> + 01 60 275 65 614
//                   </p> */}
//                   <p>
//                     <i className="fas fa-print mr-3"></i>info@lvc-solutions.com
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='social-media-container-footer'>
//               <div>
//                 <a href="https://x.com/lvcsolutions?s=21" className="twitter-social" target="_blank" rel="noreferrer">
//                   <img alt='twitter button that redirects to LVC twitter account' className='twitter-media-imgs' src={twitter}/>
//                 </a>
//               </div>
//               <div>
//                 <a href="https://www.linkedin.com/company/lvc-solutions-llc" className="linkedIn-social" target="_blank" rel="noreferrer">
//                   <img alt='linkedIn button that redirects to LVC linkedIn account' className='linkedIn-media-imgs' src={linkedIn}/>
//                 </a>
//               </div>
//               <div>
//                 <a href="https://www.instagram.com/lvcsolutions?igsh=Y2Y4OG92eDlnNmh4&utm_source=qr" className="instagram-social" target="_blank" rel="noreferrer">
//                   <img alt='Instagram button that redirects to LVC Instagram account' className='instagram-media-imgs' src={ig}/>
//                 </a>
//               </div>
//             </div>
//           </section>
//           <hr className="footer-hr"/>
//           <div className="text-center p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", paddingBottom: "0", marginBottom: "0" }}>
//             <p>LVC Solutions</p>
//             <p>All rights reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./footer.css"; 
import logo from "../assets/lvc-icon-removebg-preview.png";
import { quickLink, socialLinks, address } from "../constant";

const ContactLink = ({ title, children }) => {
  return (
    <div className="contact-column">
      <p className="column-title">{title}</p>
      {children}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logo} alt="Logo" width={120} height={90} />
          {/* <div className="logo-text">
            <h2>LVC 360°</h2>
            <p>CAREER PROGRAM</p>
          </div> */}
        </div>

        {/* Links Section */}
        <div className="links-grid">
          <ContactLink title="Quick Links">
            <div className="link-list">
              {quickLink.map((item) => (
                <a key={item.name} href={item.href} className="footer-link">
                  {item.name}
                </a>
              ))}
            </div>
          </ContactLink>

          <ContactLink title="Contact Us">
            <div className="link-list">
              <p className="footer-link">
                {address.split("\n").map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
              <a href="mailto:info@lvc-solutions.com" className="footer-link">
                info@lvc-solutions.com
              </a>
            </div>
          </ContactLink>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          {socialLinks.map(({ icon: Icon, label, url }) => (
            <a key={label} href={url} className="icon-circle" aria-label={label} target="_blank" rel="noreferrer">
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Bottom Rights */}
        <div className="footer-bottom">
          <p>LVC Solutions.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}