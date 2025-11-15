import React from "react";
import { PROJECTS, CONTACT } from "../../constants/index";
import { motion } from "framer-motion";
function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Show image without link - all demos are archived */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded opacity-90"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {/* All repositories are now private/archived */}
              <div className="mb-4 block text-neutral-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-800/50 rounded-md text-sm border border-neutral-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Repository Archived
                </span>
              </div>
              {project.technologies.map((tech, index) => {
                return (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
