SauceDemo SQA Assessment & Automation Suite
This repository contains the end-to-end automated UI test suite and Quality Assurance assessment for the SauceDemo (Swag Labs) web application. The automated tests are built using Playwright with TypeScript following the Page Object Model (POM) pattern.
📁 Project Structure
saucedemo-sqa-assessment/
│
├── docs/
│   └── SQA_Assessment_Report.docx   # Comprehensive test assessment and defect report
│
├── evidence/                        # Screenshot evidences of identified defects
│   ├── defect-01.png
│   ├── defect-02.png
│   └── defect-03.png
│
├── pages/                           # Page Object Model (POM) classes
│   ├── cart.page.ts
│   ├── checkout.page.ts
│   ├── inventory.page.ts
│   └── login.page.ts
│
├── tests/                           # End-to-end test scenarios
│   └── checkout.spec.ts
│
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Project scripts and dependencies
└── README.md                        # Documentation


🛠️ Tech Stack & Prerequisites
Language: TypeScript / JavaScript
Test Framework: Playwright (@playwright/test)
Runtime: Node.js (v18 or higher recommended)
Target Application: SauceDemo (Swag Labs)
🚀 Getting Started
1. Clone or Open the Repository
Open the project directory in your terminal or VS Code:
cd saucedemo-sqa-assessment


2. Install Dependencies
Install all required npm packages and Playwright browser binaries:
npm install
npx playwright install


🧪 Running Tests
Run all tests across configured browsers:
npx playwright test


Run tests in headed mode:
npx playwright test --headed


Run a specific test file:
npx playwright test tests/checkout.spec.ts


Run tests on a specific browser (e.g., Chromium):
npx playwright test --project=chromium


📊 Viewing Test Reports
After test execution, launch the interactive Playwright HTML report:
npx playwright show-report


🐞 Defect Evidences & Documentation
Test Report & Assessment: Refer to docs/SQA_Assessment_Report.docx for the detailed defect logs, manual test scenarios, and assessment summary.
Bug Evidences: Captured screenshots for identified defects are organized under the evidence/ folder (defect-01.png, defect-02.png, defect-03.png).
