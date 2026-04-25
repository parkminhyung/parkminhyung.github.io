---
title: "Performance"
layout: single
permalink: /performance/
nav_order: 3  
---

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Virtual Trading · 2026-04-24</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #f8f8f6; --border: #e8e6e1;
  --text: #1a1917; --muted: #78776f; --faint: #b5b3ac;
  --pos: #16a34a; --neg: #e03131;
}
body {
  background: var(--bg); color: var(--text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px; line-height: 1.6;
  max-width: 920px; margin: 0 auto; padding: 56px 40px 96px;
}
.pos { color: var(--pos); }
.neg { color: var(--neg); }
.na  { color: var(--faint); }
.hdr { padding-bottom: 20px; margin-bottom: 32px; border-bottom: 1px solid var(--border); }
.hdr-title { font-size: 14px; font-weight: 500; }
.hdr-meta  { font-size: 12px; color: var(--muted); margin-top: 3px; font-weight: 300; }
/* KPI 상단 4칸 */
.kpi-row { display: grid; grid-template-columns: repeat(4,1fr); margin-bottom: 28px; border-bottom: 1px solid var(--border); }
.kpi-cell { padding: 18px 20px; border-right: 1px solid var(--border); }
.kpi-cell:first-child { padding-left: 0; }
.kpi-cell:last-child { padding-right: 0; border-right: none; }
.kpi-label { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
.kpi-num { font-size: 24px; font-weight: 300; line-height: 1; font-variant-numeric: tabular-nums; }
.kpi-sub { font-size: 11px; color: var(--muted); margin-top: 4px; font-weight: 300; }
/* 섹션 */
.section { margin-bottom: 36px; }
.section-title { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 1px; padding-bottom: 10px; margin-bottom: 14px; border-bottom: 1px solid var(--border); }
/* 성과 지표 테이블 (th|td|th|td 4열) */
.stat-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; }
.stat-tbl tr { border-bottom: 1px solid var(--border); }
.stat-tbl tr:last-child { border-bottom: none; }
.stat-tbl th { width: 22%; font-size: 11px; font-weight: 400; color: var(--faint); padding: 12px 12px 12px 0; text-align: left; vertical-align: top; }
.stat-tbl td { width: 28%; padding: 12px 12px 12px 0; vertical-align: top; text-align: left; }
.mv { font-size: 15px; font-weight: 400; font-variant-numeric: tabular-nums; color: var(--text); }
.mn { font-size: 11px; color: var(--muted); margin-top: 3px; font-weight: 300; }
/* 자산 배분 바 */
.alloc-bar { height: 2px; background: var(--border); border-radius: 1px; overflow: hidden; margin: 12px 0 10px; display: flex; }
.alloc-bar-cash  { background: var(--faint); height: 100%; }
.alloc-bar-stock { background: var(--pos);   height: 100%; }
.alloc-labels { font-size: 11px; color: var(--muted); display: flex; gap: 20px; font-weight: 300; }
.alloc-labels b { color: var(--text); font-weight: 400; }
/* 차트 */
.chart-wrap { position: relative; height: 180px; margin-bottom: 8px; }
.chart-legend { display: flex; gap: 20px; font-size: 11px; color: var(--muted); margin-top: 8px; font-weight: 300; }
.leg-dot { display: inline-block; width: 12px; height: 1px; margin-right: 5px; vertical-align: middle; }
/* 데이터 테이블 (매매/보유/이력) */
table:not(.stat-tbl) { width: 100%; border-collapse: collapse; }
table:not(.stat-tbl) th { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 0.8px; padding: 7px 12px; border-bottom: 1px solid var(--border); text-align: right; white-space: nowrap; }
table:not(.stat-tbl) th:first-child { text-align: left; padding-left: 0; }
table:not(.stat-tbl) td { padding: 8px 12px; border-bottom: 1px solid var(--border); text-align: right; font-variant-numeric: tabular-nums; color: var(--muted); font-weight: 300; }
table:not(.stat-tbl) td:first-child { text-align: left; color: var(--text); padding-left: 0; font-weight: 400; }
table:not(.stat-tbl) tr:last-child td { border-bottom: none; }
table:not(.stat-tbl) tr:hover td { color: var(--text); }
table:not(.stat-tbl) td.pos { color: var(--pos); font-weight: 500; }
table:not(.stat-tbl) td.neg { color: var(--neg); font-weight: 500; }
.empty { font-size: 12px; color: var(--faint); padding: 16px 0; font-weight: 300; }
footer { font-size: 11px; color: var(--faint); margin-top: 56px; border-top: 1px solid var(--border); padding-top: 14px; font-weight: 300; }
@media (max-width: 900px) { body { padding: 28px 18px 56px; } .kpi-row { grid-template-columns: repeat(2,1fr); } }
</style>
</head>
<body>

<div class="hdr">
  <div class="hdr-title">Virtual Trading</div>
  <div class="hdr-meta">
    Daily Report · 2026-04-24 · 초기자본 ₩100,000,000
    · 보유 6/10
    · 오늘 매수 0 · 매도 0
  </div>
</div>

<div class="kpi-row">
  <div class="kpi-cell">
    <div class="kpi-label">총 자산</div>
    <div class="kpi-num">₩123,314,911</div>
    <div class="kpi-sub">+₩23,314,911</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">누적 수익률</div>
    <div class="kpi-num pos">+23.31%</div>
    <div class="kpi-sub">초기자본 대비</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">일간 수익률</div>
    <div class="kpi-num pos">+3.58%</div>
    <div class="kpi-sub">전일 대비</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">α vs KOSPI</div>
    <div class="kpi-num"><span class="pos">+5.12%</span></div>
    <div class="kpi-sub">α vs KOSPI200 · <span class="pos">+3.90%</span></div>
  </div>
</div>

<div class="section">
  <div class="section-title">성과 지표</div>
  <table class="stat-tbl"><tbody>
    <tr>
      <th>보유 종목</th>
      <td>
        <div class="mv">6 / 10</div>
        <div class="mn">오늘 매수 0 · 매도 0</div>
      </td>
      <th>총 거래 비용</th>
      <td>
        <div class="mv"><span class="neg">-₩126,728</span></div>
        <div class="mn">수수료 ₩28,435 + 거래세 ₩98,293</div>
      </td>
    </tr>
    <tr>
      <th>승률</th>
      <td>
        <div class="mv"><span class="pos">33.3%</span></div>
        <div class="mn">청산 6건 기준</div>
      </td>
      <th>Profit Factor</th>
      <td>
        <div class="mv"><span class="pos">2.40</span></div>
        <div class="mn">총수익 ÷ 총손실 (≥1 양호)</div>
      </td>
    </tr>
    <tr>
      <th>평균 수익 / 손실</th>
      <td>
        <div class="mv">
          <span class="pos">+38.79%</span>
          <span class="na"> / </span>
          <span class="neg">-8.08%</span>
        </div>
        <div class="mn">이긴 거래 / 진 거래</div>
      </td>
      <th>MDD</th>
      <td>
        <div class="mv"><span class="neg">-4.92%</span></div>
        <div class="mn">고점 대비 최대 하락</div>
      </td>
    </tr>
    <tr>
      <th>평균 미실현 손익</th>
      <td>
        <div class="mv"><span class="pos">+30.06%</span></div>
        <div class="mn">보유 6종목 기준</div>
      </td>
      <th>평균 보유일</th>
      <td>
        <div class="mv">7.5일</div>
        <div class="mn">청산 종목 기준</div>
      </td>
    </tr>
    <tr>
      <th>연환산 수익률 / 변동성</th>
      <td>
        <div class="mv">
          <span class="pos">+2134.5%</span> / 51.5%
        </div>
        <div class="mn">CAGR / 일간수익률 × √252</div>
      </td>
      <th>Sharpe / Sortino</th>
      <td>
        <div class="mv">
          <span class="pos">41.41</span> / <span class="pos">119.23</span>
        </div>
        <div class="mn">Rf=3.5% / 하방 변동성 기준</div>
      </td>
    </tr>
    <tr>
      <th>Calmar / Beta / IR</th>
      <td colspan="3">
        <div class="mv">
          <span class="pos">433.93</span>
          &nbsp;/&nbsp;
          0.69
          &nbsp;/&nbsp;
          <span class="pos">1.51</span>
        </div>
        <div class="mn">연수익÷MDD &nbsp;·&nbsp; 시장민감도(β) &nbsp;·&nbsp; 초과수익 일관성(IR)</div>
      </td>
    </tr>
  </tbody></table>
</div>

<div class="section">
  <div class="section-title">자산 배분</div>
  <div class="alloc-bar">
    <div class="alloc-bar-cash" style="width:33.5%"></div>
    <div class="alloc-bar-stock" style="width:66.5%"></div>
  </div>
  <div class="alloc-labels">
    <span>현금 <b>₩41,355,251</b> (33.5%)</span>
    <span>주식 <b>₩81,959,660</b> (66.5%)</span>
  </div>
</div>

<div class="section">
  <div class="section-title">누적 수익률</div>
  <div class="chart-wrap"><canvas id="perfChart"></canvas></div>
  <div class="chart-legend">
    <span><span class="leg-dot" style="background:#1a1917;"></span>포트폴리오 <b class="pos">+23.31%</b></span>
    <span><span class="leg-dot" style="background:#a0998e;"></span>KOSPI</span>
    <span><span class="leg-dot" style="background:#c5c2bb;"></span>KOSPI200</span>
  </div>
</div>

<div class="section">
  <div class="section-title">알파 (포트폴리오 - 벤치마크)</div>
  <div class="chart-wrap"><canvas id="alphaChart"></canvas></div>
  <div class="chart-legend">
    <span><span class="leg-dot" style="background:#a0998e;"></span>α vs KOSPI</span>
    <span><span class="leg-dot" style="background:#c5c2bb;"></span>α vs KOSPI200</span>
  </div>
</div>

<script>
(function() {
  const raw = {"labels": ["2026-04-01", "2026-04-02", "2026-04-03", "2026-04-06", "2026-04-07", "2026-04-08", "2026-04-09", "2026-04-10", "2026-04-13", "2026-04-14", "2026-04-15", "2026-04-16", "2026-04-17", "2026-04-20", "2026-04-21", "2026-04-22", "2026-04-23", "2026-04-24"], "portfolio": [-0.0045, -1.0268, 2.3386, 2.7197, 0.9273, 9.0, 6.4642, 11.3711, 12.8303, 13.6983, 16.5186, 11.5997, 14.7263, 13.1158, 19.8409, 21.4568, 19.0547, 23.3149], "kospi": [0.0, -4.4655, -1.8508, -0.5178, 0.2935, 7.1849, 5.4631, 6.9391, 6.0219, 8.9264, 11.1831, 13.641, 13.018, 14.1731, 16.6056, 17.1433, 18.1998, 18.1965], "kospi200": [0.0, -4.8179, -1.907, -0.2457, 0.8921, 8.4746, 6.3784, 7.9795, 6.9965, 10.2182, 12.6266, 15.2401, 14.4463, 15.6984, 18.237, 18.5147, 19.8786, 19.4178], "alphaK": [-0.0045, 3.4387, 4.1894, 3.2375, 0.6338, 1.8151, 1.0011, 4.432, 6.8084, 4.7719, 5.3355, -2.0413, 1.7083, -1.0573, 3.2353, 4.3135, 0.8549, 5.1184], "alphaK200": [-0.0045, 3.7911, 4.2456, 2.9654, 0.0352, 0.5254, 0.0858, 3.3916, 5.8338, 3.4801, 3.892, -3.6404, 0.28, -2.5826, 1.6039, 2.9421, -0.8239, 3.8971]};
  const gridColor = "#ede9e3";
  const tickColor = "#b5b3ac";
  const tooltipOpts = {
    backgroundColor: "#ffffff",
    borderColor: "#e8e6e1",
    borderWidth: 1,
    titleColor: "#1a1917",
    bodyColor: "#78776f",
    padding: 10,
    callbacks: {
      label: c => {
        const v = c.parsed.y;
        if (v == null) return null;
        return ` ${
          c.dataset.label
        }: ${v >= 0 ? "+" : ""}${v.toFixed(2)}%`;
      }
    }
  };
  const scaleOpts = {
    x: {
      ticks: { color: tickColor, maxTicksLimit: 8, maxRotation: 0, font: { size: 10 } },
      grid: { color: gridColor },
      border: { color: gridColor }
    },
    y: {
      ticks: { color: tickColor, font: { size: 10 }, callback: v => (v >= 0 ? "+" : "") + v.toFixed(1) + "%" },
      grid: { color: gridColor },
      border: { color: gridColor, dash: [3, 3] }
    }
  };
  new Chart(document.getElementById("perfChart"), {
    type: "line",
    data: {
      labels: raw.labels,
      datasets: [
        { label: "포트폴리오", data: raw.portfolio, borderColor: "#1a1917", backgroundColor: "rgba(26,25,23,0.04)", borderWidth: 1.5, pointRadius: 0, tension: 0.2, fill: true },
        { label: "KOSPI", data: raw.kospi, borderColor: "#a0998e", backgroundColor: "transparent", borderWidth: 1, pointRadius: 0, tension: 0.2, spanGaps: true },
        { label: "KOSPI200", data: raw.kospi200, borderColor: "#c5c2bb", backgroundColor: "transparent", borderWidth: 1, pointRadius: 0, tension: 0.2, spanGaps: true }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: { legend: { display: false }, tooltip: tooltipOpts },
      scales: scaleOpts
    }
  });

  new Chart(document.getElementById("alphaChart"), {
    type: "line",
    data: {
      labels: raw.labels,
      datasets: [
        {
          label: "α vs KOSPI",
          data: raw.alphaK,
          borderColor: "#a0998e",
          backgroundColor: ctx => (ctx.parsed && ctx.parsed.y >= 0 ? "rgba(45,125,70,0.08)" : "rgba(192,57,43,0.08)"),
          borderWidth: 1.5,
          pointRadius: 0,
          tension: 0.2,
          fill: "origin",
          spanGaps: true
        },
        {
          label: "α vs KOSPI200",
          data: raw.alphaK200,
          borderColor: "#c5c2bb",
          backgroundColor: "transparent",
          borderWidth: 1,
          pointRadius: 0,
          tension: 0.2,
          spanGaps: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: { legend: { display: false }, tooltip: tooltipOpts },
      scales: scaleOpts
    }
  });
})();
</script>

<div class="section">
  <div class="section-title">오늘 매매 (2026-04-24)</div>
  <div class='empty'>매매 없음</div>
</div>

<div class="section">
  <div class="section-title">보유 종목 (6)</div>
  <table><thead><tr><th>종목</th><th>진입일</th><th>진입가</th><th>현재가</th><th>미실현손익</th><th>수량</th><th>평가금액</th><th>보유일</th><th>S1/S2</th></tr></thead><tbody><tr><td><b>098460</b></td><td>2026-04-08</td><td>₩28,350</td><td>₩42,300</td><td class='pos'>+49.21%</td><td>384</td><td>₩16,243,200</td><td>13</td><td>0.60 / 0.83</td></tr>
<tr><td><b>006360</b></td><td>2026-04-07</td><td>₩28,800</td><td>₩40,750</td><td class='pos'>+41.49%</td><td>350</td><td>₩14,262,500</td><td>14</td><td>0.62 / 0.75</td></tr>
<tr><td><b>222080</b></td><td>2026-04-06</td><td>₩11,740</td><td>₩16,490</td><td class='pos'>+40.46%</td><td>874</td><td>₩14,412,260</td><td>15</td><td>0.63 / 0.81</td></tr>
<tr><td><b>361610</b></td><td>2026-04-06</td><td>₩21,800</td><td>₩27,700</td><td class='pos'>+27.06%</td><td>471</td><td>₩13,046,700</td><td>15</td><td>0.62 / 0.83</td></tr>
<tr><td><b>281740</b></td><td>2026-04-08</td><td>₩20,150</td><td>₩24,100</td><td class='pos'>+19.60%</td><td>540</td><td>₩13,014,000</td><td>13</td><td>0.60 / 0.83</td></tr>
<tr><td><b>030000</b></td><td>2026-04-09</td><td>₩19,140</td><td>₩19,750</td><td class='pos'>+3.19%</td><td>556</td><td>₩10,981,000</td><td>12</td><td>0.61 / 0.83</td></tr>
</tbody></table>
</div>

<div class="section">
  <div class="section-title">일별 성과 이력 (최근 20일)</div>
  <table><thead><tr><th>날짜</th><th>총자산</th><th>일간</th><th>누적</th><th>α KOSPI</th><th>α KOSPI200</th><th>보유</th><th>매수</th><th>매도</th></tr></thead><tbody><tr><td>2026-04-24</td><td>₩123,314,911</td><td class="pos">+3.58%</td><td class="pos">+23.31%</td><td class="pos">+5.12%</td><td class="pos">+3.90%</td><td>6</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-23</td><td>₩119,054,651</td><td class="neg">-1.98%</td><td class="pos">+19.05%</td><td class="pos">+0.85%</td><td class="neg">-0.82%</td><td>6</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-22</td><td>₩121,456,801</td><td class="pos">+1.35%</td><td class="pos">+21.46%</td><td class="pos">+4.31%</td><td class="pos">+2.94%</td><td>6</td><td class='pos'>0</td><td class='neg'>1</td></tr>
<tr><td>2026-04-21</td><td>₩119,840,883</td><td class="pos">+5.95%</td><td class="pos">+19.84%</td><td class="pos">+3.24%</td><td class="pos">+1.60%</td><td>7</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-20</td><td>₩113,115,803</td><td class="neg">-1.40%</td><td class="pos">+13.12%</td><td class="neg">-1.06%</td><td class="neg">-2.58%</td><td>7</td><td class='pos'>0</td><td class='neg'>1</td></tr>
<tr><td>2026-04-17</td><td>₩114,726,291</td><td class="pos">+2.80%</td><td class="pos">+14.73%</td><td class="pos">+1.71%</td><td class="pos">+0.28%</td><td>8</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-16</td><td>₩111,599,711</td><td class="neg">-4.22%</td><td class="pos">+11.60%</td><td class="neg">-2.04%</td><td class="neg">-3.64%</td><td>8</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-15</td><td>₩116,518,591</td><td class="pos">+2.48%</td><td class="pos">+16.52%</td><td class="pos">+5.34%</td><td class="pos">+3.89%</td><td>8</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-14</td><td>₩113,698,321</td><td class="pos">+0.77%</td><td class="pos">+13.70%</td><td class="pos">+4.77%</td><td class="pos">+3.48%</td><td>8</td><td class='pos'>0</td><td class='neg'>1</td></tr>
<tr><td>2026-04-13</td><td>₩112,830,292</td><td class="pos">+1.31%</td><td class="pos">+12.83%</td><td class="pos">+6.81%</td><td class="pos">+5.83%</td><td>9</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-10</td><td>₩111,371,122</td><td class="pos">+4.61%</td><td class="pos">+11.37%</td><td class="pos">+4.43%</td><td class="pos">+3.39%</td><td>9</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-09</td><td>₩106,464,182</td><td class="neg">-2.33%</td><td class="pos">+6.46%</td><td class="pos">+1.00%</td><td class="pos">+0.09%</td><td>9</td><td class='pos'>1</td><td class='neg'>1</td></tr>
<tr><td>2026-04-08</td><td>₩109,000,010</td><td class="pos">+8.00%</td><td class="pos">+9.00%</td><td class="pos">+1.82%</td><td class="pos">+0.53%</td><td>9</td><td class='pos'>3</td><td class='neg'>0</td></tr>
<tr><td>2026-04-07</td><td>₩100,927,279</td><td class="neg">-1.74%</td><td class="pos">+0.93%</td><td class="pos">+0.63%</td><td class="pos">+0.04%</td><td>6</td><td class='pos'>1</td><td class='neg'>1</td></tr>
<tr><td>2026-04-06</td><td>₩102,719,678</td><td class="pos">+0.37%</td><td class="pos">+2.72%</td><td class="pos">+3.24%</td><td class="pos">+2.97%</td><td>6</td><td class='pos'>3</td><td class='neg'>0</td></tr>
<tr><td>2026-04-03</td><td>₩102,338,558</td><td class="pos">+3.40%</td><td class="pos">+2.34%</td><td class="pos">+4.19%</td><td class="pos">+4.25%</td><td>3</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-02</td><td>₩98,973,238</td><td class="neg">-1.02%</td><td class="neg">-1.03%</td><td class="pos">+3.44%</td><td class="pos">+3.79%</td><td>3</td><td class='pos'>1</td><td class='neg'>1</td></tr>
<tr><td>2026-04-01</td><td>₩99,995,504</td><td class="na">—</td><td class="na">0.00%</td><td class="na">0.00%</td><td class="na">0.00%</td><td>3</td><td class='pos'>3</td><td class='neg'>0</td></tr>
</tbody></table>
</div>

<footer>virtual_trader.py · 2026-04-25 02:15:10 KST</footer>
</body>
</html>
