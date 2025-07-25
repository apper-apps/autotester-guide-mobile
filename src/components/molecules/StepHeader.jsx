import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const StepHeader = ({ 
  step, 
  isExpanded, 
  onToggle, 
  isCompleted,
  className 
}) => {
  return (
    <div className={cn("flex items-center justify-between p-6", className)}>
      <div className="flex items-center space-x-4">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200",
          isCompleted 
            ? "bg-gradient-to-br from-success-500 to-success-600 text-white" 
            : "bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
        )}>
          {isCompleted ? (
            <ApperIcon name="Check" size={20} />
          ) : (
            <ApperIcon name={step.icon} size={20} />
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
          <div className="flex items-center space-x-4 mt-1">
            <p className="text-gray-600">{step.description}</p>
            <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
              ~{step.estimatedTime} min
            </span>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        className="text-primary-600 hover:text-primary-700"
      >
        <ApperIcon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={20}
          className="transition-transform duration-200"
        />
      </Button>
    </div>
  );
};

export default StepHeader;