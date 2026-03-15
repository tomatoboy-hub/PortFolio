import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import projectData from '../data/projects.json';

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Projects</h1>
        <div className="mt-2 w-12 h-1 bg-cyan-400 rounded-full" />
        <p className="mt-4 text-gray-400 text-sm">
          使用技術・カテゴリ別にプロジェクトを分類しています
        </p>
      </div>

      <div className="flex overflow-x-auto gap-2 pb-1 mb-8 scrollbar-hide">
        {tabs.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
              activeTab === id
                ? 'bg-cyan-500 text-slate-900'
                : 'bg-slate-800/60 text-gray-400 hover:text-white hover:bg-slate-700/60 border border-slate-700/50'
            }`}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </div>

      <div>
        <ProjectGrid projects={projectData[activeTab]} />
      </div>
    </div>
  );
}

export default ProjectPage;
