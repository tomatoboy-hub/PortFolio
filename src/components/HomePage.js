import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLottie } from 'lottie-react';
import animationData from '../assets/hero-animation.json';
import PageTransition from './PageTransition';

const heroVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const skills = [
  { label: 'Python', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { label: 'React / Next.js', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  { label: 'Flutter', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
  { label: 'AI / ML', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  { label: 'LLM / 因果推論', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
];

const badges = [
  { label: 'TOEIC 925', icon: '📝' },
  { label: 'DBスペシャリスト', icon: '🗄️' },
  { label: 'ハウテレビジョン優勝', icon: '🏆' },
  { label: '人工知能学会 論文採択', icon: '📄' },
  { label: 'SIGNATE 銅メダル', icon: '🥉' },
  { label: 'AtCoder 緑', icon: '💻' },
];

function HomePage() {
  const { View } = useLottie({ animationData, loop: true, autoplay: true });

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <section className="flex-1 flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-12">
          <motion.div
            className="flex-1 flex flex-col items-start gap-6"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              東京科学大学 情報理工学院 修士1年 / 産総研 AI研究センター
            </motion.div>

            <motion.div variants={heroItem}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                清水 駿太
              </h1>
              <p className="mt-1 text-xl sm:text-2xl font-light text-cyan-400 tracking-widest">
                Hayata Shimizu
              </p>
            </motion.div>

            <motion.p
              variants={heroItem}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md"
            >
              AI 研究とプロダクト開発、ビジネスの三軸を横断するエンジニア。
              東京科学大学 修士課程・産総研 AI 研究センターで因果推論を研究しながら、
              DeNA・楽天など国内トップ企業のインターンで実装力を磨いてきた。
              人工知能学会 論文2本採択、ハッカソン複数優勝・入賞の実績あり。
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap gap-3">
              <Link
                to="/project"
                className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Projects を見る
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 rounded-lg border border-slate-600 hover:border-cyan-400/50 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-slate-800"
              >
                About
              </Link>
            </motion.div>

            <motion.div variants={heroItem} className="flex flex-wrap gap-2 pt-1">
              {skills.map(({ label, color }) => (
                <span
                  key={label}
                  className={`px-3 py-1 rounded-full border text-xs font-medium ${color}`}
                >
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div variants={heroItem} className="flex flex-wrap gap-4 pt-1">
              {badges.map(({ label, icon }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="w-full max-w-sm lg:max-w-md opacity-90">
              {View}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}

export default HomePage;
