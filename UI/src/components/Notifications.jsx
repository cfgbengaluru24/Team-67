import { useState } from "react";
import { FaBell, FaCheckCircle, FaTrash, FaBolt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Simulated data - in a real app, you'd fetch this from an API
const initialNotifications = [
  {
    id: 1,
    message: "New volunteer opportunity in Bangalore!",
    read: false,
    date: "2023-07-15",
  },
  {
    id: 2,
    message: "Upcoming fundraiser event on August 1st",
    read: false,
    date: "2023-07-14",
  },
  {
    id: 3,
    message: "Thank you for your recent donation!",
    read: true,
    date: "2023-07-10",
  },
  {
    id: 4,
    message: "New educational resources available for volunteers",
    read: false,
    date: "2023-07-08",
  },
];

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-10 p-6 bg-[#1E2A3B] shadow-lg rounded-lg border-2 border-[#F0F0F0]"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#F0F0F0] flex items-center justify-between">
        <span className="flex items-center">
          <FaBell className="mr-2 text-[#000000]" /> Notifications
        </span>
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            className="bg-[#F0F0F0] text-[#1E2A3B] text-sm font-bold px-3 py-1 rounded-full flex items-center"
          >
            {unreadCount} <FaBolt className="ml-1" />
          </motion.span>
        )}
      </h2>
      {notifications.length === 0 ? (
        <p className="text-[#F0F0F0] text-center text-lg">
          No new notifications. You are all caught up! ✨
        </p>
      ) : (
        <ul className="space-y-4">
          <AnimatePresence>
            {notifications.map((notif) => (
              <motion.li
                key={notif.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start justify-between p-4 ${
                  notif.read
                    ? "bg-[#2C3E50] bg-opacity-50"
                    : "bg-[#F0F0F0] bg-opacity-20"
                } rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#F0F0F0]/30`}
              >
                <div className="flex-1">
                  <p
                    className={`${
                      notif.read
                        ? "text-[#F0F0F0]"
                        : "text-[#F0F0F0] font-semibold"
                    }`}
                  >
                    {notif.message}
                  </p>
                  <p
                    className={`text-sm ${
                      notif.read ? "text-[#A0A0A0]" : "text-[#F0F0F0]"
                    } mt-1`}
                  >
                    {notif.date}
                  </p>
                </div>
                <div className="flex items-center ml-4">
                  {!notif.read && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => markAsRead(notif.id)}
                      className="text-[#F0F0F0] hover:text-[#F0F0F0] transition-colors duration-300"
                      title="Mark as read"
                    >
                      <FaCheckCircle size={20} />
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => deleteNotification(notif.id)}
                    className={`ml-3 ${
                      notif.read
                        ? "text-[#A0A0A0] hover:text-[#F0F0F0]"
                        : "text-[#F0F0F0] hover:text-[#F0F0F0]"
                    } transition-colors duration-300`}
                    title="Delete notification"
                  >
                    <FaTrash size={20} />
                  </motion.button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </motion.div>
  );
};

export default NotificationComponent;
