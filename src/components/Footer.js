import React from 'react';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { SiWantedly } from 'react-icons/si';

const socialLinks = [
  {
    href: 'https://twitter.com/tomato_boy77',
    icon: FiTwitter,
    label: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/hayata_mizumizu/',
    icon: FiInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.wantedly.com/id/hayata_shimizu',
    icon: SiWantedly,
    label: 'Wantedly',
  },
];

function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold">清水 駿太</p>
            <p className="text-gray-500 text-xs mt-0.5">東京科学大学 情報理工学院 修士1年 / 産総研 AI研究センター</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-slate-700 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Hayata Shimizu
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
