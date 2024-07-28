import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaUpload, FaUserCheck, FaTimes } from "react-icons/fa";

const TeacherAttendanceModal = ({ isOpen, onClose }) => {
  const [attendanceType, setAttendanceType] = useState("offline");
  const [proofImage, setProofImage] = useState(null);
  const [remarks, setRemarks] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProofImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveAttendance = () => {
    const attendanceData = {
      type: attendanceType,
      proofImage,
      remarks,
      timestamp: new Date().toISOString(),
    };
    console.log("Saving attendance:", attendanceData);
    // Here you would typically send this data to your backend
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-[#1E2A3B] p-6 rounded-lg w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#F0F0F0]">
                Teacher Attendance
              </h2>
              <button
                onClick={onClose}
                className="text-[#F0F0F0] hover:text-[#CD0001]"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[#F0F0F0] mb-2">Class Type</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-[#F0F0F0]"
                      name="attendanceType"
                      value="offline"
                      checked={attendanceType === "offline"}
                      onChange={() => setAttendanceType("offline")}
                    />
                    <span className="ml-2 text-[#F0F0F0]">Offline Class</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-[#F0F0F0]"
                      name="attendanceType"
                      value="online"
                      checked={attendanceType === "online"}
                      onChange={() => setAttendanceType("online")}
                    />
                    <span className="ml-2 text-[#F0F0F0]">Online Class</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[#F0F0F0] mb-2">
                  Upload Proof (
                  {attendanceType === "online"
                    ? "Screenshot of live class"
                    : "Photo of class"}
                  )
                </label>
                <div className="flex space-x-2">
                  <input
                    id="proof"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => document.getElementById("proof").click()}
                    className="bg-[#F0F0F0] text-[#1E2A3B] px-4 py-2 rounded hover:bg-[#110518] hover:text-[#F0F0F0] transition duration-300"
                  >
                    <FaCamera className="inline mr-2" /> Capture
                  </button>
                  <button
                    onClick={() => document.getElementById("proof").click()}
                    className="bg-[#F0F0F0] text-[#1E2A3B] px-4 py-2 rounded hover:bg-[#180820] hover:text-[#F0F0F0] transition duration-300"
                  >
                    <FaUpload className="inline mr-2" /> Upload
                  </button>
                </div>
                {proofImage && (
                  <img
                    src={proofImage}
                    alt="Proof"
                    className="mt-4 max-w-full h-48 object-cover rounded"
                  />
                )}
              </div>

              <div>
                <label htmlFor="remarks" className="block text-[#F0F0F0] mb-2">
                  Remarks
                </label>
                <textarea
                  id="remarks"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full px-3 py-2 text-[#1E2A3B] bg-[#F0F0F0] rounded"
                  placeholder="Any additional comments..."
                  rows="3"
                />
              </div>

              <button
                onClick={saveAttendance}
                className="w-full bg-[#F0F0F0] text-[#1E2A3B] px-4 py-2 rounded hover:bg-[#1a0824] hover:text-[#F0F0F0] transition duration-300"
              >
                <FaUserCheck className="inline mr-2" /> Mark Attendance
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TeacherAttendanceComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#1E2A3B] text-[#F0F0F0] px-6 py-3 rounded-lg hover:bg-[#3369b4] transition duration-300"
      >
        Mark Attendance
      </button>
      <TeacherAttendanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TeacherAttendanceComponent;
