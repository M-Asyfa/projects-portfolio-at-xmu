import React from 'react';
import DarkModeToggle from "./components/DarkModeToggle";
import AboutMe from './components/AboutMe';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "New Branch Delivery System – Bank Mandiri",
    description:
        "Contributed to the development of backend APIs that support branch-level transaction features as part of a larger new branch deployment system at Bank Mandiri.",
    techStack: ["Java", "Spring Boot", "Oracle Database"],
    highlights: [
      "Participated in developing and testing API endpoints",
      "Assisted in integrating with existing banking systems",
      "Ensured code met internal standards for security and performance",
    ],
  },
  {
    name: "Credit Integrated Application – Bank Mega",
    description:
        "Contributed to the development of a credit submission system using Joget, a low-code application platform designed to rapidly build enterprise-grade web apps. The system streamlined credit application processing by digitizing manual workflows and approval steps at Bank Mega.",
    techStack: ["Joget Workflow", "JavaScript", "MySQL"],
    highlights: [
      "Built and customized forms, data models, and multi-step approval workflows using Joget's visual builder",
      "Integrated custom business logic and validation rules via JavaScript",
      "Enabled faster application delivery by leveraging low-code tools for automation and process management",
      "Improved operational efficiency by reducing manual errors and turnaround time",
    ],
  },
  {
    name: "Loan Management System Retail (Credit Card Section) – Bank BNI",
    description:
        "Contributed to the development of a credit card submission module within a larger loan management system at Bank BNI. The system was built using Newgen, a low-code enterprise platform, to automate and manage the end-to-end credit card application process.",
    techStack: ["Newgen Software", "Java", "Oracle Database"],
    highlights: [
      "Designed and configured workflows, forms, and validation logic for credit card submissions using Newgen's visual development tools",
      "Assisted in integrating the module with backend systems using Java and Oracle",
      "Helped streamline credit card processing by reducing manual steps and improving data consistency",
      "Supported testing and enhancements based on user and compliance feedback",
    ],
  },
];

// Simple Card component
function Card({ children, className = "" }) {
  return (
      <div className={"bg-white rounded-2xl shadow-lg p-6 " + className}>
        {children}
      </div>
  );
}

// Simple Badge component
function Badge({ children }) {
  return (
      <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
      {children}
    </span>
  );
}

export default function App() {
  return (
      <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-12 text-center max-w-4xl">
          Muhammad Asyfa Dwi Adzkiya – Projects Portfolio
        </h1>

        {/* 👉 About Me Section */}
        <div className="max-w-4xl w-full mb-16">
          <AboutMe/>
        </div>

        <div className="max-w-4xl w-full space-y-10">
          {projects.map((project, idx) => (
              <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
              >
                <Card>
                  <h2 className="text-xl font-semibold mb-3">{project.name}</h2>
                  <p className="mb-4 text-gray-700">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.techStack.map((tech, i) => (
                        <Badge key={i}>{tech}</Badge>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
          ))}
        </div>
      </div>
  );
}