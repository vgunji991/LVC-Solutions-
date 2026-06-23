import "./ourEmployees.css";

const employees = [
  {
    id: 1,
    image: "/employee_pics/Venkat_ceo.jpeg", 
    name: "Venkat Gunji",
    position: "CEO",
    Role: "Founder",
  },
  {
    id: 2,
    image: "/employee_pics/teja.jpg", 
    name: "Teja",
    position: "Intern",
    Role: "Full Stack Developer",
  },
  {
    id: 3,
    image: "/employee_pics/vamshi.jpeg",
    name: "A Bhanu Vamshi",
    position: "Intern",
    Role: "Full Stack Developer",
  },
  
  {
    id: 4,
    image: "/employee_pics/chandan.jpeg", 
    name: "T.K.Chandan",
    position: "Intern",
    Role: "Full Stack Developer",
  }
  ,
  {
    id: 5,
    image: "/employee_pics/chakresh.jpeg", 
    name: "Chakresh",
    position: "Intern",
    Role: "Full Stack Developer",
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
              <h4>{employee.name}</h4>
              <h4>{employee.position}</h4>
              <h4>{employee.Role}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurEmployees;