import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { staggerContainer, fadeInUp } from './PageTransition';

function ProjectGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-gray-500 text-sm">プロジェクトは準備中です</p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, i) => (
        <motion.div key={i} variants={fadeInUp} custom={i}>
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectGrid;
