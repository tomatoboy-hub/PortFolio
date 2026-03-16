import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectGrid from './ProjectGrid';
import projectData from '../data/projects.json';
import PageTransition from './PageTransition';

const tabs = [
  { id: 'Python', label: 'Python', icon: '🐍' },
  { id: 'Next.js / React', label: 'Next.js / React', icon: '⚛️' },
  { id: 'Flutter', label: 'Flutter', icon: '💙' },
  { id: 'Unity', label: 'Unity', icon: '🎮' },
  { id: '研究', label: '研究・論文', icon: '🔬' },
];

function ProjectPage() {
  const [activeTab, setActiveTab] = useState('Python');

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Projects</h1>
          <div className="mt-2 w-12 h-1 bg-cyan-400 rounded-full" />
          <p className="mt-4 text-gray-400 text-sm">
            使用技術・カテゴリ別にプロジェクトを分類しています
          </p>
        </motion.div>

        <motion.div
          className="flex overflow-x-auto gap-2 pb-1 mb-8 scrollbar-hide"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {tabs.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                activeTab === id
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-800/60 text-gray-400 hover:text-white hover:bg-slate-700/60 border border-slate-700/50'
              }`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ProjectGrid projects={projectData[activeTab]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}

export default ProjectPage;
