import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Checkbox = forwardRef(({ 
  className, 
  checked = false, 
  onChange,
  label,
  ...props 
}, ref) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        <div className={cn(
          "w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200",
          "group-hover:scale-110",
          checked 
            ? "bg-gradient-to-br from-primary-500 to-secondary-500 border-transparent" 
            : "border-gray-300 bg-white group-hover:border-primary-300",
          className
        )}>
          {checked && (
            <ApperIcon 
              name="Check" 
              size={12} 
              className="text-white animate-scale-in" 
            />
          )}
        </div>
      </div>
      {label && (
        <span className={cn(
          "text-sm transition-colors duration-200",
          checked ? "text-gray-900 font-medium" : "text-gray-600"
        )}>
          {label}
        </span>
      )}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;