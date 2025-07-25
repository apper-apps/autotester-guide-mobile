import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
const BestPracticesSection = () => {
  const practices = [
    {
      icon: "Target",
      title: "Start Simple",
      description: "Begin with your most critical user flows before expanding to complex scenarios"
    },
    {
      icon: "CheckSquare",
      title: "Be Thorough",
      description: "Complete entire workflows during recording to capture all necessary steps"
    },
    {
      icon: "Layers",
      title: "Test Systematically", 
      description: "Focus on one feature at a time to maintain organized test coverage"
    },
    {
      icon: "RefreshCw",
      title: "Review Regularly",
      description: "Keep tests updated as your application changes and evolves"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Best Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these guidelines to get the most out of AutoTester and create reliable, maintainable tests
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={practice.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {practice.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {practice.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Success message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-success-50 to-primary-50 border-success-200 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Trophy" size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Congratulations! 🎉
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You now have everything you need to create comprehensive automated tests for your web application. 
              Start with a simple workflow and gradually expand your test coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center space-x-2">
                <ApperIcon name="ExternalLink" size={16} />
                <span>Open AutoTester Extension</span>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <ApperIcon name="BookOpen" size={16} />
                <span>View Documentation</span>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default BestPracticesSection;