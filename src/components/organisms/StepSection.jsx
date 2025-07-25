import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import StepHeader from "@/components/molecules/StepHeader";
import ApperIcon from "@/components/ApperIcon";

const StepSection = ({ 
  step, 
  isExpanded, 
  isCompleted, 
  onToggle 
}) => {
  const renderContent = (content) => {
    return content.split("\n").map((paragraph, index) => {
      if (paragraph.trim() === "") return null;
      
      // Handle bullet points
      if (paragraph.trim().startsWith("•") || paragraph.trim().startsWith("-")) {
        return (
          <li key={index} className="ml-4 text-gray-700">
            {paragraph.trim().substring(1).trim()}
          </li>
        );
      }
      
      // Handle sub-bullets
      if (paragraph.trim().startsWith("  •") || paragraph.trim().startsWith("  -")) {
        return (
          <li key={index} className="ml-8 text-gray-600 text-sm">
            {paragraph.trim().substring(1).trim()}
          </li>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph.trim()}
        </p>
      );
    });
  };

  return (
    <motion.section
      id={`step-${step.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-8"
    >
      <Card className={`transition-all duration-300 ${isCompleted ? "ring-2 ring-success-200 bg-success-50/50" : ""}`}>
        <StepHeader
          step={step}
          isExpanded={isExpanded}
          onToggle={onToggle}
          isCompleted={isCompleted}
        />
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6 overflow-hidden"
            >
              <div className="border-t border-gray-100 pt-6">
                <div className="prose max-w-none">
                  <ul className="space-y-2">
                    {renderContent(step.content)}
                  </ul>
                </div>

<div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <ApperIcon name="Clock" size={16} />
                    <span>Estimated time: {step.estimatedTime} minutes</span>
                  </div>
                  
                  {isCompleted && (
                    <div className="flex items-center space-x-2 text-success-600">
                      <ApperIcon name="CheckCircle" size={20} />
                      <span className="font-medium">Completed!</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.section>
  );
};

export default StepSection;