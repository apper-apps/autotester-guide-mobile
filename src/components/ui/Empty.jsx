import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "Nothing here yet", 
  description = "Get started by creating your first item",
  actionLabel = "Get Started",
  onAction 
}) => {
  return (
    <div className="text-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name="Smile" size={40} className="text-primary-600" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        {onAction && (
          <Button
            onClick={onAction}
            className="flex items-center space-x-2 mx-auto"
          >
            <ApperIcon name="Plus" size={16} />
            <span>{actionLabel}</span>
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default Empty;