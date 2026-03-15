import React from 'react';
import Timeline from './Timeline';
import profileImage from '../assets/face.JPG';

const techStack = [
  { name: 'Python', level: 90 },
  { name: 'React / Next.js', level: 75 },
  { name: 'Flutter / Dart', level: 70 },
  { name: 'Unity / C#', level: 55 },
  { name: 'SQL / BigQuery', level: 65 },
];

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-cyan-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

const awards = [
  { year: '2025年', title: 'SIGNATE Axell AI Contest 2025\n銅メダル（物体検出）' },
  { year: '2025年 5月', title: '人工知能学会全国大会\n論文2本採択' },
  { year: '2025年 3月', title: 'ハウテレビジョンハッカソン 優勝' },
  { year: '2024年 2月', title: '技育CAMP vol.7 メディアドゥ賞' },
  { year: '2024年 2月', title: '技育キャンプ vol.14 努力賞' },
  { year: '2023年 9月', title: '技育キャンプアドバンス vol.3\nサイバーエージェント賞' },
  { year: '2023年', title: 'チャットプラス主催\nチャットボットコンテスト 特別賞' },
];

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">About</h1>
        <div className="mt-2 w-12 h-1 bg-cyan-400 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <img
                src={profileImage}
                alt="清水駿太"
                className="w-36 h-36 rounded-full object-cover border-4 border-slate-700 shadow-xl"
              />
              <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-slate-800" />
            </div>
            <h2 className="text-xl font-bold text-white">清水 駿太</h2>
            <p className="text-cyan-400 text-sm font-medium mt-0.5">Hayata Shimizu</p>
            <div className="mt-3 text-gray-400 text-sm leading-relaxed">
              <p>東京科学大学<br />情報理工学院 知能情報コース<br />修士1年</p>
              <p className="text-xs text-gray-500 mt-1.5">
                産業技術総合研究所<br />AI研究センター テクニカルスタッフ
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-base font-semibold text-white mb-4">専攻・興味</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'AI / 機械学習', '深層学習', '因果推論', '自然言語処理',
                'LLM', 'Web開発', 'モバイル開発', 'AR', 'データ分析',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-slate-700/60 text-gray-300 text-xs border border-slate-600/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-base font-semibold text-white mb-4">技術スタック</h3>
            <div className="flex flex-col gap-3">
              {techStack.map((item) => (
                <SkillBar key={item.name} name={item.name} level={item.level} />
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-xs text-gray-500 mb-2">その他</p>
              <div className="flex flex-wrap gap-1.5">
                {['GCP', 'BigQuery', 'Looker', 'OpenCV', 'SAM', 'LangChain', 'llama-index'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-700/60 text-gray-400 text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-base font-semibold text-white mb-4">受賞歴</h3>
            <div className="flex flex-col gap-3">
              {awards.map((award) => (
                <div key={award.title} className="flex items-start gap-3">
                  <span className="text-yellow-400 text-base leading-none mt-0.5 flex-shrink-0">🏆</span>
                  <div>
                    <p className="text-xs text-gray-500">{award.year}</p>
                    <p className="text-gray-300 text-sm font-medium whitespace-pre-line">{award.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-base font-semibold text-white mb-4">競技プログラミング</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                <span className="text-green-400 font-bold text-sm">AC</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">AtCoder 緑色</p>
                <p className="text-gray-400 text-xs">Highest 812</p>
              </div>
              <a
                href="https://atcoder.jp/users/tomatoboy"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-cyan-400 text-xs hover:underline"
              >
                プロフィール →
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">自己紹介</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              慶應義塾大学 理工学部 情報工学科を経て、東京科学大学（旧東京工業大学）大学院
              知能情報コースへ進学。現在は産業技術総合研究所（AIST）AI 研究センターにて
              テクニカルスタッフを兼務し、因果推論・機械学習を軸とした研究に取り組んでいます。
              2025年 人工知能学会全国大会に論文2本が採択（うち1本は主著）。
            </p>
            <p className="text-gray-300 leading-relaxed text-sm mt-3">
              インターンでは DeNA・楽天・Nospare など多様な企業で経験を積みました。
              楽天では英語オンリーのグローバルチームで AI エージェント開発に携わり、
              Nospare では PdM として Amazon 広告運用の自動化を牽引し担当商品売上を約 2.5 倍に伸長。
              技術だけでなく、ビジネス課題を起点に考える視点を大切にしています。
            </p>
            <p className="text-gray-300 leading-relaxed text-sm mt-3">
              開発面では LLM・画像認識から Flutter・Next.js・Unity（AR）まで幅広く経験があり、
              ハウテレビジョンハッカソン優勝をはじめ複数の受賞実績があります。
              TOEIC 925 点・データベーススペシャリスト・統計検定準1級なども保有しており、
              研究・開発・英語の三軸で高い水準を目指しています。
            </p>
          </div>

          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
