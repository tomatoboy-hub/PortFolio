import React from 'react';
import { motion } from 'framer-motion';
import InternCard from './InternCard';
import internData from '../data/internships.json';
import PageTransition from './PageTransition';
import { staggerContainer, fadeInUp } from './PageTransition';

function InternPage() {
  const active = internData.filter((c) => c.isActive);
  const inactive = internData.filter((c) => !c.isActive);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Internships</h1>
          <div className="mt-2 w-12 h-1 bg-cyan-400 rounded-full" />
          <p className="mt-4 text-gray-400 text-sm">
            これまでに経験したインターンシップ・アルバイト
          </p>
        </motion.div>

        {active.length > 0 && (
          <div className="mb-8">
            <motion.h2
              className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              現在活動中
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {active.map((company, i) => (
                <motion.div key={company.name} variants={fadeInUp} custom={i}>
                  <InternCard company={company} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        <div>
          <motion.h2
            className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            過去の経験
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {inactive.map((company, i) => (
              <motion.div key={company.name} variants={fadeInUp} custom={i}>
                <InternCard company={company} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

export default InternPage;
