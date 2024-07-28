const Sidebar = () => {
  return (
    <div className="w-48 h-screen bg-gray-100 p-5">
      <a
        href="/dashboard"
        className="block py-2 px-4 text-gray-700 text-lg hover:bg-gray-200"
      >
        Dashboard
      </a>
      <a
        href="#"
        className="block py-2 px-4 text-gray-700 text-lg hover:bg-gray-200"
      >
        Report
      </a>
    </div>
  );
};

export default Sidebar;
