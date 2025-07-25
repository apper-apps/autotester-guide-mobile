import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import PrerequisiteItem from "@/components/molecules/PrerequisiteItem";
import ApperIcon from "@/components/ApperIcon";

const PrerequisitesSection = ({ prerequisites, onTogglePrerequisite }) => {
  const completedCount = prerequisites.filter(p => p.isChecked).length;
  const progressPercentage = (completedCount / prerequisites.length) * 100;

  return (
    <section id="prerequisites" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Before You Begin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Make sure you have everything ready to get the most out of this guide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <ApperIcon name="ListChecks" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Prerequisites Checklist</h3>
                  <p className="text-gray-600">
                    {completedCount} of {prerequisites.length} completed
                  </p>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="text-right">
                <div className="text-2xl font-bold gradient-text">
                  {Math.round(progressPercentage)}%
                </div>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              {prerequisites.map((prerequisite) => (
                <PrerequisiteItem
                  key={prerequisite.id}
                  prerequisite={prerequisite}
                  onToggle={onTogglePrerequisite}
                />
              ))}
            </div>

            {completedCount === prerequisites.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-success-50 border border-success-200 rounded-lg flex items-center space-x-3"
              >
                <ApperIcon name="CheckCircle" size={20} className="text-success-600" />
                <div>
                  <p className="text-success-800 font-medium">All set!</p>
                  <p className="text-success-700 text-sm">You're ready to start the guide</p>
                </div>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PrerequisitesSection;