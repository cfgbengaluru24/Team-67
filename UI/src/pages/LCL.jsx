import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar"; // Import the new Sidebar component
import Notification from "../components/Notifications";
import {
  FaBars,
  FaUser,
  FaClock,
  FaChartBar,
  FaCalendar,
  FaEdit,
} from "react-icons/fa"; // Import FaBars icon
import VideoUpload from "../components/Videoupload";

import AllotVol from "./AllotVol";
import AllotAbsent from "./AllotAbsent";

// Existing components (kept as they were)
const DailyReport = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Daily Report</h2>
      {/* Add daily report content here */}
    </div>
  );
};

const Community = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Community</h2>
      {/* Add community content here */}
    </div>
  );
};

const Training = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Training</h2>
      {/* Add training content here */}
    </div>
  );
};

const LCLDash = () => {
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

  const studentVolunteerMapping = [
    { studentName: "John Doe", volunteerName: "Jane Smith" },
    { studentName: "Alice Johnson", volunteerName: "Robert Brown" },
    // Add more mappings as needed
  ];

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
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mb-4">
        <StatCard
          icon={<FaUser size={24} />}
          title="No. of Volunteers"
          value="350"
          color="bg-blue-500"
        />
        <StatCard
          icon={<FaChartBar size={24} />}
          title="No. of Students"
          value="1,250"
          color="bg-green-500"
        />
      </div>

      <AllotVol />

      <AllotAbsent />
    </div>
  );
};

const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Determine if we're on the home page
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {!isHomePage && (
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        <div className="flex-1">
          {!isHomePage && (
            <button
              className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          )}
          <div className="p-4">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/notifications" element={<Notification />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/training" element={<Training />} />
              <Route path="/daily-report" element={<DailyReport />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

const LCL = () => {
  return <LCLDash />;
};

export default LCL;
