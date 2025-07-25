import stepsData from "@/services/mockData/steps.json";
import prerequisitesData from "@/services/mockData/prerequisites.json";

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const guideService = {
  // Get all steps
  async getSteps() {
    await delay(300);
    return [...stepsData];
  },

  // Get step by Id
  async getStepById(id) {
    await delay(200);
    const step = stepsData.find(s => s.Id === parseInt(id));
    if (!step) {
      throw new Error(`Step with Id ${id} not found`);
    }
    return { ...step };
  },

  // Get all prerequisites
  async getPrerequisites() {
    await delay(250);
    return [...prerequisitesData];
  },

  // Get prerequisite by Id
  async getPrerequisiteById(id) {
    await delay(200);
    const prerequisite = prerequisitesData.find(p => p.Id === parseInt(id));
    if (!prerequisite) {
      throw new Error(`Prerequisite with Id ${id} not found`);
    }
    return { ...prerequisite };
  }
};