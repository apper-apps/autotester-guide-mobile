import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationItem from "@/components/molecules/NavigationItem";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const StickyNavigation = ({ 
  steps, 
  currentStep, 
  completedSteps, 
  onStepClick
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (stepId) => {
    const element = document.getElementById(`step-${stepId}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
{/* Logo */}
              <div className="flex items-center">
                <div className="font-bold text-lg gradient-text">AutoTester</div>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-2">
                {steps.map((step) => (
                  <NavigationItem
                    key={step.id}
                    step={step}
                    isActive={currentStep === parseInt(step.id)}
                    isCompleted={completedSteps.includes(parseInt(step.id))}
                    onClick={scrollToStep}
                    className="text-xs px-2 py-1"
                  />
                ))}
              </div>

{/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="lg:hidden border-t border-gray-200 py-4 overflow-hidden"
                >
                  <div className="space-y-2">
                    {steps.map((step) => (
                      <NavigationItem
                        key={step.id}
                        step={step}
                        isActive={currentStep === parseInt(step.id)}
                        isCompleted={completedSteps.includes(parseInt(step.id))}
                        onClick={scrollToStep}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default StickyNavigation;