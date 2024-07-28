import Attendance from "./Attendance";
import { useState } from "react";
import {
  FaBars,
  FaUser,
  FaClock,
  FaChartBar,
  FaCalendar,
  FaEdit,
} from "react-icons/fa"; // Import FaBars icon
import Sidebar from "./Sidebar";
import VideoUpload from "./Videoupload";

const Dashboard = () => {
  const [isopen, setIsOpen] = useState(false);
  const [isClassActive, setIsClassActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [review, setReview] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isopen);
  };

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
    <div>
      {/* <Sidebar /> */}
      <div className="max-w-7_5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            icon={<FaUser size={24} />}
            title="No. of Students"
            value="12"
            color="bg-blue-500"
          />
          <StatCard
            icon={<FaChartBar size={24} />}
            title="Hours Committed"
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
            title="Upcoming Events"
            value="8"
            color="bg-red-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">User Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(mockUserData).map(([key, value]) => (
                <div key={key} className="mb-2">
                  <span className="font-semibold">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>
                  {value}
                </div>
              ))}
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              <FaEdit className="inline mr-2" /> Edit Profile
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Class Management</h3>
            {!isClassActive ? (
              <div>
                <button
                  onClick={startClass}
                  className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 mt-4 mx-2 transition duration-300 ease-in-out"
                >
                  Start Class
                </button>
                <Attendance />
              </div>
            ) : (
              <div>
                <p className="text-lg mb-2">
                  <FaClock className="inline mr-2" />
                  Time Elapsed: {Math.floor(elapsedTime / 60)}:
                  {elapsedTime % 60 < 10 ? "0" : ""}
                  {elapsedTime % 60}
                </p>
                <button
                  onClick={endClass}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  End Class
                </button>
              </div>
            )}
          </div>
        </div>

        {showReviewPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96">
              <h3 className="text-xl font-semibold mb-4">Class Review</h3>
              <textarea
                className="w-full h-32 p-2 border rounded mb-4"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Enter your review and report for the class..."
              ></textarea>
              <VideoUpload />
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
    </div>
  );
};

export default Dashboard;
