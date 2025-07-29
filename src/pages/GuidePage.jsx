import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import HeroSection from "@/components/organisms/HeroSection";
import PrerequisitesSection from "@/components/organisms/PrerequisitesSection";
import StepSection from "@/components/organisms/StepSection";
import BestPracticesSection from "@/components/organisms/BestPracticesSection";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { guideService } from "@/services/api/guideService";
import { useProgress } from "@/hooks/useProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const GuidePage = () => {
  const [steps, setSteps] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
// Progress management
  const {
    completedSteps,
    expandedSteps,
    totalProgress,
    markStepComplete,
    toggleStepExpansion,
    isStepCompleted,
    isStepExpanded
} = useProgress(6);

  // Load data
  const loadData = async () => {
    try {
      setLoading(true);
      setError("");
      
      const [stepsData, prerequisitesData] = await Promise.all([
        guideService.getSteps(),
        guideService.getPrerequisites()
      ]);
      
      setSteps(stepsData);
      setPrerequisites(prerequisitesData);
      
    } catch (err) {
      console.error("Error loading guide data:", err);
      setError("Failed to load the guide. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle step completion
  const handleMarkStepComplete = (stepId) => {
    markStepComplete(stepId);
    const step = steps.find(s => s.Id === parseInt(stepId));
    if (step) {
      toast.success(`${step.title} completed! 🎉`, { autoClose: 3000 });
    }
  };

  // Handle start guide button
  const handleStartGuide = () => {
    document.getElementById("prerequisites").scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadData} />;

return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
<nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="font-bold text-xl gradient-text">AutoTester</div>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <HeroSection onStartGuide={handleStartGuide} />
      
{/* Prerequisites Section */}
      <PrerequisitesSection
        prerequisites={prerequisites}
      />
      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Step-by-Step Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these steps to create your first automated test with AutoTester
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step) => (
              <StepSection
                key={step.Id}
                step={step}
                isExpanded={isStepExpanded(step.Id)}
                isCompleted={isStepCompleted(step.Id)}
                onToggle={() => toggleStepExpansion(step.Id)}
                onMarkComplete={handleMarkStepComplete}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Best Practices Section */}
      <BestPracticesSection />
    </div>
  );
};

export default GuidePage;