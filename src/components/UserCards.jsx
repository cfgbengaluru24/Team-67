import { useNavigate } from "react-router-dom";
import "./UserCards.css";
import jobSeekerImage from "../images/jobSeeker.jpg";
import recruiterImage from "../images/recruiterImage.jpg";
import companyImage from "../images/companyImage.jpg";

const UserCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (userType) => {
    switch (userType) {
      case "volunteer":
        navigate("/login");
        break;
      case "learningCircleHead":
        navigate("/login");
        break;
      case "chapterHead":
        navigate("/login");
        break;
      case "manager":
        navigate("/signup");
        break;
      case "student":
        navigate("/signup");
        break;
      default:
        break;
    }
  };

  return (
    <section className="user-cards-section">
      <div className="user-cards-heading">
        <h1>How would you like to join us? </h1>
      </div>
      <div className="user-cards">
        <div className="card" onClick={() => handleCardClick("volunteer")}>
          <div className="card-image">
            <img src={jobSeekerImage} alt="Job Seeker" />
          </div>
          <h3>Volunteer</h3>
          <p>
            Join U&I Trust and be the spark that ignites change in the lives of
            First generation Learners
          </p>
        </div>
        {/* 
        <div
          className="card"
          onClick={() => handleCardClick("learningCircleHead")}
        >
          <div className="card-image">
            <img src={recruiterImage} alt="Recruiter" />
          </div>
          <h3>Learning Circle Head</h3>
          <p>Discover the best talents!</p>
        </div> */}

        {/* <div className="card" onClick={() => handleCardClick("chapterHead")}>
          <div className="card-image">
            <img src={companyImage} alt="Company" />
          </div>
          <h3>Chapter head</h3>
          <p>ooooo!</p>
        </div>

        <div className="card" onClick={() => handleCardClick("manager")}>
          <div className="card-image">
            <img src={companyImage} alt="Company" />
          </div>
          <h3>Manager</h3>
          <p>xxxx!</p>
        </div> */}
        <div className="card" onClick={() => handleCardClick("student")}>
          <div className="card-image">
            <img src={companyImage} alt="Company" />
          </div>
          <h3>Student</h3>
          <p>Come and Join Us! To brighten your future</p>
        </div>
      </div>
    </section>
  );
};

export default UserCards;
