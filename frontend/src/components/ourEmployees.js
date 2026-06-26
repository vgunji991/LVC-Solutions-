import "./ourEmployees.css";

const employees = [
  {
    id: 1,
    image: "/employee_pics/Venkat_ceo.jpeg", 
    name: "Venkat Gunji",
    position: "Founder & CEO",

  },
  {
    id: 2,
    image: "/employee_pics/teja.jpg", 
    name: "Teja",
   position: "Full Stack  Intern",
  },
  {
    id: 3,
    image: "/employee_pics/vamshi.jpeg",
    name: "A Bhanu Vamshi",
    position: "Full Stack  Intern",
   
  },
  
  {
    id: 4,
    image: "/employee_pics/chandan.jpeg", 
    name: "T.K.Chandan",
     position: "Full Stack Intern",
  }
  ,
  {
    id: 5,
    image: "/employee_pics/chakresh.jpeg", 
    name: "Chakresh",
   position: "Full Stack Intern",
   
  },

  {
    id: 6,
    image: "/employee_pics/rakesh.jpeg", 
    name: "Rakesh  kumar",
     position: "Full Stack Intern",
  },

   {
    id: 7,
    image: "/employee_pics/yasaswini.jpeg", 
    name: "Nagallaa yasaswini",
     position: "Full Stack Intern",
  },

  {
    id: 8,
    image: "/employee_pics/janardhan.jpeg", 
    name: "S.Janardhan",
     position: "Full Stack Intern",
  },


  {
    id: 9,
    image: "/employee_pics/tejaswini.jpeg", 
    name: "N.Tejaswini",
     position: "Full Stack Intern",
  }


  
  
];

const OurEmployees = () => {
  return (
    <div className="our-employees">
      <h2 style={{ color: "white" }}>Our Employees</h2>

      <p style={{ color: "white" }}>
        Meet the dedicated team behind our success. Our employees are the
        heart of our company, bringing passion, expertise, and commitment to
        every project.
      </p>

      <div className="slider">
        <div className="slide-track">
          {[...employees, ...employees].map((employee, index) => (
            <div className="employee-card" key={index}>
              <img src={employee.image} alt={employee.name} />
              <h4 style={{ fontSize: "13px" }}>{employee.name}</h4>
              <h4 style={{ fontSize: "12px" }} >{employee.position}</h4>
              {/* <h4 style={{ fontSize: "12px" }}>{employee.Role}</h4> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurEmployees;