// import { useState } from "react";
// import { Mail, MapPin } from "lucide-react";
// import "../style.css";
// import Footer from "./footer.js";
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle form submission
//     // For now, we'll just log the data
//     console.log("Form Submitted:", formData);
//     // You might want to add form validation, send to backend, etc.
//     alert("Thank you for your message!");
//   };
//   return (
//     <main>
//       <div className="whatwedo-container ">
//         <div className="whatwedo-content">
//           <p className="whatwedo-subtitle">Contact Us</p>
//           <hr className="underline" />
//           <h2
//             className="contact-title"
//             style={{ color: "white", fontsize: "3em", marginTop: "60px" }}
//           >
//             What’s on your mind?
//           </h2>
//         </div>
//       </div>

//       <div className="contact-page bg-black">
//         <div className="contact-container">
//           {/* Left Side: Contact Form */}
//           <div className="contact-form border border-white bg-black text-white">
//             <h2 className="contact-title contact-form-title text-white">
//               Get In Touch
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group text-white">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Your Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="bg-black"
//                   style={{ color: "white" }}
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="submit-btn bg-white text-black">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Right Side: Contact Info and Image */}
//           <div className="contact-info">
//             <div className="contact-overlay">
//               <div className="contact-details">
//                 <div className="contact-detail">
//                   <MapPin className="contact-icon" />
//                   <span>
//                     14114 Dallas Pkwy, Suite 500B,
//                     <br />
//                     Dallas, TX 75254
//                   </span>
//                 </div>
//                  <div className="contact-detail">
//                   <MapPin className="contact-icon" />
//                   <span>
//                     228 Hamilton Avenue 3rd Floor,
//                     <br />
//                     Palo Alto,CA 94301, United States
//                   </span>
//                 </div>
//                 <div className="contact-detail">
//                   <MapPin className="contact-icon" />
//                   <span>
//                     5015 Addison Circle,
//                     <br />
//                    Addison,TX 75001, United States
//                   </span>
//                 </div>
//                 <div className="contact-detail">
//                   <MapPin className="contact-icon" />
//                   <span>
//                     Unit No 203, 2nd Floor Suite # 749,SBR CV Towers, Sector-l,
//                     Sy No 64,HUDA Techno Enclave, Madhapur, Hyderabad - 500081
//                   </span>
//                 </div>
//                 <div className="contact-detail">
//                   <Mail className="contact-icon" />
//                   <span>info@lvc-solutions.com </span>
//                 </div>
//               </div>
//             </div>
//             <img
//               src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Contact Background"
//               className="contact-image"
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// };

// export default Contact;

































import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import "../style.css";
import Footer from "./footer.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message!");
  };

  const offices = [
    {
      lines: ["14114 Dallas Pkwy, Suite 500B,", "Dallas, TX 75254"],
      lat: 32.9405659,
      lng: -96.8212145,
    },
    {
      lines: ["228 Hamilton Avenue 3rd Floor,", "Palo Alto, CA 94301, United States"],
      lat: 37.4441782,
      lng: -122.1611109,
    },
    {
      lines: ["5015 Addison Circle,", "Addison, TX 75001, United States"],
      lat: 32.9620962,
      lng: -96.8246845,
    },
    {
      lines: [
        "Unit No 203, 2nd Floor Suite #749, SBR CV Towers,",
        "Sector-1, Sy No 64, HUDA Techno Enclave, Madhapur,",
        "Hyderabad - 500081",
      ],
      lat: 17.4450452,
      lng: 78.385825,
    },
  ];

  // Get only Hyderabad office (last one in the array)
  const hyderabadOffice = offices[offices.length - 1];

  return (
    <main>
      <div className="whatwedo-container ">
        <div className="whatwedo-content">
          <p className="whatwedo-subtitle">Contact Us</p>
          <hr className="underline" />
          <h2
            className="contact-title"
            style={{ color: "white", fontsize: "3em", marginTop: "60px" }}
          >
            What's on your mind?
          </h2>
        </div>
      </div>

      <div className="contact-page bg-black">
        <div className="contact-container">
          {/* Left Side: Contact Form */}
          <div className="contact-form border border-white bg-black text-white">
            <h2 className="contact-title contact-form-title text-white">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group text-white">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black"
                  style={{ color: "white" }}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn bg-white text-black">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info and Image */}
          <div className="contact-info">
            <div className="contact-overlay">
              <div className="contact-details">
                {offices.map((office, index) => (
                  <div className="contact-detail-card" key={index}>
                    <div className="contact-detail">
                      <MapPin className="contact-icon" />
                      <span>
                        {office.lines.map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="contact-map-wrapper">
                     
                    </div>
                  </div>
                ))}
                <div className="contact-detail">
                  <Mail className="contact-icon" />
                  <span>info@lvc-solutions.com </span>
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contact Background"
              className="contact-image"
            />
          </div>
        </div>
      </div>

      {/* Hyderabad Location Map Section - Full Width */}
      <div 
        className="hyderabad-map-section" 
        style={{ 
          backgroundColor: "#000", 
          padding: "60px 20px 80px",
          borderTop: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 
            style={{ 
              color: "white", 
              fontSize: "2.5rem", 
              textAlign: "center",
              marginBottom: "15px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            Find Us On The Map
          </h2>
          <hr 
            style={{ 
              width: "80px", 
              height: "3px", 
              backgroundColor: "#fff",
              margin: "0 auto 40px auto",
              border: "none"
            }} 
          />
          
          <div 
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
            }}
          >
            <div 
              style={{ 
                padding: "20px 30px", 
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}
            >
              <MapPin style={{ color: "#fff", width: "24px", height: "24px" }} />
              <span style={{ color: "white", fontSize: "1.1rem", fontWeight: "500" }}>
                Hyderabad Office
              </span>
            </div>
            
            {/* <iframe
              title="Hyderabad Office Location"
              src={`https://maps.google.com/maps?q=${hyderabadOffice.lat},${hyderabadOffice.lng}&z=16&output=embed`}
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe
  title="Hyderabad Office Location"
  src={`https://maps.google.com/maps?q=Unit+No+203,+2nd+Floor+Suite+%23749,+SBR+CV+Towers,+Sector-1,+Sy+No+64,+HUDA+Techno+Enclave,+Madhapur,+Hyderabad+-+500081&z=17&output=embed`}
  width="100%"
  height="450"
  style={{ border: 0, display: "block" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
            
            <div 
              style={{ 
                padding: "20px 30px", 
                backgroundColor: "rgba(255,255,255,0.03)",
                borderTop: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              {/* <p style={{ color: "#ccc", fontSize: "1rem", margin: 0, lineHeight: "1.8" }}>
                {hyderabadOffice.lines.map((line, i) => (
                  <span key={i}>
                    📍 {line}
                    {i < hyderabadOffice.lines.length - 1 && <br />}
                  </span>
                ))}
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;