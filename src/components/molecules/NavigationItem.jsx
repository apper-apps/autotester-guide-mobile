import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const NavigationItem = ({ 
  step, 
  isActive, 
  isCompleted, 
  onClick,
  className 
}) => {
  const handleClick = () => {
    onClick(step.id);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center space-x-3 px-4 py-2 rounded-lg text-left w-full transition-all duration-200",
        "hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
        isActive && "bg-primary-50 border-l-4 border-primary-500",
        className
      )}
    >
      <div className={cn(
        "w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200",
        isCompleted 
          ? "bg-success-500 text-white" 
          : isActive 
            ? "bg-primary-500 text-white"
            : "bg-gray-200 text-gray-600"
      )}>
        {isCompleted ? (
          <ApperIcon name="Check" size={12} />
        ) : (
          <span>{step.id}</span>
        )}
      </div>
      <span className={cn(
        "text-sm font-medium transition-colors duration-200",
        isActive ? "text-primary-700" : "text-gray-700"
      )}>
        {step.title}
      </span>
    </button>
  );
};

export default NavigationItem;