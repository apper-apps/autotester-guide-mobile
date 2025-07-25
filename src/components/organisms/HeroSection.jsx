import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const HeroSection = ({ onStartGuide }) => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <ApperIcon name="Zap" size={64} className="text-primary-500" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <ApperIcon name="Rocket" size={48} className="text-secondary-500" />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AutoTester{" "}
            <span className="gradient-text">Getting Started</span> Guide
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Learn how to create automated tests for your web application with our comprehensive, 
            step-by-step guide. From zero to your first successful test in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              onClick={onStartGuide}
              className="flex items-center space-x-2"
            >
              <ApperIcon name="PlayCircle" size={20} />
              <span>Start the Guide</span>
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              onClick={() => document.getElementById("prerequisites").scrollIntoView({ behavior: "smooth" })}
              className="flex items-center space-x-2"
            >
              <ApperIcon name="ListChecks" size={20} />
              <span>Check Prerequisites</span>
            </Button>
          </div>
        </motion.div>
        
        {/* Feature highlights */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Zap" size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Setup</h3>
            <p className="text-gray-600">Get started in under 5 minutes with our Chrome extension</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Bot" size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600">Let AI generate comprehensive test cases automatically</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Target" size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero Code</h3>
            <p className="text-gray-600">Create tests without writing a single line of code</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;