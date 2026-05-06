---
title: "Downloads"
layout: page
permalink: /downloads/
nav: true
order: 4
description: 가상매매(virtual trading) 거래·성과 로그 데이터 다운로드.
---

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap" rel="stylesheet">
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" rel="stylesheet">
<style>
.dl-page *,.dl-page *::before,.dl-page *::after{box-sizing:border-box;}
.dl-page{
  --ink:#0d1117; --ink-2:#1f2937; --ink-3:#4b5563; --ink-4:#9ca3af;
  --bg:#f4f6f9; --surface:#ffffff;
  --border:rgba(0,0,0,0.07); --sep:#f0f2f5;
  --blue:#2563eb; --blue-dim:rgba(37,99,235,0.08);
  --radius:10px;
  --shadow:0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
  font-family:'Satoshi','Inter',-apple-system,BlinkMacSystemFont,sans-serif;
  font-size:14px; line-height:1.7;
  color:var(--ink);
  -webkit-font-smoothing:antialiased;
  max-width:920px; margin:0 auto; padding:32px 0 80px;
}

.dl-header{
  background:var(--ink);
  border-radius:var(--radius);
  padding:32px 40px;
  margin-bottom:28px;
  box-shadow:var(--shadow);
}
.dl-eyebrow{
  font-size:10px; font-weight:600; letter-spacing:3px;
  text-transform:uppercase;
  color:rgba(255,255,255,0.4);
  margin-bottom:10px;
}
.dl-title{
  font-size:24px; font-weight:700;
  color:#f9fafb; letter-spacing:-0.5px; line-height:1.2;
}
.dl-meta{
  font-size:12px; color:rgba(255,255,255,0.5);
  margin-top:10px; font-weight:300;
}

.dl-section{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--radius);
  margin-bottom:20px;
  overflow:hidden;
  box-shadow:var(--shadow);
}
.dl-section-head{
  display:flex; align-items:baseline; justify-content:space-between;
  padding:20px 28px;
  border-bottom:1px solid var(--sep);
  gap:16px;
}
.dl-section-title{
  display:flex; align-items:baseline; gap:12px;
}
.dl-flag{
  font-family:'Satoshi','Inter',sans-serif;
  font-size:10px; font-weight:700; letter-spacing:1.5px;
  color:var(--blue); background:var(--blue-dim);
  padding:4px 9px; border-radius:4px;
}
.dl-section-title h2{
  font-size:15px; font-weight:600;
  color:var(--ink); letter-spacing:-0.2px;
  margin:0;
}
.dl-section-sub{
  font-size:11px; color:var(--ink-4); font-weight:400;
}
.dl-empty{
  padding:28px;
  text-align:center;
  color:var(--ink-4);
  font-size:12px; font-weight:300;
  letter-spacing:0.3px;
}

.dl-tbl{ width:100%; border-collapse:collapse; }
.dl-tbl th{
  font-size:10px; font-weight:600;
  color:var(--ink-4); text-transform:uppercase; letter-spacing:1px;
  padding:14px 28px; border-bottom:1px solid var(--sep);
  text-align:left; background:#fafbfc;
}
.dl-tbl td{
  padding:16px 28px;
  border-bottom:1px solid var(--sep);
  vertical-align:top;
  font-size:13px;
}
.dl-tbl tr:last-child td{ border-bottom:none; }
.dl-tbl td.file{
  font-family:'Inter',monospace;
  font-weight:500; color:var(--ink-2);
  font-size:12.5px;
}
.dl-tbl td.desc{
  color:var(--ink-3); font-weight:400;
}
.dl-tbl td.act{ text-align:right; }

.dl-btn{
  display:inline-block;
  padding:6px 14px;
  font-size:11px; font-weight:600; letter-spacing:0.4px;
  color:#ffffff; background:var(--ink);
  border-radius:6px;
  text-decoration:none !important;
  transition:transform 0.15s ease, background 0.15s ease;
}
.dl-btn:hover{ background:var(--ink-2); transform:translateY(-1px); color:#fff !important; }

.dl-foot{
  font-size:11px; color:var(--ink-4); font-weight:300;
  margin-top:24px; padding:14px 4px 0;
  border-top:1px solid var(--border);
  letter-spacing:0.2px;
}
.dl-foot a{ color:var(--blue); text-decoration:none; }
.dl-foot a:hover{ text-decoration:underline; }

@media (max-width:640px){
  .dl-page{ padding:20px 0 60px; }
  .dl-header{ padding:24px 22px; }
  .dl-title{ font-size:20px; }
  .dl-section-head{ padding:16px 18px; flex-direction:column; align-items:flex-start; gap:6px; }
  .dl-tbl th, .dl-tbl td{ padding:12px 18px; }
  .dl-tbl td.file{ font-size:11.5px; }
}
</style>
</head>
<body>

<div class="dl-page">

  <div class="dl-header">
    <div class="dl-eyebrow">Virtual Trading · Data</div>
    <div class="dl-title">Downloads</div>
    <div class="dl-meta">매일 장마감 후 자동 갱신 · 시장별 가상매매 체결·성과 로그</div>
  </div>

  <!-- ── KRX ── -->
  <section class="dl-section">
    <div class="dl-section-head">
      <div class="dl-section-title">
        <span class="dl-flag">KRX</span>
        <h2>Korea Exchange</h2>
      </div>
      <span class="dl-section-sub">KOSPI / KOSPI200 alpha</span>
    </div>
    <table class="dl-tbl">
      <thead>
        <tr>
          <th style="width:32%">파일</th>
          <th style="width:52%">설명</th>
          <th style="width:16%; text-align:right">다운로드</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="file">virtual_trade_log.csv</td>
          <td class="desc">가상매매 체결 내역 — 종목, 진입/청산일, 가격, 수량, 손익</td>
          <td class="act"><a class="dl-btn" href="{{ '/assets/downloads/krx/virtual_trade_log.csv' | relative_url }}" download>CSV</a></td>
        </tr>
        <tr>
          <td class="file">virtual_perf_log.csv</td>
          <td class="desc">일별 성과 로그 — 총자산, 일간/누적 수익률, KOSPI/KOSPI200 대비 알파</td>
          <td class="act"><a class="dl-btn" href="{{ '/assets/downloads/krx/virtual_perf_log.csv' | relative_url }}" download>CSV</a></td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- ── JPX ── -->
  <section class="dl-section">
    <div class="dl-section-head">
      <div class="dl-section-title">
        <span class="dl-flag">JPX</span>
        <h2>Japan Exchange</h2>
      </div>
      <span class="dl-section-sub">TOPIX / Nikkei225 alpha</span>
    </div>
    <div class="dl-empty">데이터 준비 중 — 추후 업로드 예정</div>
  </section>

  <!-- ── CHN ── -->
  <section class="dl-section">
    <div class="dl-section-head">
      <div class="dl-section-title">
        <span class="dl-flag">CHN</span>
        <h2>China A-Shares</h2>
      </div>
      <span class="dl-section-sub">CSI300 / SSE Composite alpha</span>
    </div>
    <div class="dl-empty">데이터 준비 중 — 추후 업로드 예정</div>
  </section>

  <div class="dl-foot">
    데이터는 <a href="{{ '/performance/' | relative_url }}">Performance</a> 페이지에 게시되는 일일 보고서와 동일한 시점의 스냅샷입니다.
  </div>

</div>

</body>
</html>
