import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white"
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Congratulations!
        </motion.h1>
        <p className="text-xl">Your form has been submitted successfully.</p>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
