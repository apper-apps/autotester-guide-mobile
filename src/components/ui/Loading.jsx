import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="relative w-16 h-16 mx-auto mb-4">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-1 bg-gray-50 rounded-full" />
        </div>
        <p className="text-gray-600 font-medium">Loading AutoTester Guide...</p>
      </motion.div>
    </div>
  );
};

export default Loading;