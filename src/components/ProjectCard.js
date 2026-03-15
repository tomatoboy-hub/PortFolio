import React, { useState } from 'react';
import { FiExternalLink, FiX, FiAward } from 'react-icons/fi';

const gradientMap = {
  blue:    'from-blue-600 to-blue-800',
  cyan:    'from-cyan-500 to-blue-700',
  teal:    'from-teal-500 to-cyan-700',
  green:   'from-green-500 to-teal-700',
  emerald: 'from-emerald-500 to-green-700',
  purple:  'from-purple-600 to-indigo-700',
  violet:  'from-violet-600 to-purple-800',
  indigo:  'from-indigo-600 to-violet-700',
  pink:    'from-pink-500 to-rose-700',
  orange:  'from-orange-500 to-amber-700',
};

function CardThumbnail({ imgSrc, icon, color, title, award }) {
  const gradient = gradientMap[color] || gradientMap.cyan;

  return (
    <div className="aspect-video overflow-hidden relative">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
          {/* subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <span className="text-5xl select-none drop-shadow-lg">{icon || '🗂️'}</span>
        </div>
      )}
      {award && (
        <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-400/90 text-slate-900 text-xs font-bold shadow">
          <FiAward className="w-3 h-3 flex-shrink-0" />
          <span className="truncate max-w-[180px]">{award}</span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ imgSrc, icon, color, title, text, link, award }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group cursor-pointer hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300 flex flex-col"
        onClick={() => setShowModal(true)}
      >
        <CardThumbnail imgSrc={imgSrc} icon={icon} color={color} title={title} award={award} />

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">{text}</p>
          <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm font-medium">
            <span>詳細を見る</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-t-2xl overflow-hidden">
              <CardThumbnail imgSrc={imgSrc} icon={icon} color={color} title={title} award={award} />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-white leading-snug pr-4">{title}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700 transition-colors flex-shrink-0"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm transition-colors"
                >
                  リンクを開く
                  <FiExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
