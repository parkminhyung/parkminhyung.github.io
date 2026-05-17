---
title: "CHN"
layout: page
permalink: /performance-chn/
---

<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
.vt-report-chn * { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #f8f8f6; --border: #e8e6e1;
  --text: #1a1917; --muted: #78776f; --faint: #b5b3ac;
  --pos: #16a34a; --neg: #e03131;
}
.vt-report-chn {
  background: var(--bg); color: var(--text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px; line-height: 1.6;
  max-width: 920px; margin: 0 auto; padding: 56px 40px 96px;
}
.vt-report-chn .pos { color: var(--pos); }
.vt-report-chn .neg { color: var(--neg); }
.vt-report-chn .na { color: var(--faint); }
.vt-report-chn .hdr { padding-bottom: 20px; margin-bottom: 32px; border-bottom: 1px solid var(--border); }
.vt-report-chn .hdr-title { font-size: 14px; font-weight: 500; }
.vt-report-chn .hdr-meta { font-size: 12px; color: var(--muted); margin-top: 3px; font-weight: 300; }

.vt-report-chn .kpi-row { display: grid; grid-template-columns: repeat(4,1fr); margin-bottom: 28px; border-bottom: 1px solid var(--border); }
.vt-report-chn .kpi-cell { padding: 18px 20px; border-right: 1px solid var(--border); }
.vt-report-chn .kpi-cell:first-child { padding-left: 0; }
.vt-report-chn .kpi-cell:last-child { padding-right: 0; border-right: none; }
.vt-report-chn .kpi-label { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
.vt-report-chn .kpi-num { font-size: 24px; font-weight: 300; line-height: 1; font-variant-numeric: tabular-nums; }
.vt-report-chn .kpi-sub { font-size: 11px; color: var(--muted); margin-top: 4px; font-weight: 300; }

.vt-report-chn .section { margin-bottom: 36px; }
.vt-report-chn .section-title { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 1px; padding-bottom: 10px; margin-bottom: 14px; border-bottom: 1px solid var(--border); }

.vt-report-chn .stat-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; }
.vt-report-chn .stat-tbl tr { border-bottom: 1px solid var(--border); }
.vt-report-chn .stat-tbl tr:last-child { border-bottom: none; }
.vt-report-chn .stat-tbl th { width: 22%; font-size: 11px; font-weight: 400; color: var(--faint); padding: 12px 12px 12px 0; text-align: left; vertical-align: top; }
.vt-report-chn .stat-tbl td { width: 28%; padding: 12px 12px 12px 0; vertical-align: top; text-align: left; }
.vt-report-chn .mv { font-size: 15px; font-weight: 400; font-variant-numeric: tabular-nums; color: var(--text); }
.vt-report-chn .mn { font-size: 11px; color: var(--muted); margin-top: 3px; font-weight: 300; }

.vt-report-chn .alloc-bar { height: 2px; background: var(--border); border-radius: 1px; overflow: hidden; margin: 12px 0 10px; display: flex; }
.vt-report-chn .alloc-bar-cash { background: var(--faint); height: 100%; }
.vt-report-chn .alloc-bar-stock { background: var(--pos);   height: 100%; }
.vt-report-chn .alloc-labels { font-size: 11px; color: var(--muted); display: flex; gap: 20px; font-weight: 300; }
.vt-report-chn .alloc-labels b { color: var(--text); font-weight: 400; }

.vt-report-chn .chart-wrap { position: relative; height: 180px; margin-bottom: 8px; }
.vt-report-chn .chart-legend { display: flex; gap: 20px; font-size: 11px; color: var(--muted); margin-top: 8px; font-weight: 300; }
.vt-report-chn .leg-dot { display: inline-block; width: 12px; height: 1px; margin-right: 5px; vertical-align: middle; }

.vt-report-chn table:not(.stat-tbl) { width: 100%; border-collapse: collapse; }
.vt-report-chn table:not(.stat-tbl) th { font-size: 10px; font-weight: 500; color: var(--faint); text-transform: uppercase; letter-spacing: 0.8px; padding: 7px 12px; border-bottom: 1px solid var(--border); text-align: right; white-space: nowrap; }
.vt-report-chn table:not(.stat-tbl) th:first-child { text-align: left; padding-left: 0; }
.vt-report-chn table:not(.stat-tbl) td { padding: 8px 12px; border-bottom: 1px solid var(--border); text-align: right; font-variant-numeric: tabular-nums; color: var(--muted); font-weight: 300; }
.vt-report-chn table:not(.stat-tbl) td:first-child { text-align: left; color: var(--text); padding-left: 0; font-weight: 400; }
.vt-report-chn table:not(.stat-tbl) tr:last-child td { border-bottom: none; }
.vt-report-chn table:not(.stat-tbl) tr:hover td { color: var(--text); }
.vt-report-chn table:not(.stat-tbl) td.pos { color: var(--pos); font-weight: 500; }
.vt-report-chn table:not(.stat-tbl) td.neg { color: var(--neg); font-weight: 500; }
.vt-report-chn .empty { font-size: 12px; color: var(--faint); padding: 16px 0; font-weight: 300; }
.vt-report-chn footer { font-size: 11px; color: var(--faint); margin-top: 56px; border-top: 1px solid var(--border); padding-top: 14px; font-weight: 300; }
@media (max-width: 900px) { .vt-report-chn { padding: 28px 18px 56px; } .vt-report-chn .kpi-row { grid-template-columns: repeat(2,1fr); } }
</style>
<div class="vt-report-chn">


<div class="hdr">
  <div class="hdr-title">Virtual Trading · CHN</div>
  <div class="hdr-meta">
    Daily Report · 2026-05-11 · 초기자본 ¥1,000,000
    · 보유 19/30
    · 오늘 매수 1 · 매도 0
  </div>
</div>

<div class="kpi-row">
  <div class="kpi-cell">
    <div class="kpi-label">총 자산</div>
    <div class="kpi-num">¥1,031,432</div>
    <div class="kpi-sub">+¥31,432</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">누적 수익률</div>
    <div class="kpi-num pos">+3.14%</div>
    <div class="kpi-sub">초기자본 대비</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">일간 수익률</div>
    <div class="kpi-num pos">+0.31%</div>
    <div class="kpi-sub">전일 대비</div>
  </div>
  <div class="kpi-cell">
    <div class="kpi-label">α vs CSI300</div>
    <div class="kpi-num"><span class="neg">-6.26%</span></div>
    <div class="kpi-sub">α vs SSE_Composite · <span class="neg">-3.86%</span></div>
  </div>
</div>

<div class="section">
  <div class="section-title">성과 지표</div>
  <table class="stat-tbl"><tbody>
    <tr>
      <th>보유 종목</th>
      <td>
        <div class="mv">19 / 30</div>
        <div class="mn">오늘 매수 1 · 매도 0</div>
      </td>
      <th>총 거래 비용</th>
      <td>
        <div class="mv"><span class="neg">-¥7,651</span></div>
        <div class="mn">수수료 ¥7,200 + 거래세 ¥451</div>
      </td>
    </tr>
    <tr>
      <th>승률</th>
      <td>
        <div class="mv"><span class="pos">50.0%</span></div>
        <div class="mn">청산 28건 기준</div>
      </td>
      <th>Profit Factor</th>
      <td>
        <div class="mv"><span class="pos">1.47</span></div>
        <div class="mn">총수익 ÷ 총손실 (≥1 양호)</div>
      </td>
    </tr>
    <tr>
      <th>평균 수익 / 손실</th>
      <td>
        <div class="mv">
          <span class="pos">+4.91%</span>
          <span class="na"> / </span>
          <span class="neg">-3.33%</span>
        </div>
        <div class="mn">이긴 거래 / 진 거래</div>
      </td>
      <th>MDD</th>
      <td>
        <div class="mv"><span class="neg">-1.60%</span></div>
        <div class="mn">고점 대비 최대 하락</div>
      </td>
    </tr>
    <tr>
      <th>평균 미실현 손익</th>
      <td>
        <div class="mv"><span class="pos">+5.65%</span></div>
        <div class="mn">보유 19종목 기준</div>
      </td>
      <th>평균 보유일</th>
      <td>
        <div class="mv">14.5일</div>
        <div class="mn">청산 종목 기준</div>
      </td>
    </tr>
    <tr>
      <th>연환산 수익률 / 변동성</th>
      <td>
        <div class="mv">
          <span class="pos">+38.4%</span> / 11.9%
        </div>
        <div class="mn">CAGR / 일간수익률 × √252</div>
      </td>
      <th>Sharpe / Sortino</th>
      <td>
        <div class="mv">
          <span class="pos">2.93</span> / <span class="pos">6.12</span>
        </div>
        <div class="mn">Rf=3.5% / 하방 변동성 기준</div>
      </td>
    </tr>
    <tr>
      <th>Calmar / Beta / IR</th>
      <td colspan="3">
        <div class="mv">
          <span class="pos">24.00</span>
          &nbsp;/&nbsp;
          0.61
          &nbsp;/&nbsp;
          <span class="neg">-6.68</span>
        </div>
        <div class="mn">연수익÷MDD &nbsp;·&nbsp; 시장민감도(β) &nbsp;·&nbsp; 초과수익 일관성(IR)</div>
      </td>
    </tr>
  </tbody></table>
</div>

<div class="section">
  <div class="section-title">자산 배분</div>
  <div class="alloc-bar">
    <div class="alloc-bar-cash" style="width:39.1%"></div>
    <div class="alloc-bar-stock" style="width:60.9%"></div>
  </div>
  <div class="alloc-labels">
    <span>현금 <b>¥402,795</b> (39.1%)</span>
    <span>주식 <b>¥628,637</b> (60.9%)</span>
  </div>
</div>

<div class="section">
  <div class="section-title">누적 수익률</div>
  <div class="chart-wrap"><canvas id="perfChart"></canvas></div>
  <div class="chart-legend">
    <span><span class="leg-dot" style="background:#1a1917;"></span>포트폴리오 <b class="pos">+3.14%</b></span>
    <span><span class="leg-dot" style="background:#a0998e;"></span>CSI300</span>
    <span><span class="leg-dot" style="background:#c5c2bb;"></span>SSE_Composite</span>
  </div>
</div>

<div class="section">
  <div class="section-title">알파 (포트폴리오 - 벤치마크)</div>
  <div class="chart-wrap"><canvas id="alphaChart"></canvas></div>
  <div class="chart-legend">
    <span><span class="leg-dot" style="background:#a0998e;"></span>α vs CSI300</span>
    <span><span class="leg-dot" style="background:#c5c2bb;"></span>α vs SSE_Composite</span>
  </div>
</div>

<script>
(function() {
  const raw = {"labels": ["2026-04-01", "2026-04-02", "2026-04-03", "2026-04-07", "2026-04-08", "2026-04-09", "2026-04-10", "2026-04-13", "2026-04-14", "2026-04-15", "2026-04-16", "2026-04-17", "2026-04-20", "2026-04-21", "2026-04-22", "2026-04-23", "2026-04-24", "2026-04-27", "2026-04-28", "2026-04-29", "2026-04-30", "2026-05-06", "2026-05-07", "2026-05-08", "2026-05-11"], "portfolio": [-0.0877, -0.4804, -0.8297, -0.6185, 1.7247, 0.3822, 1.3164, 1.4017, 2.1924, 1.6547, 2.3105, 2.3199, 3.3559, 2.844, 3.9134, 3.6306, 2.8956, 3.065, 2.4654, 2.5102, 2.3137, 2.6492, 2.6718, 2.8207, 3.1432], "kospi": [0.0, -1.042, -1.8842, -1.8879, 1.5353, 0.8871, 2.4414, 2.6533, 3.8711, 3.517, 4.6517, 4.4763, 5.1119, 5.3453, 6.0441, 5.7502, 5.3755, 5.4104, 5.129, 6.281, 6.2138, 7.7555, 8.273, 7.6411, 9.407], "kospi200": [0.0, -0.7412, -1.7337, -1.4787, 1.1763, 0.4462, 0.9541, 1.0132, 1.9773, 1.992, 2.7097, 2.6053, 3.3829, 3.4576, 3.994, 3.6646, 3.3265, 3.4897, 3.2945, 4.0258, 4.1435, 5.3595, 5.8639, 5.8604, 7.0018], "alphaK": [-0.0877, 0.5616, 1.0545, 1.2694, 0.1894, -0.5049, -1.125, -1.2516, -1.6787, -1.8623, -2.3412, -2.1564, -1.756, -2.5013, -2.1307, -2.1196, -2.4799, -2.3454, -2.6636, -3.7708, -3.9001, -5.1063, -5.6012, -4.8204, -6.2638], "alphaK200": [-0.0877, 0.2608, 0.904, 0.8602, 0.5484, -0.064, 0.3623, 0.3885, 0.2151, -0.3373, -0.3992, -0.2854, -0.027, -0.6136, -0.0806, -0.034, -0.4309, -0.4247, -0.8291, -1.5156, -1.8298, -2.7103, -3.1921, -3.0397, -3.8586]};
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
        { label: "CSI300", data: raw.kospi, borderColor: "#a0998e", backgroundColor: "transparent", borderWidth: 1, pointRadius: 0, tension: 0.2, spanGaps: true },
        { label: "SSE_Composite", data: raw.kospi200, borderColor: "#c5c2bb", backgroundColor: "transparent", borderWidth: 1, pointRadius: 0, tension: 0.2, spanGaps: true }
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
          label: "α vs CSI300",
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
          label: "α vs SSE_Composite",
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
  <div class="section-title">오늘 매매 (2026-05-11)</div>
  <table><thead><tr><th>구분</th><th>종목</th><th>체결가</th><th>수량</th><th>거래금액</th><th>실현손익</th><th>사유</th></tr></thead><tbody><tr><td class='pos'><b>매수</b></td><td><b>600585</b></td><td>¥21</td><td>1,500주</td><td>¥32,145</td><td class="na">—</td><td></td></tr>
</tbody></table>
</div>

<div class="section">
  <div class="section-title">보유 종목 (19)</div>
  <table><thead><tr><th>종목</th><th>진입일</th><th>진입가</th><th>현재가</th><th>미실현손익</th><th>수량</th><th>평가금액</th><th>보유일</th><th>S1/S2</th></tr></thead><tbody><tr><td><b>688126</b></td><td>2026-04-08</td><td>¥18</td><td>¥24</td><td class='pos'>+35.29%</td><td>1,800</td><td>¥43,542</td><td>21</td><td>0.57 / 0.75</td></tr>
<tr><td><b>600150</b></td><td>2026-04-03</td><td>¥31</td><td>¥41</td><td class='pos'>+34.97%</td><td>1,000</td><td>¥41,180</td><td>23</td><td>0.60 / 0.47</td></tr>
<tr><td><b>300433</b></td><td>2026-05-07</td><td>¥28</td><td>¥31</td><td class='pos'>+11.59%</td><td>1,200</td><td>¥36,984</td><td>3</td><td>0.59 / 0.65</td></tr>
<tr><td><b>600048</b></td><td>2026-04-29</td><td>¥6</td><td>¥7</td><td class='pos'>+8.14%</td><td>5,500</td><td>¥36,520</td><td>6</td><td>0.55 / 0.56</td></tr>
<tr><td><b>603501</b></td><td>2026-04-24</td><td>¥95</td><td>¥101</td><td class='pos'>+6.58%</td><td>300</td><td>¥30,414</td><td>9</td><td>0.56 / 0.58</td></tr>
<tr><td><b>000425</b></td><td>2026-04-29</td><td>¥10</td><td>¥11</td><td class='pos'>+6.50%</td><td>3,300</td><td>¥36,201</td><td>6</td><td>0.60 / 0.65</td></tr>
<tr><td><b>600497</b></td><td>2026-05-07</td><td>¥10</td><td>¥10</td><td class='pos'>+5.58%</td><td>3,500</td><td>¥35,735</td><td>3</td><td>0.56 / 0.61</td></tr>
<tr><td><b>300033</b></td><td>2026-05-07</td><td>¥247</td><td>¥255</td><td class='pos'>+3.16%</td><td>100</td><td>¥25,506</td><td>3</td><td>0.56 / 0.51</td></tr>
<tr><td><b>000157</b></td><td>2026-04-30</td><td>¥8</td><td>¥8</td><td class='pos'>+2.62%</td><td>4,200</td><td>¥34,524</td><td>5</td><td>0.57 / 0.50</td></tr>
<tr><td><b>000958</b></td><td>2026-05-08</td><td>¥6</td><td>¥6</td><td class='pos'>+1.97%</td><td>5,600</td><td>¥34,720</td><td>2</td><td>0.55 / 0.48</td></tr>
<tr><td><b>002555</b></td><td>2026-05-06</td><td>¥22</td><td>¥22</td><td class='pos'>+1.34%</td><td>1,500</td><td>¥32,985</td><td>4</td><td>0.55 / 0.53</td></tr>
<tr><td><b>600061</b></td><td>2026-05-06</td><td>¥7</td><td>¥7</td><td class='pos'>+0.15%</td><td>5,000</td><td>¥33,750</td><td>4</td><td>0.59 / 0.39</td></tr>
<tr><td><b>600585</b></td><td>2026-05-11</td><td>¥21</td><td>¥21</td><td class='pos'>+0.00%</td><td>1,500</td><td>¥32,145</td><td>1</td><td>0.57 / 0.44</td></tr>
<tr><td><b>601061</b></td><td>2026-04-02</td><td>¥12</td><td>¥12</td><td class='pos'>+0.00%</td><td>2,800</td><td>¥32,368</td><td>24</td><td>0.57 / 0.48</td></tr>
<tr><td><b>600436</b></td><td>2026-05-07</td><td>¥141</td><td>¥141</td><td class='neg'>-0.21%</td><td>200</td><td>¥28,180</td><td>3</td><td>0.59 / 0.55</td></tr>
<tr><td><b>600988</b></td><td>2026-05-07</td><td>¥42</td><td>¥42</td><td class='neg'>-0.76%</td><td>800</td><td>¥33,632</td><td>3</td><td>0.60 / 0.76</td></tr>
<tr><td><b>605499</b></td><td>2026-04-20</td><td>¥204</td><td>¥198</td><td class='neg'>-2.93%</td><td>100</td><td>¥19,775</td><td>13</td><td>0.59 / 0.55</td></tr>
<tr><td><b>600352</b></td><td>2026-04-27</td><td>¥13</td><td>¥13</td><td class='neg'>-3.68%</td><td>2,600</td><td>¥32,630</td><td>8</td><td>0.56 / 0.54</td></tr>
<tr><td><b>002311</b></td><td>2026-04-28</td><td>¥49</td><td>¥46</td><td class='neg'>-5.52%</td><td>600</td><td>¥27,846</td><td>7</td><td>0.57 / 0.60</td></tr>
</tbody></table>
</div>

<div class="section">
  <div class="section-title">일별 성과 이력 (최근 20일)</div>
  <table><thead><tr><th>날짜</th><th>총자산</th><th>일간</th><th>누적</th><th>α CSI300</th><th>α SSE_Composite</th><th>보유</th><th>매수</th><th>매도</th></tr></thead><tbody><tr><td>2026-05-11</td><td>¥1,031,432</td><td class="pos">+0.31%</td><td class="pos">+3.14%</td><td class="neg">-6.26%</td><td class="neg">-3.86%</td><td>19</td><td class='pos'>1</td><td class='neg'>0</td></tr>
<tr><td>2026-05-08</td><td>¥1,028,207</td><td class="pos">+0.14%</td><td class="pos">+2.82%</td><td class="neg">-4.82%</td><td class="neg">-3.04%</td><td>18</td><td class='pos'>1</td><td class='neg'>0</td></tr>
<tr><td>2026-05-07</td><td>¥1,026,718</td><td class="pos">+0.02%</td><td class="pos">+2.67%</td><td class="neg">-5.60%</td><td class="neg">-3.19%</td><td>17</td><td class='pos'>5</td><td class='neg'>0</td></tr>
<tr><td>2026-05-06</td><td>¥1,026,492</td><td class="pos">+0.33%</td><td class="pos">+2.65%</td><td class="neg">-5.11%</td><td class="neg">-2.71%</td><td>12</td><td class='pos'>2</td><td class='neg'>0</td></tr>
<tr><td>2026-04-30</td><td>¥1,023,137</td><td class="neg">-0.19%</td><td class="pos">+2.31%</td><td class="neg">-3.90%</td><td class="neg">-1.83%</td><td>10</td><td class='pos'>1</td><td class='neg'>2</td></tr>
<tr><td>2026-04-29</td><td>¥1,025,102</td><td class="pos">+0.04%</td><td class="pos">+2.51%</td><td class="neg">-3.77%</td><td class="neg">-1.52%</td><td>11</td><td class='pos'>2</td><td class='neg'>1</td></tr>
<tr><td>2026-04-28</td><td>¥1,024,654</td><td class="neg">-0.58%</td><td class="pos">+2.47%</td><td class="neg">-2.66%</td><td class="neg">-0.83%</td><td>10</td><td class='pos'>1</td><td class='neg'>10</td></tr>
<tr><td>2026-04-27</td><td>¥1,030,650</td><td class="pos">+0.16%</td><td class="pos">+3.06%</td><td class="neg">-2.35%</td><td class="neg">-0.42%</td><td>19</td><td class='pos'>1</td><td class='neg'>1</td></tr>
<tr><td>2026-04-24</td><td>¥1,028,956</td><td class="neg">-0.71%</td><td class="pos">+2.90%</td><td class="neg">-2.48%</td><td class="neg">-0.43%</td><td>19</td><td class='pos'>1</td><td class='neg'>3</td></tr>
<tr><td>2026-04-23</td><td>¥1,036,306</td><td class="neg">-0.27%</td><td class="pos">+3.63%</td><td class="neg">-2.12%</td><td class="neg">-0.03%</td><td>21</td><td class='pos'>1</td><td class='neg'>1</td></tr>
<tr><td>2026-04-22</td><td>¥1,039,134</td><td class="pos">+1.04%</td><td class="pos">+3.91%</td><td class="neg">-2.13%</td><td class="neg">-0.08%</td><td>21</td><td class='pos'>0</td><td class='neg'>5</td></tr>
<tr><td>2026-04-21</td><td>¥1,028,440</td><td class="neg">-0.50%</td><td class="pos">+2.84%</td><td class="neg">-2.50%</td><td class="neg">-0.61%</td><td>26</td><td class='pos'>0</td><td class='neg'>4</td></tr>
<tr><td>2026-04-20</td><td>¥1,033,559</td><td class="pos">+1.01%</td><td class="pos">+3.36%</td><td class="neg">-1.76%</td><td class="neg">-0.03%</td><td>30</td><td class='pos'>1</td><td class='neg'>1</td></tr>
<tr><td>2026-04-17</td><td>¥1,023,199</td><td class="pos">+0.01%</td><td class="pos">+2.32%</td><td class="neg">-2.16%</td><td class="neg">-0.29%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-16</td><td>¥1,023,105</td><td class="pos">+0.65%</td><td class="pos">+2.31%</td><td class="neg">-2.34%</td><td class="neg">-0.40%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-15</td><td>¥1,016,547</td><td class="neg">-0.53%</td><td class="pos">+1.65%</td><td class="neg">-1.86%</td><td class="neg">-0.34%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-14</td><td>¥1,021,924</td><td class="pos">+0.78%</td><td class="pos">+2.19%</td><td class="neg">-1.68%</td><td class="pos">+0.22%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-13</td><td>¥1,014,017</td><td class="pos">+0.08%</td><td class="pos">+1.40%</td><td class="neg">-1.25%</td><td class="pos">+0.39%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-10</td><td>¥1,013,164</td><td class="pos">+0.93%</td><td class="pos">+1.32%</td><td class="neg">-1.12%</td><td class="pos">+0.36%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
<tr><td>2026-04-09</td><td>¥1,003,822</td><td class="neg">-1.32%</td><td class="pos">+0.38%</td><td class="neg">-0.50%</td><td class="neg">-0.06%</td><td>30</td><td class='pos'>0</td><td class='neg'>0</td></tr>
</tbody></table>
</div>

<footer>virtual_trader.py · 2026-05-16 21:30:46 KST</footer>

</div>
