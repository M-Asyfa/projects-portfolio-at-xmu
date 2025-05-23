import React from 'react';
import AboutMe from './components/AboutMe';
import projects from './data/projects';
import { Card } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import ThemeToggle from "./components/ThemeToggle";
import { motion } from 'framer-motion';

export default function App() {
  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 flex flex-col items-center transition-colors">
        <ThemeToggle />
        <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-12 text-center max-w-4xl text-gray-800 dark:text-white">
          Muhammad Asyfa Dwi Adzkiya – Brief Portfolio
        </h1>

        <AboutMe />

        <p className="text-xl font-medium text-center text-gray-700 dark:text-gray-200 mb-12">
          Here are some of the projects I’ve been involved in.
        </p>


          <section className="max-w-4xl w-full space-y-10">
          {projects.map((project, idx) => (
              <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    {project.name}
                  </h2>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.techStack.map((tech, i) => (
                        <Badge
                            key={i}
                            className="text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500"
                        >
                          {tech}
                        </Badge>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    {project.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
          ))}
        </section>
        </main>
      </div>
  );
}