import React from 'react'
import './styles/History.css';  // スタイルを外部ファイルで管理

function History() {
  return (
    <div className="history">
        <ul className="education">
            <h2>学歴</h2>
            <li>2021年 3月 柏陽高校 卒業</li>
            <li>2021年 4月 慶應義塾大学 理工学部 入学</li>
        </ul>
        <ul className="work">
            <h2>職歴</h2>
            <li>2021年 4月 東進衛生予備校 入社</li>
            <li>2023年 6月 鶴見有職研究所 入社</li>
            <li>2023年 6月 株式会社AVILEN 入社</li>
            <li>2023年 6月 株式会社STANDARD 入社</li>
            <li>2023年 7月 東進衛生予備校 退社</li>
        </ul>
        <ul className="skill">
          <h2>スキル</h2>
          <li>2019年 6月 英検準一級</li>
          <li>2022年 6月 統計検定2級</li>
          <li>2022年 6月 AWS SAA</li>
          <li>2023年 6月 応用情報技術者試験</li>
        </ul>
    </div>
  )
}

export default History
