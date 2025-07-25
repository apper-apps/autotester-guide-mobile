import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import PrerequisiteItem from "@/components/molecules/PrerequisiteItem";
import ApperIcon from "@/components/ApperIcon";

const PrerequisitesSection = ({ prerequisites }) => {
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <ApperIcon name="Info" size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Prerequisites</h3>
                <p className="text-gray-600">
                  What you'll need to follow along
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {prerequisites.map((prerequisite) => (
                <div
                  key={prerequisite.Id}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                >
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ApperIcon name="ArrowRight" size={12} className="text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {prerequisite.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {prerequisite.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PrerequisitesSection;