import React from 'react';
import { FiBriefcase, FiCalendar, FiCheckCircle, FiTag, FiAward } from 'react-icons/fi';

function InternCard({ company }) {
  const isActive = company.isActive;

  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
            <FiBriefcase className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base leading-tight">{company.name}</h3>
            <p className="text-cyan-400 text-xs mt-0.5">{company.role}</p>
          </div>
        </div>
        <span
          className={`ml-2 flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${
            isActive
              ? 'bg-green-400/10 text-green-400 border border-green-400/20'
              : 'bg-slate-700/60 text-gray-500 border border-slate-600/50'
          }`}
        >
          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
          {isActive ? '在籍中' : '退社'}
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-400">
        <FiCalendar className="w-4 h-4 text-slate-500 flex-shrink-0" />
        <span>
          {company.start}
          {isActive ? ' 〜 現在' : company.end ? ` 〜 ${company.end}` : ''}
        </span>
      </div>

      {company.achievements && company.achievements.length > 0 && (
        <div className="flex flex-col gap-1.5">
          {company.achievements.map((a) => (
            <div
              key={a}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-medium w-fit"
            >
              <FiAward className="w-3 h-3 flex-shrink-0" />
              {a}
            </div>
          ))}
        </div>
      )}

      {company.tags && company.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {company.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-700/60 text-gray-400 text-xs border border-slate-600/50"
            >
              <FiTag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-start gap-2 pt-3 border-t border-slate-700/50">
        <FiCheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
        <p className="text-gray-300 text-sm leading-relaxed">{company.content}</p>
      </div>
    </div>
  );
}

export default InternCard;
