import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    toggleSidebar(); // Close the sidebar
    navigate("/"); // Navigate to the home page
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:h-screen`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button onClick={toggleSidebar} className="lg:hidden">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="mt-6">
          <Link
            to="/dashboard"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Dashboard
          </Link>
          <Link
            to="/training"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Training
          </Link>
          <Link
            to="/daily-report"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Daily Report
          </Link>
          <Link
            to="/community"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Community
          </Link>
          <button
            onClick={goToHome}
            className="w-full text-left py-2 px-4 hover:bg-gray-700"
          >
            Home
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
