import React from 'react';

const education = [
  { year: '2021年 4月', event: '慶應義塾大学 理工学部 情報工学科 入学' },
  { year: '2025年 3月', event: '慶應義塾大学 理工学部 情報工学科 卒業' },
  { year: '2025年 4月', event: '東京科学大学 情報理工学院 知能情報コース 入学（修士）', isCurrent: true },
];

const work = [
  { year: '2021年 4月', event: '東進衛星予備校 学生チューター 入社' },
  { year: '2023年 6月', event: '鶴見有職株式会社 コンサルタントインターン 入社' },
  { year: '2023年 6月', event: '株式会社AVILEN AIエンジニアインターン 入社' },
  { year: '2023年 7月', event: '株式会社STANDARD AIエンジニアインターン 入社' },
  { year: '2023年 7月', event: '東進衛星予備校 退社' },
  { year: '2023年 9月', event: '株式会社STANDARD 退社' },
  { year: '2024年 3月', event: '株式会社AVILEN 退社 / 株式会社Nospare PdMインターン 入社' },
  { year: '2024年 6月', event: '鶴見有職株式会社 退社' },
  { year: '2024年 9月', event: '株式会社Nospare 退社' },
  { year: '2024年 11月', event: '産業技術総合研究所 AI研究センター テクニカルスタッフ 入所', isCurrent: true },
  { year: '2025年 8月', event: '株式会社ディー・エヌ・エー エンジニアインターン 入社' },
  { year: '2025年 9月', event: '株式会社ディー・エヌ・エー 退社' },
  { year: '2025年 10月', event: '楽天株式会社 AIエンジニアインターン 入社' },
  { year: '2025年 10月', event: '楽天株式会社 退社', isCurrent: true },
];

const skills = [
  { year: '2019年 6月', event: '英検 準一級 取得' },
  { year: '2022年 6月', event: '統計検定 2級 取得' },
  { year: '2022年 6月', event: 'AWS SAA 取得' },
  { year: '2023年 6月', event: '応用情報技術者試験 合格' },
  { year: '2023年 9月', event: '技育キャンプアドバンス vol.3 サイバーエージェント賞 受賞' },
  { year: '2023年 9月', event: '統計検定 準1級 取得' },
  { year: '2023年 11月', event: 'TOEIC 925点 取得' },
  { year: '2024年 2月', event: '技育キャンプ vol.14 努力賞 受賞（Stack Tacular）' },
  { year: '2024年 2月', event: '技育CAMP vol.7 メディアドゥ賞 受賞（Latify）' },
  { year: '2024年 12月', event: 'データベーススペシャリスト 合格' },
  { year: '2025年 3月', event: 'ハウテレビジョンハッカソン 優勝', isCurrent: true },
  { year: '2025年 5月', event: '人工知能学会全国大会 論文2本 採択', isCurrent: true },
  { year: '2025年', event: 'SIGNATE Axell AI Contest 2025 銅メダル', isCurrent: true },
];

function TimelineItem({ year, event, isLast, isCurrent }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full border-2 border-slate-900 ring-2 mt-0.5 flex-shrink-0 ${
            isCurrent
              ? 'bg-green-400 ring-green-400/40'
              : 'bg-cyan-400 ring-cyan-400/30'
          }`}
        />
        {!isLast && <div className="w-0.5 flex-1 bg-slate-700 mt-1" />}
      </div>
      <div className="pb-5">
        <p className={`text-xs font-medium mb-0.5 ${isCurrent ? 'text-green-400/80' : 'text-cyan-400/80'}`}>
          {year}
        </p>
        <p className={`text-sm ${isCurrent ? 'text-white font-medium' : 'text-gray-200'}`}>
          {event}
          {isCurrent && (
            <span className="ml-2 inline-flex items-center gap-1 text-xs text-green-400 font-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              注目
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

function TimelineSection({ title, icon, items }) {
  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        {title}
      </h3>
      <div>
        {items.map((item, i) => (
          <TimelineItem
            key={i}
            year={item.year}
            event={item.event}
            isLast={i === items.length - 1}
            isCurrent={item.isCurrent}
          />
        ))}
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      <TimelineSection title="学歴" icon="🎓" items={education} />
      <TimelineSection title="職歴" icon="💼" items={work} />
      <TimelineSection title="資格・受賞" icon="🏅" items={skills} />
    </div>
  );
}

export default Timeline;
