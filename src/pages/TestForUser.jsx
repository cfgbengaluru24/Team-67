import { useNavigate } from "react-router-dom";

const TestForUser = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    // You can navigate to a test page or implement the test logic here
    console.log("Starting the test...");
    // For example, to navigate to a test page:
    // navigate('/test');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the Test Platform
        </h1>
        <p className="mb-6 text-gray-600">
          You are about to begin your assessment. Click the button below when
          you are ready to start.
        </p>
        <button
          onClick={handleStartTest}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default TestForUser;
