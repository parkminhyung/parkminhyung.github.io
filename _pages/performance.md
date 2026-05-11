---
title: "Performance"
layout: page
permalink: /performance/
---


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
.vt-report * { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #f8f8f6; --border: #e8e6e1;
  --text: #1a1917; --muted: #78776f; --faint: #b5b3ac;
  --pos: #16a34a; --neg: #e03131;
}
.vt-report {
  background: var(--bg); color: var(--text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px; line-height: 1.6;
  max-width: 920px; margin: 0 auto; padding: 56px 40px 96px;
}
.vt-report .pos { color: var(--pos); }
.vt-report .neg { color: var(--neg); }
.vt-report .na { color: var(--faint); }
.vt-report .hdr { padding-bottom: 20px; margin-bottom: 32px; border-bottom: 1px solid var(--border); }
.vt-report .hdr-title { font-size: 14px; font-weight: 500; }
.vt-report .hdr-meta { font-size: 12px; color: var(--muted); margin-top: 3px; font-weight: 300; }

.vt-report .kpi-row { display: grid; grid-template-columns: repeat(4,1fr); margin-bottom: 28px; border-bottom: 1px solid var(--border); }
.vt-report .kpi-cell { padding: 18px 20px; border-right: 1px solid var(--border); }
.vt-report .kpi-cell:first-child { padding-left: 0; }
.vt-report .kpi-cell:last-child { padding-right: 0; border-right: none; }
.vt-report .kpi-label { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
.vt-report .kpi-num { font-size: 24px; font-weight: 300; line-height: 1; font-variant-numeric: tabular-nums; }
.vt-report .kpi-sub { font-size: 11px; color: var(--muted); margin-top: 4px; font-weight: 300; }

.vt-report .section { margin-bottom: 36px; }
.vt-report .section-title { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 1px; padding-bottom: 10px; margin-bottom: 14px; border-bottom: 1px solid var(--border); }

.vt-report .stat-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; }
.vt-report .stat-tbl tr { border-bottom: 1px solid var(--border); }
.vt-report .stat-tbl tr:last-child { border-bottom: none; }
.vt-report .stat-tbl th { width: 22%; font-size: 11px; font-weight: 400; color: var(--faint); padding: 12px 12px 12px 0; text-align: left; vertical-align: top; }
.vt-report .stat-tbl td { width: 28%; padding: 12px 12px 12px 0; vertical-align: top; text-align: left; }
.vt-report .mv { font-size: 15px; font-weight: 400; font-variant-numeric: tabular-nums; color: var(--text); }
.vt-report .mn { font-size: 11px; color: var(--muted); margin-top: 3px; font-weight: 300; }

.vt-report .alloc-bar { height: 2px; background: var(--border); border-radius: 1px; overflow: hidden; margin: 12px 0 10px; display: flex; }
.vt-report .alloc-bar-cash { background: var(--faint); height: 100%; }
.vt-report .alloc-bar-stock { background: var(--pos);   height: 100%; }
.vt-report .alloc-labels { font-size: 11px; color: var(--muted); display: flex; gap: 20px; font-weight: 300; }
.vt-report .alloc-labels b { color: var(--text); font-weight: 400; }

.vt-report .chart-wrap { position: relative; height: 180px; margin-bottom: 8px; }
.vt-report .chart-legend { display: flex; gap: 20px; font-size: 11px; color: var(--muted); margin-top: 8px; font-weight: 300; }
.vt-report .leg-dot { display: inline-block; width: 12px; height: 1px; margin-right: 5px; vertical-align: middle; }

.vt-report table:not(.stat-tbl) { width: 100%; border-collapse: collapse; }
.vt-report table:not(.stat-tbl) th { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 0.8px; padding: 7px 12px; border-bottom: 1px solid var(--border); text-align: right; white-space: nowrap; }
.vt-report table:not(.stat-tbl) th:first-child { text-align: left; padding-left: 0; }
.vt-report table:not(.stat-tbl) td { padding: 8px 12px; border-bottom: 1px solid var(--border); text-align: right; font-variant-numeric: tabular-nums; color: var(--muted); font-weight: 300; }
.vt-report table:not(.stat-tbl) td:first-child { text-align: left; color: var(--text); padding-left: 0; font-weight: 400; }
.vt-report table:not(.stat-tbl) tr:last-child td { border-bottom: none; }
.vt-report table:not(.stat-tbl) tr:hover td { color: var(--text); }
.vt-report table:not(.stat-tbl) td.pos { color: var(--pos); font-weight: 500; }
.vt-report table:not(.stat-tbl) td.neg { color: var(--neg); font-weight: 500; }
.vt-report .empty { font-size: 12px; color: var(--faint); padding: 16px 0; font-weight: 300; }
.vt-report footer { font-size: 11px; color: var(--faint); margin-top: 56px; border-top: 1px solid var(--border); padding-top: 14px; font-weight: 300; }
@media (max-width: 900px) { .vt-report { padding: 28px 18px 56px; } .vt-report .kpi-row { grid-template-columns: repeat(2,1fr); } }
</style>
<div class="vt-report">


<div class="hdr">
  <div class="hdr-title">Virtual Trading</div>
  <div class="hdr-meta">
    Daily Report · 2026-05-11 · 초기자본 ₩100,000,000
    · 보유 0/10
    · 오늘 매수 0 · 매도 0
  </div>
</div>

<div class="kpi-row">
  <div class="kpi-cell">
    <div class="kpi-label">총 자산</div>
    <div class="kpi-num">₩100,000,000</div>
    <div class="kpi-sub">+₩0</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">누적 수익률</div>
    <div class="kpi-num pos">+0.00%</div>
    <div class="kpi-sub">초기자본 대비</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">일간 수익률</div>
    <div class="kpi-num na">—</div>
    <div class="kpi-sub">전일 대비</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">α vs KOSPI</div>
    <div class="kpi-num"><span class="pos">+0.00%</span></div>
    <div class="kpi-sub">α vs KOSPI200 · <span class="pos">+0.00%</span> &nbsp;·&nbsp; α vs KOSDAQ · <span class="pos">+0.00%</span></div>
  </div>
</div>

<div class="section">
  <div class="section-title">성과 지표</div>
  <table class="stat-tbl"><tbody>
    <tr>
      <th>보유 종목</th>
      <td>
        <div class="mv">0 / 10</div>
        <div class="mn">오늘 매수 0 · 매도 0</div>
      </td>
      <th>총 거래 비용</th>
      <td>
        <div class="mv"><span class="neg">-₩0</span></div>
        <div class="mn">수수료 ₩0 + 거래세 ₩0</div>
      </td>
    </tr>
    <tr>
      <th>승률</th>
      <td>
        <div class="mv"><span class="na">—</span></div>
        <div class="mn">청산 0건 기준</div>
      </td>
      <th>Profit Factor</th>
      <td>
        <div class="mv"><span class="na">—</span></div>
        <div class="mn">총수익 ÷ 총손실 (≥1 양호)</div>
      </td>
    </tr>
    <tr>
      <th>평균 수익 / 손실</th>
      <td>
        <div class="mv">
          <span class="pos">—</span>
          <span class="na"> / </span>
          <span class="neg">—</span>
        </div>
        <div class="mn">이긴 거래 / 진 거래</div>
      </td>
      <th>MDD</th>
      <td>
        <div class="mv"><span class="na">—</span></div>
        <div class="mn">고점 대비 최대 하락</div>
      </td>
    </tr>
    <tr>
      <th>평균 미실현 손익</th>
      <td>
        <div class="mv"><span class="na">—</span></div>
        <div class="mn">보유 0종목 기준</div>
      </td>
      <th>평균 보유일</th>
      <td>
        <div class="mv">—</div>
        <div class="mn">청산 종목 기준</div>
      </td>
    </tr>
    <tr>
      <th>연환산 수익률 / 변동성</th>
      <td>
        <div class="mv">
          <span class="na">—</span> / —
        </div>
        <div class="mn">CAGR / 일간수익률 × √252</div>
      </td>
      <th>Sharpe / Sortino</th>
      <td>
        <div class="mv">
          <span class="na">—</span> / <span class="na">—</span>
        </div>
        <div class="mn">Rf=3.5% / 하방 변동성 기준</div>
      </td>
    </tr>
    <tr>
      <th>Calmar / Beta / IR</th>
      <td colspan="3">
        <div class="mv">
          <span class="na">—</span>
          &nbsp;/&nbsp;
          —
          &nbsp;/&nbsp;
          <span class="na">—</span>
        </div>
        <div class="mn">연수익÷MDD &nbsp;·&nbsp; 시장민감도(β) &nbsp;·&nbsp; 초과수익 일관성(IR)</div>
      </td>
    </tr>
  </tbody></table>
</div>

<div class="section">
  <div class="section-title">자산 배분</div>
  <div class="alloc-bar">
    <div class="alloc-bar-cash" style="width:100.0%"></div>
    <div class="alloc-bar-stock" style="width:0.0%"></div>
  </div>
  <div class="alloc-labels">
    <span>현금 <b>₩100,000,000</b> (100.0%)</span>
    <span>주식 <b>₩0</b> (0.0%)</span>
  </div>
</div>

<div class="section">
  <div class="section-title">오늘 매매 (2026-05-11)</div>
  <div class='empty'>매매 없음</div>
</div>

<div class="section">
  <div class="section-title">보유 종목 (0)</div>
  <div class='empty'>보유 없음</div>
</div>

<div class="section">
  <div class="section-title">일별 성과 이력 (최근 20일)</div>
  <table><thead><tr><th>날짜</th><th>총자산</th><th>일간</th><th>누적</th><th>α KOSPI</th><th>α KOSPI200</th><th>α KOSDAQ</th><th>보유</th><th>매수</th><th>매도</th></tr></thead><tbody><tr><td>2026-05-11</td><td>₩100,000,000</td><td class="na">—</td><td class="na">0.00%</td><td class="na">0.00%</td><td class="na">0.00%</td><td class="na">0.00%</td><td>0</td><td class='pos'>0</td><td class='neg'>0</td></tr>
</tbody></table>
</div>

<footer>virtual_trader.py · 2026-05-11 16:04:25 KST</footer>

</div>
