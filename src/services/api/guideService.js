import stepsData from "@/services/mockData/steps.json";
import prerequisitesData from "@/services/mockData/prerequisites.json";

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// AI Analysis Engine
const aiAnalysisEngine = {
  // Analyze user recording for workflow patterns
  async analyzeRecording(recordingData) {
    await delay(1500);
    
    const analysisResult = {
      userInteractions: [
        { type: 'click', element: 'button#submit', timestamp: 1234567890 },
        { type: 'input', element: 'input[name="email"]', value: 'user@example.com', timestamp: 1234567891 },
        { type: 'navigation', from: '/login', to: '/dashboard', timestamp: 1234567892 }
      ],
      validationPoints: [
        { field: 'email', rules: ['required', 'email'], priority: 'high' },
        { field: 'password', rules: ['required', 'minLength:8'], priority: 'high' },
        { field: 'confirmPassword', rules: ['required', 'match:password'], priority: 'medium' }
      ],
      userFlows: [
        { name: 'Login Flow', steps: ['navigate to login', 'enter credentials', 'submit form', 'redirect to dashboard'] },
        { name: 'Registration Flow', steps: ['fill user details', 'validate inputs', 'create account', 'verify email'] }
      ],
      crossBrowserElements: [
        { selector: 'input[type="date"]', browserIssues: ['Safari iOS date picker'] },
        { selector: '.custom-dropdown', browserIssues: ['IE11 flexbox support'] }
      ]
    };
    
    return analysisResult;
  },

  // Generate comprehensive test scenarios
  async generateTestScenarios(analysisData) {
    await delay(2000);
    
    return {
      positiveTests: [
        {
          Id: 1,
          name: 'Valid User Login',
          description: 'Test successful login with valid credentials',
          steps: [
            'Navigate to login page',
            'Enter valid email address',
            'Enter valid password',
            'Click login button',
            'Verify successful redirect to dashboard'
          ],
          expectedResult: 'User successfully logged in and redirected to dashboard',
          priority: 'high'
        },
        {
          Id: 2,
          name: 'Form Submission Success',
          description: 'Test successful form submission with all required fields',
          steps: [
            'Fill all required form fields with valid data',
            'Submit form',
            'Verify success message appears',
            'Verify data is saved correctly'
          ],
          expectedResult: 'Form submitted successfully with confirmation message',
          priority: 'high'
        }
      ],
      negativeTests: [
        {
          Id: 3,
          name: 'Invalid Email Format',
          description: 'Test login with invalid email format',
          steps: [
            'Navigate to login page',
            'Enter invalid email format (e.g., "invalid-email")',
            'Enter valid password',
            'Click login button',
            'Verify error message appears'
          ],
          expectedResult: 'Error message displayed for invalid email format',
          priority: 'high'
        },
        {
          Id: 4,
          name: 'Empty Required Fields',
          description: 'Test form submission with empty required fields',
          steps: [
            'Navigate to form',
            'Leave required fields empty',
            'Attempt to submit form',
            'Verify validation errors appear'
          ],
          expectedResult: 'Validation errors displayed for empty required fields',
          priority: 'medium'
        }
      ],
      edgeCases: [
        {
          Id: 5,
          name: 'Maximum Input Length',
          description: 'Test input fields with maximum allowed characters',
          steps: [
            'Enter text at maximum character limit',
            'Verify input accepts the text',
            'Attempt to enter one more character',
            'Verify character limit enforcement'
          ],
          expectedResult: 'Input correctly handles maximum character limit',
          priority: 'medium'
        },
        {
          Id: 6,
          name: 'Special Characters Handling',
          description: 'Test input fields with special characters and unicode',
          steps: [
            'Enter special characters (!@#$%^&*)',
            'Enter unicode characters (emojis, accented letters)',
            'Submit form',
            'Verify proper handling and storage'
          ],
          expectedResult: 'Special characters handled correctly without errors',
          priority: 'low'
        }
      ],
      formValidationTests: [
        {
          Id: 7,
          name: 'Email Validation Tests',
          description: 'Comprehensive email field validation testing',
          scenarios: [
            { input: 'user@domain.com', expected: 'valid' },
            { input: 'invalid-email', expected: 'invalid' },
            { input: '@domain.com', expected: 'invalid' },
            { input: 'user@', expected: 'invalid' },
            { input: '', expected: 'required field error' }
          ],
          priority: 'high'
        },
        {
          Id: 8,
          name: 'Password Strength Validation',
          description: 'Test password field validation rules',
          scenarios: [
            { input: 'StrongP@ss123', expected: 'valid' },
            { input: '123', expected: 'too short' },
            { input: 'password', expected: 'too weak' },
            { input: '', expected: 'required field error' }
          ],
          priority: 'high'
        }
      ],
      navigationTests: [
        {
          Id: 9,
          name: 'User Journey Flow',
          description: 'Test complete user journey from start to finish',
          steps: [
            'Start at homepage',
            'Navigate to registration',
            'Complete registration process',
            'Verify email confirmation',
            'Login with new account',
            'Complete onboarding flow',
            'Access main application features'
          ],
          expectedResult: 'User successfully completes entire onboarding journey',
          priority: 'high'
        },
        {
          Id: 10,
          name: 'Navigation Accessibility',
          description: 'Test navigation using keyboard and screen readers',
          steps: [
            'Navigate using Tab key only',
            'Test focus indicators on interactive elements',
            'Verify ARIA labels and roles',
            'Test with screen reader software'
          ],
          expectedResult: 'All navigation accessible via keyboard and assistive technologies',
          priority: 'medium'
        }
      ],
      crossBrowserTests: [
        {
          Id: 11,
          name: 'Chrome Desktop Compatibility',
          description: 'Test application functionality in Chrome desktop',
          browsers: ['Chrome 120+'],
          testAreas: ['Form submissions', 'JavaScript functionality', 'CSS rendering', 'File uploads'],
          priority: 'high'
        },
        {
          Id: 12,
          name: 'Safari iOS Compatibility',
          description: 'Test mobile Safari specific behaviors',
          browsers: ['Safari iOS 16+'],
          testAreas: ['Touch interactions', 'Date pickers', 'File inputs', 'Viewport handling'],
          specialConsiderations: ['iOS Safari date picker differences', 'Touch event handling'],
          priority: 'high'
        },
        {
          Id: 13,
          name: 'Firefox Cross-Platform',
          description: 'Test Firefox compatibility across platforms',
          browsers: ['Firefox 115+'],
          testAreas: ['Form validation', 'CSS Grid/Flexbox', 'WebAPI support'],
          priority: 'medium'
        },
        {
          Id: 14,
          name: 'Edge Chromium Compatibility',
          description: 'Test Microsoft Edge specific behaviors',
          browsers: ['Edge 120+'],
          testAreas: ['Legacy IE mode compatibility', 'Windows-specific features'],
          priority: 'medium'
        }
      ]
    };
  }
};

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
  },

  // AI-powered recording analysis
  async analyzeUserRecording(recordingFile) {
    if (!recordingFile) {
      throw new Error('Recording file is required for analysis');
    }
    
    try {
      // Simulate processing the recording file
      const recordingData = {
        duration: 120000, // 2 minutes
        interactions: recordingFile.size || 1024,
        timestamp: Date.now()
      };
      
      const analysis = await aiAnalysisEngine.analyzeRecording(recordingData);
      return {
        success: true,
        analysis,
        processingTime: '2.3 seconds',
        confidence: 0.94
      };
    } catch (error) {
      throw new Error(`Failed to analyze recording: ${error.message}`);
    }
  },

  // Generate automated test scenarios
  async generateAutomatedTests(analysisData) {
    if (!analysisData) {
      throw new Error('Analysis data is required for test generation');
    }

    try {
      const testScenarios = await aiAnalysisEngine.generateTestScenarios(analysisData);
      
      return {
        success: true,
        testScenarios,
        totalTests: Object.values(testScenarios).flat().length,
        generationTime: '3.7 seconds',
        coverage: {
          positive: testScenarios.positiveTests.length,
          negative: testScenarios.negativeTests.length,
          edgeCases: testScenarios.edgeCases.length,
          formValidation: testScenarios.formValidationTests.length,
          navigation: testScenarios.navigationTests.length,
          crossBrowser: testScenarios.crossBrowserTests.length
        }
      };
    } catch (error) {
      throw new Error(`Failed to generate tests: ${error.message}`);
    }
  },

  // Process validation points
  async processValidationPoints(userInteractions) {
    await delay(800);
    
    const validationPoints = userInteractions.map((interaction, index) => ({
      Id: index + 1,
      type: interaction.type,
      element: interaction.element,
      validationRules: this.generateValidationRules(interaction),
      priority: this.calculatePriority(interaction),
      testCases: this.generateValidationTestCases(interaction)
    }));

    return {
      success: true,
      validationPoints,
      totalRules: validationPoints.reduce((sum, vp) => sum + vp.validationRules.length, 0)
    };
  },

  // Helper method to generate validation rules
  generateValidationRules(interaction) {
    const rules = [];
    
    if (interaction.type === 'input') {
      if (interaction.element.includes('email')) {
        rules.push('email format validation', 'required field validation');
      }
      if (interaction.element.includes('password')) {
        rules.push('minimum length validation', 'complexity requirements');
      }
      if (interaction.element.includes('phone')) {
        rules.push('phone number format', 'country code validation');
      }
    }
    
    if (interaction.type === 'click' && interaction.element.includes('submit')) {
      rules.push('form completeness validation', 'duplicate submission prevention');
    }
    
    return rules.length > 0 ? rules : ['basic interaction validation'];
  },

  // Helper method to calculate priority
  calculatePriority(interaction) {
    if (interaction.element.includes('submit') || interaction.element.includes('login')) {
      return 'high';
    }
    if (interaction.type === 'input' && (interaction.element.includes('email') || interaction.element.includes('password'))) {
      return 'high';
    }
    if (interaction.type === 'navigation') {
      return 'medium';
    }
    return 'low';
  },

  // Helper method to generate validation test cases
  generateValidationTestCases(interaction) {
    const testCases = [];
    
    if (interaction.type === 'input') {
      testCases.push(
        { scenario: 'valid input', expected: 'accepted' },
        { scenario: 'empty input', expected: 'validation error' },
        { scenario: 'invalid format', expected: 'format error' }
      );
    }
    
    if (interaction.type === 'click') {
      testCases.push(
        { scenario: 'single click', expected: 'action performed' },
        { scenario: 'double click prevention', expected: 'no duplicate action' }
      );
    }
    
    return testCases;
  }
};