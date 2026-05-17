---
title: "JPX"
layout: page
permalink: /performance-jpx/
---

<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
.vt-report-jpx * { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #f8f8f6; --border: #e8e6e1;
  --text: #1a1917; --muted: #78776f; --faint: #b5b3ac;
  --pos: #16a34a; --neg: #e03131;
}
.vt-report-jpx {
  background: var(--bg); color: var(--text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px; line-height: 1.6;
  max-width: 920px; margin: 0 auto; padding: 56px 40px 96px;
}
.vt-report-jpx .pos { color: var(--pos); }
.vt-report-jpx .neg { color: var(--neg); }
.vt-report-jpx .na { color: var(--faint); }
.vt-report-jpx .hdr { padding-bottom: 20px; margin-bottom: 32px; border-bottom: 1px solid var(--border); }
.vt-report-jpx .hdr-title { font-size: 14px; font-weight: 500; }
.vt-report-jpx .hdr-meta { font-size: 12px; color: var(--muted); margin-top: 3px; font-weight: 300; }

.vt-report-jpx .kpi-row { display: grid; grid-template-columns: repeat(4,1fr); margin-bottom: 28px; border-bottom: 1px solid var(--border); }
.vt-report-jpx .kpi-cell { padding: 18px 20px; border-right: 1px solid var(--border); }
.vt-report-jpx .kpi-cell:first-child { padding-left: 0; }
.vt-report-jpx .kpi-cell:last-child { padding-right: 0; border-right: none; }
.vt-report-jpx .kpi-label { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
.vt-report-jpx .kpi-num { font-size: 24px; font-weight: 300; line-height: 1; font-variant-numeric: tabular-nums; }
.vt-report-jpx .kpi-sub { font-size: 11px; color: var(--muted); margin-top: 4px; font-weight: 300; }

.vt-report-jpx .section { margin-bottom: 36px; }
.vt-report-jpx .section-title { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 1px; padding-bottom: 10px; margin-bottom: 14px; border-bottom: 1px solid var(--border); }

.vt-report-jpx .stat-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; }
.vt-report-jpx .stat-tbl tr { border-bottom: 1px solid var(--border); }
.vt-report-jpx .stat-tbl tr:last-child { border-bottom: none; }
.vt-report-jpx .stat-tbl th { width: 22%; font-size: 11px; font-weight: 400; color: var(--faint); padding: 12px 12px 12px 0; text-align: left; vertical-align: top; }
.vt-report-jpx .stat-tbl td { width: 28%; padding: 12px 12px 12px 0; vertical-align: top; text-align: left; }
.vt-report-jpx .mv { font-size: 15px; font-weight: 400; font-variant-numeric: tabular-nums; color: var(--text); }
.vt-report-jpx .mn { font-size: 11px; color: var(--muted); margin-top: 3px; font-weight: 300; }

.vt-report-jpx .alloc-bar { height: 2px; background: var(--border); border-radius: 1px; overflow: hidden; margin: 12px 0 10px; display: flex; }
.vt-report-jpx .alloc-bar-cash { background: var(--faint); height: 100%; }
.vt-report-jpx .alloc-bar-stock { background: var(--pos);   height: 100%; }
.vt-report-jpx .alloc-labels { font-size: 11px; color: var(--muted); display: flex; gap: 20px; font-weight: 300; }
.vt-report-jpx .alloc-labels b { color: var(--text); font-weight: 400; }

.vt-report-jpx .chart-wrap { position: relative; height: 180px; margin-bottom: 8px; }
.vt-report-jpx .chart-legend { display: flex; gap: 20px; font-size: 11px; color: var(--muted); margin-top: 8px; font-weight: 300; }
.vt-report-jpx .leg-dot { display: inline-block; width: 12px; height: 1px; margin-right: 5px; vertical-align: middle; }

.vt-report-jpx table:not(.stat-tbl) { width: 100%; border-collapse: collapse; }
.vt-report-jpx table:not(.stat-tbl) th { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 0.8px; padding: 7px 12px; border-bottom: 1px solid var(--border); text-align: right; white-space: nowrap; }
.vt-report-jpx table:not(.stat-tbl) th:first-child { text-align: left; padding-left: 0; }
.vt-report-jpx table:not(.stat-tbl) td { padding: 8px 12px; border-bottom: 1px solid var(--border); text-align: right; font-variant-numeric: tabular-nums; color: var(--muted); font-weight: 300; }
.vt-report-jpx table:not(.stat-tbl) td:first-child { text-align: left; color: var(--text); padding-left: 0; font-weight: 400; }
.vt-report-jpx table:not(.stat-tbl) tr:last-child td { border-bottom: none; }
.vt-report-jpx table:not(.stat-tbl) tr:hover td { color: var(--text); }
.vt-report-jpx table:not(.stat-tbl) td.pos { color: var(--pos); font-weight: 500; }
.vt-report-jpx table:not(.stat-tbl) td.neg { color: var(--neg); font-weight: 500; }
.vt-report-jpx .empty { font-size: 12px; color: var(--faint); padding: 16px 0; font-weight: 300; }
.vt-report-jpx footer { font-size: 11px; color: var(--faint); margin-top: 56px; border-top: 1px solid var(--border); padding-top: 14px; font-weight: 300; }
@media (max-width: 900px) { .vt-report-jpx { padding: 28px 18px 56px; } .vt-report-jpx .kpi-row { grid-template-columns: repeat(2,1fr); } }
</style>
<div class="vt-report-jpx">


<div class="hdr">
  <div class="hdr-title">Virtual Trading · JPX</div>
  <div class="hdr-meta">
    Daily Report · 2026-05-08 · 초기자본 ¥10,000,000
    · 보유 23/30
    · 오늘 매수 9 · 매도 1
  </div>
</div>

<div class="kpi-row">
  <div class="kpi-cell">
    <div class="kpi-label">총 자산</div>
    <div class="kpi-num">¥10,179,331</div>
    <div class="kpi-sub">+¥179,331</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">누적 수익률</div>
    <div class="kpi-num pos">+1.79%</div>
    <div class="kpi-sub">초기자본 대비</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">일간 수익률</div>
    <div class="kpi-num neg">-0.05%</div>
    <div class="kpi-sub">전일 대비</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">α vs TOPIX</div>
    <div class="kpi-num"><span class="neg">-2.50%</span></div>
    <div class="kpi-sub">α vs Nikkei225 · <span class="na">—</span></div>
  </div>
</div>

<div class="section">
  <div class="section-title">성과 지표</div>
  <table class="stat-tbl"><tbody>
    <tr>
      <th>보유 종목</th>
      <td>
        <div class="mv">23 / 30</div>
        <div class="mn">오늘 매수 9 · 매도 1</div>
      </td>
      <th>총 거래 비용</th>
      <td>
        <div class="mv"><span class="neg">-¥42,741</span></div>
        <div class="mn">수수료 ¥42,741 + 거래세 ¥0</div>
      </td>
    </tr>
    <tr>
      <th>승률</th>
      <td>
        <div class="mv"><span class="pos">58.1%</span></div>
        <div class="mn">청산 31건 기준</div>
      </td>
      <th>Profit Factor</th>
      <td>
        <div class="mv"><span class="pos">1.97</span></div>
        <div class="mn">총수익 ÷ 총손실 (≥1 양호)</div>
      </td>
    </tr>
    <tr>
      <th>평균 수익 / 손실</th>
      <td>
        <div class="mv">
          <span class="pos">+6.39%</span>
          <span class="na"> / </span>
          <span class="neg">-4.50%</span>
        </div>
        <div class="mn">이긴 거래 / 진 거래</div>
      </td>
      <th>MDD</th>
      <td>
        <div class="mv"><span class="neg">-3.16%</span></div>
        <div class="mn">고점 대비 최대 하락</div>
      </td>
    </tr>
    <tr>
      <th>평균 미실현 손익</th>
      <td>
        <div class="mv"><span class="pos">+0.52%</span></div>
        <div class="mn">보유 23종목 기준</div>
      </td>
      <th>평균 보유일</th>
      <td>
        <div class="mv">14.8일</div>
        <div class="mn">청산 종목 기준</div>
      </td>
    </tr>
    <tr>
      <th>연환산 수익률 / 변동성</th>
      <td>
        <div class="mv">
          <span class="pos">+21.5%</span> / 14.3%
        </div>
        <div class="mn">CAGR / 일간수익률 × √252</div>
      </td>
      <th>Sharpe / Sortino</th>
      <td>
        <div class="mv">
          <span class="pos">1.26</span> / <span class="pos">3.40</span>
        </div>
        <div class="mn">Rf=3.5% / 하방 변동성 기준</div>
      </td>
    </tr>
    <tr>
      <th>Calmar / Beta / IR</th>
      <td colspan="3">
        <div class="mv">
          <span class="pos">6.80</span>
          &nbsp;/&nbsp;
          0.57
          &nbsp;/&nbsp;
          <span class="neg">-2.22</span>
        </div>
        <div class="mn">연수익÷MDD &nbsp;·&nbsp; 시장민감도(β) &nbsp;·&nbsp; 초과수익 일관성(IR)</div>
      </td>
    </tr>
  </tbody></table>
</div>

<div class="section">
  <div class="section-title">자산 배분</div>
  <div class="alloc-bar">
    <div class="alloc-bar-cash" style="width:23.3%"></div>
    <div class="alloc-bar-stock" style="width:76.7%"></div>
  </div>
  <div class="alloc-labels">
    <span>현금 <b>¥2,371,166</b> (23.3%)</span>
    <span>주식 <b>¥7,808,164</b> (76.7%)</span>
  </div>
</div>

<div class="section">
  <div class="section-title">누적 수익률</div>
  <div class="chart-wrap"><canvas id="perfChart"></canvas></div>
  <div class="chart-legend">
    <span><span class="leg-dot" style="background:#1a1917;"></span>포트폴리오 <b class="pos">+1.79%</b></span>
    <span><span class="leg-dot" style="background:#a0998e;"></span>TOPIX</span>
    <span><span class="leg-dot" style="background:#c5c2bb;"></span>Nikkei225</span>
  </div>
</div>

<div class="section">
  <div class="section-title">알파 (포트폴리오 - 벤치마크)</div>
  <div class="chart-wrap"><canvas id="alphaChart"></canvas></div>
  <div class="chart-legend">
    <span><span class="leg-dot" style="background:#a0998e;"></span>α vs TOPIX</span>
    <span><span class="leg-dot" style="background:#c5c2bb;"></span>α vs Nikkei225</span>
  </div>
</div>

<script>
(function() {
  const raw = {"labels": ["2026-04-01", "2026-04-02", "2026-04-03", "2026-04-06", "2026-04-07", "2026-04-08", "2026-04-09", "2026-04-10", "2026-04-13", "2026-04-14", "2026-04-15", "2026-04-16", "2026-04-17", "2026-04-20", "2026-04-21", "2026-04-22", "2026-04-23", "2026-04-24", "2026-04-27", "2026-04-28", "2026-04-30", "2026-05-01", "2026-05-07", "2026-05-08"], "portfolio": [-0.0348, -0.3798, -0.1176, -0.3692, -0.4447, 2.6131, 1.6262, 1.7553, 1.3782, 2.6352, 3.0502, 4.4563, 3.2709, 3.4435, 3.2635, 2.6697, 1.817, 1.8875, 2.5353, 2.0568, 1.6363, 1.2953, 1.8438, 1.7933], "kospi": [0.0, -1.593, -0.668, -0.6167, -0.3597, 2.8777, 1.927, 1.8756, 1.4388, 2.3124, 2.6721, 3.9054, 2.5437, 2.9291, 2.6465, 1.9784, 1.1305, 1.1562, 1.7215, 2.7749, 1.259, 1.3875, 4.6249, 4.2908], "kospi200": [0.0, -2.3752, -1.1466, -0.6066, -0.5771, 4.78, 4.0113, 5.9257, 5.1416, 7.6995, 8.1775, 10.7531, 8.8133, 9.4627, 10.4383, 10.8787, 10.0495, 11.1212, 12.6493, 11.4958, 10.3187, 10.7433, 16.9226, null], "alphaK": [-0.0348, 1.2132, 0.5504, 0.2475, -0.085, -0.2646, -0.3008, -0.1203, -0.0606, 0.3228, 0.3781, 0.5509, 0.7272, 0.5144, 0.617, 0.6913, 0.6865, 0.7313, 0.8138, -0.7181, 0.3773, -0.0922, -2.7811, -2.4975], "alphaK200": [-0.0348, 1.9954, 1.029, 0.2374, 0.1324, -2.1669, -2.3851, -4.1704, -3.7634, -5.0643, -5.1273, -6.2968, -5.5424, -6.0192, -7.1748, -8.209, -8.2325, -9.2337, -10.114, -9.439, -8.6824, -9.448, -15.0788, null]};
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
        { label: "TOPIX", data: raw.kospi, borderColor: "#a0998e", backgroundColor: "transparent", borderWidth: 1, pointRadius: 0, tension: 0.2, spanGaps: true },
        { label: "Nikkei225", data: raw.kospi200, borderColor: "#c5c2bb", backgroundColor: "transparent", borderWidth: 1, pointRadius: 0, tension: 0.2, spanGaps: true }
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
          label: "α vs TOPIX",
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
          label: "α vs Nikkei225",
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
  <div class="section-title">오늘 매매 (2026-05-08)</div>
  <table><thead><tr><th>구분</th><th>종목</th><th>체결가</th><th>수량</th><th>거래금액</th><th>실현손익</th><th>사유</th></tr></thead><tbody><tr><td class='neg'><b>매도</b></td><td><b>7269</b></td><td>¥1,785</td><td>184주</td><td>¥328,440</td><td class="neg">-3.46%</td><td>time_out</td></tr>
<tr><td class='pos'><b>매수</b></td><td><b>9984</b></td><td>¥6,424</td><td>52주</td><td>¥334,048</td><td class="na">—</td><td></td></tr>
<tr><td class='pos'><b>매수</b></td><td><b>5016</b></td><td>¥5,276</td><td>64주</td><td>¥337,664</td><td class="na">—</td><td></td></tr>
<tr><td class='pos'><b>매수</b></td><td><b>4689</b></td><td>¥440</td><td>770주</td><td>¥338,569</td><td class="na">—</td><td></td></tr>
<tr><td class='pos'><b>매수</b></td><td><b>4612</b></td><td>¥1,002</td><td>338주</td><td>¥338,676</td><td class="na">—</td><td></td></tr>
<tr><td class='pos'><b>매수</b></td><td><b>6971</b></td><td>¥2,851</td><td>118주</td><td>¥336,418</td><td class="na">—</td><td></td></tr>
<tr><td class='pos'><b>매수</b></td><td><b>8306</b></td><td>¥2,863</td><td>118주</td><td>¥337,834</td><td class="na">—</td><td></td></tr>
<tr><td class='pos'><b>매수</b></td><td><b>8750</b></td><td>¥1,464</td><td>231주</td><td>¥338,184</td><td class="na">—</td><td></td></tr>
<tr><td class='pos'><b>매수</b></td><td><b>6178</b></td><td>¥1,861</td><td>182주</td><td>¥338,702</td><td class="na">—</td><td></td></tr>
<tr><td class='pos'><b>매수</b></td><td><b>9201</b></td><td>¥2,627</td><td>129주</td><td>¥338,883</td><td class="na">—</td><td></td></tr>
</tbody></table>
</div>

<div class="section">
  <div class="section-title">보유 종목 (23)</div>
  <table><thead><tr><th>종목</th><th>진입일</th><th>진입가</th><th>현재가</th><th>미실현손익</th><th>수량</th><th>평가금액</th><th>보유일</th><th>S1/S2</th></tr></thead><tbody><tr><td><b>5802</b></td><td>2026-04-21</td><td>¥10,300</td><td>¥11,345</td><td class='pos'>+10.15%</td><td>33</td><td>¥374,385</td><td>10</td><td>0.59 / 0.78</td></tr>
<tr><td><b>2914</b></td><td>2026-04-28</td><td>¥5,779</td><td>¥5,937</td><td class='pos'>+2.73%</td><td>58</td><td>¥344,346</td><td>5</td><td>0.61 / 0.68</td></tr>
<tr><td><b>8001</b></td><td>2026-05-01</td><td>¥1,987</td><td>¥2,009</td><td class='pos'>+1.11%</td><td>169</td><td>¥339,521</td><td>3</td><td>0.59 / 0.72</td></tr>
<tr><td><b>4689</b></td><td>2026-05-08</td><td>¥440</td><td>¥440</td><td class='pos'>+0.00%</td><td>770</td><td>¥338,569</td><td>1</td><td>0.54 / 0.69</td></tr>
<tr><td><b>5019</b></td><td>2026-05-07</td><td>¥1,370</td><td>¥1,370</td><td class='pos'>+0.00%</td><td>247</td><td>¥338,390</td><td>2</td><td>0.57 / 0.74</td></tr>
<tr><td><b>5411</b></td><td>2026-05-07</td><td>¥1,734</td><td>¥1,734</td><td class='pos'>+0.00%</td><td>195</td><td>¥338,228</td><td>2</td><td>0.62 / 0.63</td></tr>
<tr><td><b>7701</b></td><td>2026-05-07</td><td>¥3,842</td><td>¥3,842</td><td class='pos'>+0.00%</td><td>88</td><td>¥338,096</td><td>2</td><td>0.58 / 0.65</td></tr>
<tr><td><b>5020</b></td><td>2026-05-07</td><td>¥1,311</td><td>¥1,311</td><td class='pos'>+0.00%</td><td>258</td><td>¥338,238</td><td>2</td><td>0.61 / 0.62</td></tr>
<tr><td><b>2002</b></td><td>2026-05-07</td><td>¥1,973</td><td>¥1,973</td><td class='pos'>+0.00%</td><td>171</td><td>¥337,383</td><td>2</td><td>0.58 / 0.64</td></tr>
<tr><td><b>6448</b></td><td>2026-05-07</td><td>¥3,119</td><td>¥3,119</td><td class='pos'>+0.00%</td><td>108</td><td>¥336,852</td><td>2</td><td>0.57 / 0.61</td></tr>
<tr><td><b>9831</b></td><td>2026-05-07</td><td>¥530</td><td>¥530</td><td class='pos'>+0.00%</td><td>639</td><td>¥338,670</td><td>2</td><td>0.59 / 0.55</td></tr>
<tr><td><b>9984</b></td><td>2026-05-08</td><td>¥6,424</td><td>¥6,424</td><td class='pos'>+0.00%</td><td>52</td><td>¥334,048</td><td>1</td><td>0.53 / 0.79</td></tr>
<tr><td><b>5016</b></td><td>2026-05-08</td><td>¥5,276</td><td>¥5,276</td><td class='pos'>+0.00%</td><td>64</td><td>¥337,664</td><td>1</td><td>0.53 / 0.78</td></tr>
<tr><td><b>4612</b></td><td>2026-05-08</td><td>¥1,002</td><td>¥1,002</td><td class='pos'>+0.00%</td><td>338</td><td>¥338,676</td><td>1</td><td>0.53 / 0.69</td></tr>
<tr><td><b>6971</b></td><td>2026-05-08</td><td>¥2,851</td><td>¥2,851</td><td class='pos'>+0.00%</td><td>118</td><td>¥336,418</td><td>1</td><td>0.53 / 0.67</td></tr>
<tr><td><b>8306</b></td><td>2026-05-08</td><td>¥2,863</td><td>¥2,863</td><td class='pos'>+0.00%</td><td>118</td><td>¥337,834</td><td>1</td><td>0.54 / 0.66</td></tr>
<tr><td><b>8750</b></td><td>2026-05-08</td><td>¥1,464</td><td>¥1,464</td><td class='pos'>+0.00%</td><td>231</td><td>¥338,184</td><td>1</td><td>0.53 / 0.66</td></tr>
<tr><td><b>6178</b></td><td>2026-05-08</td><td>¥1,861</td><td>¥1,861</td><td class='pos'>+0.00%</td><td>182</td><td>¥338,702</td><td>1</td><td>0.53 / 0.65</td></tr>
<tr><td><b>9201</b></td><td>2026-05-08</td><td>¥2,627</td><td>¥2,627</td><td class='pos'>+0.00%</td><td>129</td><td>¥338,883</td><td>1</td><td>0.53 / 0.63</td></tr>
<tr><td><b>4005</b></td><td>2026-05-07</td><td>¥513</td><td>¥513</td><td class='neg'>-0.00%</td><td>660</td><td>¥338,778</td><td>2</td><td>0.60 / 0.67</td></tr>
<tr><td><b>3861</b></td><td>2026-05-07</td><td>¥834</td><td>¥834</td><td class='neg'>-0.00%</td><td>406</td><td>¥338,442</td><td>2</td><td>0.59 / 0.55</td></tr>
<tr><td><b>9432</b></td><td>2026-05-01</td><td>¥152</td><td>¥151</td><td class='neg'>-0.79%</td><td>2,218</td><td>¥334,474</td><td>3</td><td>0.60 / 0.47</td></tr>
<tr><td><b>9513</b></td><td>2026-04-28</td><td>¥3,883</td><td>¥3,832</td><td class='neg'>-1.31%</td><td>87</td><td>¥333,384</td><td>5</td><td>0.57 / 0.62</td></tr>
</tbody></table>
</div>

<div class="section">
  <div class="section-title">일별 성과 이력 (최근 20일)</div>
  <table><thead><tr><th>날짜</th><th>총자산</th><th>일간</th><th>누적</th><th>α TOPIX</th><th>α Nikkei225</th><th>보유</th><th>매수</th><th>매도</th></tr></thead><tbody><tr><td>2026-05-08</td><td>¥10,179,331</td><td class="neg">-0.05%</td><td class="pos">+1.79%</td><td class="neg">-2.50%</td><td class="na">—</td><td>23</td><td class='pos'>9</td><td class='neg'>1</td></tr>
<tr><td>2026-05-07</td><td>¥10,184,382</td><td class="pos">+0.54%</td><td class="pos">+1.84%</td><td class="neg">-2.78%</td><td class="neg">-15.08%</td><td>15</td><td class='pos'>9</td><td class='neg'>0</td></tr>
<tr><td>2026-05-01</td><td>¥10,129,532</td><td class="neg">-0.34%</td><td class="pos">+1.30%</td><td class="neg">-0.09%</td><td class="neg">-9.45%</td><td>6</td><td class='pos'>2</td><td class='neg'>3</td></tr>
<tr><td>2026-04-30</td><td>¥10,163,633</td><td class="neg">-0.41%</td><td class="pos">+1.64%</td><td class="pos">+0.38%</td><td class="neg">-8.68%</td><td>7</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-28</td><td>¥10,205,677</td><td class="neg">-0.47%</td><td class="pos">+2.06%</td><td class="neg">-0.72%</td><td class="neg">-9.44%</td><td>7</td><td class='pos'>2</td><td class='neg'>3</td></tr>
<tr><td>2026-04-27</td><td>¥10,253,530</td><td class="pos">+0.64%</td><td class="pos">+2.54%</td><td class="pos">+0.81%</td><td class="neg">-10.11%</td><td>8</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-24</td><td>¥10,188,748</td><td class="pos">+0.07%</td><td class="pos">+1.89%</td><td class="pos">+0.73%</td><td class="neg">-9.23%</td><td>8</td><td class='pos'>0</td><td class='neg'>6</td></tr>
<tr><td>2026-04-23</td><td>¥10,181,704</td><td class="neg">-0.83%</td><td class="pos">+1.82%</td><td class="pos">+0.69%</td><td class="neg">-8.23%</td><td>14</td><td class='pos'>0</td><td class='neg'>4</td></tr>
<tr><td>2026-04-22</td><td>¥10,266,971</td><td class="neg">-0.57%</td><td class="pos">+2.67%</td><td class="pos">+0.69%</td><td class="neg">-8.21%</td><td>18</td><td class='pos'>0</td><td class='neg'>6</td></tr>
<tr><td>2026-04-21</td><td>¥10,326,349</td><td class="neg">-0.17%</td><td class="pos">+3.26%</td><td class="pos">+0.62%</td><td class="neg">-7.17%</td><td>24</td><td class='pos'>1</td><td class='neg'>7</td></tr>
<tr><td>2026-04-20</td><td>¥10,344,347</td><td class="pos">+0.17%</td><td class="pos">+3.44%</td><td class="pos">+0.51%</td><td class="neg">-6.02%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-17</td><td>¥10,327,093</td><td class="neg">-1.13%</td><td class="pos">+3.27%</td><td class="pos">+0.73%</td><td class="neg">-5.54%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-16</td><td>¥10,445,626</td><td class="pos">+1.36%</td><td class="pos">+4.46%</td><td class="pos">+0.55%</td><td class="neg">-6.30%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-15</td><td>¥10,305,021</td><td class="pos">+0.40%</td><td class="pos">+3.05%</td><td class="pos">+0.38%</td><td class="neg">-5.13%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-14</td><td>¥10,263,519</td><td class="pos">+1.24%</td><td class="pos">+2.64%</td><td class="pos">+0.32%</td><td class="neg">-5.06%</td><td>30</td><td class='pos'>1</td><td class='neg'>0</td></tr>
<tr><td>2026-04-13</td><td>¥10,137,816</td><td class="neg">-0.37%</td><td class="pos">+1.38%</td><td class="neg">-0.06%</td><td class="neg">-3.76%</td><td>29</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-10</td><td>¥10,175,528</td><td class="pos">+0.13%</td><td class="pos">+1.76%</td><td class="neg">-0.12%</td><td class="neg">-4.17%</td><td>29</td><td class='pos'>0</td><td class='neg'>1</td></tr>
<tr><td>2026-04-09</td><td>¥10,162,618</td><td class="neg">-0.96%</td><td class="pos">+1.63%</td><td class="neg">-0.30%</td><td class="neg">-2.39%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-08</td><td>¥10,261,306</td><td class="pos">+3.07%</td><td class="pos">+2.61%</td><td class="neg">-0.26%</td><td class="neg">-2.17%</td><td>30</td><td class='pos'>6</td><td class='neg'>0</td></tr>
<tr><td>2026-04-07</td><td>¥9,955,531</td><td class="neg">-0.08%</td><td class="neg">-0.44%</td><td class="neg">-0.09%</td><td class="pos">+0.13%</td><td>24</td><td class='pos'>2</td><td class='neg'>0</td></tr>
</tbody></table>
</div>

<footer>virtual_trader.py · 2026-05-16 21:26:31 KST</footer>

</div>
