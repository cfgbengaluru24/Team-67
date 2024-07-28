import { useState } from "react";
import {
  FaBars,
  FaUser,
  FaClock,
  FaChartBar,
  FaCalendar,
  FaEdit,
} from "react-icons/fa"; // Import FaBars icon
import StarRating from "../components/StarRating";
const StudentDashboard = () => {
  const [isClassActive, setIsClassActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [review, setReview] = useState("");

  const mockUserData = {
    name: "John Doe",
    email: "john@example.com",
    age: 28,
    phoneNumber: "123-456-7890",
    availability: "Mon, Wed, Fri",
    preferredTime: "Evening",
    preferredSubject: "Math",
    attendance: 95,
    hoursCommitted: 50,
  };

  const startClass = () => {
    setIsClassActive(true);
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  };

  const endClass = () => {
    setIsClassActive(false);
    setShowReviewPopup(true);
  };

  const submitReview = () => {
    console.log("Review submitted:", review);
    setShowReviewPopup(false);
    setElapsedTime(0);
    setReview("");
  };

  const StatCard = ({ icon, title, value, color }) => (
    <div
      className={`bg-white rounded-lg shadow-md p-6 flex items-center ${color}`}
    >
      <div className="rounded-full p-3 mr-4 text-white">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Student Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          icon={<FaUser size={24} />}
          title="Classes Taken"
          value="35"
          color="bg-blue-500"
        />
        <StatCard
          icon={<FaChartBar size={24} />}
          title="Hours Spent"
          value="1,250"
          color="bg-green-500"
        />
        <StatCard
          icon={<FaClock size={24} />}
          title="Average Session"
          value="45 mins"
          color="bg-yellow-500"
        />
        <StatCard
          icon={<FaCalendar size={24} />}
          title="Upcoming Classes"
          value="8"
          color="bg-red-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="bg-white rounded-lg shadow-md p-6"
          style={{ width: "86vw" }}
        >
          <h3 className="text-xl font-bold mb-4">User Details</h3>
          <div
            className="box"
            style={{
              border: "1px solid lightgrey",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "1px 1px 5px lightgrey",
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "20px",
            }}
          >
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                marginRight: "15px",
              }}
            >
              Upcoming Classes :
            </h4>
            <ul style={{ display: "flex"}}>
              <li style={{ marginRight: "50px" }}>Subject - Math</li>
              <li style={{ marginRight: "50px" }}>Time - 3:00 PM</li>
              <li style={{ marginRight: "50px" }}>Date - 10/10/2021</li>
              <li>Tutor - Rakhi</li>
              <li><button
                  onClick={endClass}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  style={{width:"100px",fontSize:"12px", marginLeft:"20px"}}
                >
                  Rate Class
                </button></li>
            </ul>
          </div>

          <div
            className="box"
            style={{
              border: "1px solid lightgrey",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "1px 1px 5px lightgrey",
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "20px",
            }}
          >
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                marginRight: "15px",
              }}
            >
              Upcoming Classes :
            </h4>
            <ul style={{ display: "flex" }}>
              <li style={{ marginRight: "50px" }}>Subject - English</li>
              <li style={{ marginRight: "50px" }}>Time - 5:00 PM</li>
              <li style={{ marginRight: "50px" }}>Date - 11/10/2021</li>
              <li>Tutor - Priya</li>
              <li><button
                  onClick={endClass}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  style={{width:"100px",fontSize:"12px", marginLeft:"20px"}}
                >
                  Rate Class
                </button></li>
            </ul>
          </div>

          <div
            className="box"
            style={{
              border: "1px solid lightgrey",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "1px 1px 5px lightgrey",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                marginRight: "15px",
              }}
            >
              Upcoming Classes :
            </h4>
            <ul style={{ display: "flex" }}>
              <li style={{ marginRight: "50px" }}>Subject - Hindi</li>
              <li style={{ marginRight: "50px" }}>Time - 4:00 PM</li>
              <li style={{ marginRight: "50px" }}>Date - 12/10/2021</li>
              <li>Tutor - Rahul</li>
              <li><button
                  onClick={endClass}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  style={{width:"100px",fontSize:"12px", marginLeft:"20px"}}
                >
                  Rate Class
                </button></li>
            </ul>
          </div>
        </div>
      </div>

      {showReviewPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg " style={{width:"500px"}}>
            <h3 className="text-xl font-semibold ">Class Review</h3>
            <p style={{display:"flex", alignItems:"center", padding:"10px"}}><em style={{marginRight:"20px"}}>Session Rating</em> {<StarRating/>}</p>
            <button
              onClick={submitReview}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
