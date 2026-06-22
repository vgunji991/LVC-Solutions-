import "./ourEmployees.css";

const employees = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    name: "Venkat Gunji",
    position: "CEO",
    Role:"Founder",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    name: "Sarah",
    position: "CTO",
    Role:"Co-Founder",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    name: "David",
    position: "Software Engineer",
    Role:"Team Member",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    name: "Emma",
    position: "Marketing Manager",
    Role:"Team Member",
  },
   {
    id: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    name: "Watson",
    position: "Marketing Manager",
    Role:"Team Member",
  },
];

const OurEmployees = () => {
  return (
    <div className="our-employees">
      <h2 style={{color:'white'}}>Our Employees</h2>

      <p style={{color:'white'}}>
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