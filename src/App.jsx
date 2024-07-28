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

// const AppContent = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const location = useLocation();

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   // Determine if we're on the home page
//   // const isHomePage = location.pathname === "/";

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex flex-1">
//         {!isHomePage && (
//           <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//         )}
//         <div className="flex-1">
//           {!isHomePage && (
//             <button
//               className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
//               onClick={toggleSidebar}
//             >
//               <FaBars />
//             </button>
//           )}
//           <div className="p-4"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
      </Routes>
    </Router>
  );
};

export default App;
