import { useState } from "react";

const initialMappings = [
  {
    studentName: "John Doe",
    volunteerName: "Jane Smith",
    approved: false,
    allotted: false,
    preferredVolunteer: "ABC",
  },
  {
    studentName: "Alice",
    volunteerName: "Robert Brown",
    approved: false,
    allotted: false,
    preferredVolunteer: "XYZ",
  },
  // Add more mappings as needed
];

const AllotAbsent = () => {
  const [mappings, setMappings] = useState(initialMappings);
  const [rejectedStudent, setRejectedStudent] = useState("");
  const [manualAllot, setManualAllot] = useState(false);

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
    setManualAllot(true);
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
    setManualAllot(false);
  };

  return (
    <div className="allot_absent flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Volunteer Allotment in case of absence
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mb-4">
          {mappings.map((mapping, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
              <span className="font-semibold">Student:</span>{" "}
              {mapping.studentName}
              <br />
              <span className="font-semibold">Absent Volunteer:</span>{" "}
              {mapping.volunteerName}
              <br />
              <span className="font-semibold">Preferred Volunteer:</span>{" "}
              {mapping.preferredVolunteer || "None"}
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

        {manualAllot && (
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

export default AllotAbsent;
