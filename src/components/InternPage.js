import React from 'react';
import InternCard from './InternCard';
import internData from '../data/internships.json';

function InternPage() {
  const active = internData.filter((c) => c.isActive);
  const inactive = internData.filter((c) => !c.isActive);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Internships</h1>
        <div className="mt-2 w-12 h-1 bg-cyan-400 rounded-full" />
        <p className="mt-4 text-gray-400 text-sm">
          これまでに経験したインターンシップ・アルバイト
        </p>
      </div>

      {active.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            現在活動中
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {active.map((company) => (
              <InternCard key={company.name} company={company} />
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          過去の経験
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inactive.map((company) => (
            <InternCard key={company.name} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InternPage;
