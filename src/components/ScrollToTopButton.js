import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="ページトップへ戻る"
      className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-slate-700 shadow-lg transition-all duration-300 flex items-center justify-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <FiArrowUp className="w-4 h-4" />
    </button>
  );
}

export default ScrollToTopButton;
