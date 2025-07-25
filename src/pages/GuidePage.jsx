import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import HeroSection from "@/components/organisms/HeroSection";
import StickyNavigation from "@/components/organisms/StickyNavigation";
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
    currentStep,
    expandedSteps,
    totalProgress,
    markStepComplete,
    toggleStepExpansion,
    updateCurrentStep,
    isStepCompleted,
    isStepExpanded
  } = useProgress(6);

  // Prerequisites state
  const [prerequisiteChecks, setPrerequisiteChecks] = useLocalStorage("autoTesterPrerequisites", {});

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
      setPrerequisites(prerequisitesData.map(p => ({
        ...p,
        isChecked: prerequisiteChecks[p.Id] || false
      })));
      
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

  // Update prerequisites when checks change
  useEffect(() => {
    setPrerequisites(prev => prev.map(p => ({
      ...p,
      isChecked: prerequisiteChecks[p.Id] || false
    })));
  }, [prerequisiteChecks]);

  // Handle prerequisite toggle
  const handleTogglePrerequisite = (id) => {
    const newChecks = {
      ...prerequisiteChecks,
      [id]: !prerequisiteChecks[id]
    };
    setPrerequisiteChecks(newChecks);
    
    if (newChecks[id]) {
      toast.success("Prerequisite completed!", { autoClose: 2000 });
    }
  };

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

  // Handle scroll-based current step detection
  useEffect(() => {
    const handleScroll = () => {
      const stepElements = steps.map(step => ({
        id: step.Id,
        element: document.getElementById(`step-${step.Id}`)
      })).filter(item => item.element);

      const scrollPosition = window.scrollY + 200;
      
      for (let i = stepElements.length - 1; i >= 0; i--) {
        const { id, element } = stepElements[i];
        if (element.offsetTop <= scrollPosition) {
          updateCurrentStep(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps, updateCurrentStep]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadData} />;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection onStartGuide={handleStartGuide} />
      
{/* Sticky Navigation */}
      <StickyNavigation
        steps={steps}
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={updateCurrentStep}
      />
      {/* Prerequisites Section */}
      <PrerequisitesSection
        prerequisites={prerequisites}
        onTogglePrerequisite={handleTogglePrerequisite}
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