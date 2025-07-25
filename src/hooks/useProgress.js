import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useProgress = (totalSteps = 6) => {
  const [completedSteps, setCompletedSteps] = useLocalStorage("autoTesterCompletedSteps", []);
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedSteps, setExpandedSteps] = useState([1]); // First step expanded by default

  // Calculate total progress percentage
  const totalProgress = (completedSteps.length / totalSteps) * 100;

  // Mark a step as complete
  const markStepComplete = (stepId) => {
    const stepNumber = parseInt(stepId);
    if (!completedSteps.includes(stepNumber)) {
      const newCompletedSteps = [...completedSteps, stepNumber].sort((a, b) => a - b);
      setCompletedSteps(newCompletedSteps);
      
      // Auto-expand next step if available
      const nextStep = stepNumber + 1;
      if (nextStep <= totalSteps && !expandedSteps.includes(nextStep)) {
        setExpandedSteps(prev => [...prev, nextStep]);
      }
    }
  };

  // Toggle step expansion
  const toggleStepExpansion = (stepId) => {
    const stepNumber = parseInt(stepId);
    setExpandedSteps(prev => 
      prev.includes(stepNumber) 
        ? prev.filter(id => id !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  // Update current step based on scroll position
  const updateCurrentStep = (stepId) => {
    setCurrentStep(parseInt(stepId));
  };

  // Reset progress
  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset your progress? This action cannot be undone.")) {
      setCompletedSteps([]);
      setExpandedSteps([1]);
      setCurrentStep(1);
    }
  };

  // Auto-update current step based on completed steps
  useEffect(() => {
    if (completedSteps.length > 0) {
      const lastCompleted = Math.max(...completedSteps);
      const nextStep = Math.min(lastCompleted + 1, totalSteps);
      setCurrentStep(nextStep);
    }
  }, [completedSteps, totalSteps]);

  return {
    completedSteps,
    currentStep,
    expandedSteps,
    totalProgress,
    markStepComplete,
    toggleStepExpansion,
    updateCurrentStep,
    resetProgress,
    isStepCompleted: (stepId) => completedSteps.includes(parseInt(stepId)),
    isStepExpanded: (stepId) => expandedSteps.includes(parseInt(stepId))
  };
};