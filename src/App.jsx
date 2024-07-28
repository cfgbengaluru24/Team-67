// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/NavBar";
// import Sidebar from "./components/Sidebar"; // Import the new Sidebar component
import Notification from "./components/Notifications";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Form from "./pages/Form";
import LCL from "./pages/LCL";
import Student from "./pages/Student";
import TestForUser from "./pages/TestForUser";
import Successfull_Form from "./pages/Successfull_Form.jsx";

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

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/training" element={<Training />} />
        <Route path="/daily-report" element={<DailyReport />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/lcl" element={<LCL />} />
        <Route path="/student" element={<Student />} />
        <Route path="/testforuser" element={<TestForUser />} />
        <Route path="/success" element={<Successfull_Form />} />
      </Routes>
    </Router>
  );
};

export default App;
