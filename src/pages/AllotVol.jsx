import { useState } from "react";

const initialMappings = [
  {
    studentName: "John Doe",
    volunteerName: "Jane Smith",
    approved: false,
    allotted: false,
  },
  {
    studentName: "Alice Johnson",
    volunteerName: "Robert Brown",
    approved: false,
    allotted: false,
  },

  // Add more mappings as needed
];

const AllotVol = () => {
  const [mappings, setMappings] = useState(initialMappings);
  const [rejectedStudent, setRejectedStudent] = useState("");

  const handleApprove = (index) => {
    const newMappings = [...mappings];
    newMappings[index].approved = true;
    newMappings[index].allotted = true;
    setMappings(newMappings);
  };

  const handleReject = (index) => {
    const rejectedStudentName = mappings[index].studentName;
    const newMappings = [...mappings];
    newMappings.splice(index, 1);
    setMappings(newMappings);
    setRejectedStudent(rejectedStudentName);
  };

  const handleManualAllot = (e) => {
    e.preventDefault();
    const { studentName, volunteerName } = e.target.elements;
    const newMapping = {
      studentName: studentName.value,
      volunteerName: volunteerName.value,
      approved: false,
      allotted: true,
    };
    setMappings([...mappings, newMapping]);
    setRejectedStudent("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        <h3 className="text-xl font-semibold mb-4">Volunteer Allotment</h3>
        <div className="grid grid-cols-1 gap-4">
          {mappings.map((mapping, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
              <span className="font-semibold">Student:</span>{" "}
              {mapping.studentName}
              <br />
              <span className="font-semibold">Volunteer:</span>{" "}
              {mapping.volunteerName}
              <div className="mt-2">
                {mapping.allotted ? (
                  <button
                    className="mr-2 bg-blue-500 text-white py-1 px-2 rounded"
                    disabled
                  >
                    Allotted
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleApprove(index)}
                      className="mr-2 bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(index)}
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {rejectedStudent && (
          <div className="mt-6 bg-gray-100 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">
              Manual Allotment for {rejectedStudent}
            </h4>
            <form onSubmit={handleManualAllot} className="mt-4">
              <div className="mb-2">
                <label className="font-semibold">Student Name:</label>
                <input
                  type="text"
                  name="studentName"
                  value={rejectedStudent}
                  readOnly
                  className="ml-2 p-1 border rounded"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="font-semibold">Volunteer Name:</label>
                <input
                  type="text"
                  name="volunteerName"
                  className="ml-2 p-1 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Allot Volunteer
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllotVol;
