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
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
.dl-wrap {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px; line-height: 1.6;
  max-width: 920px; margin: 0 auto; padding: 24px 0 48px;
}
.dl-wrap .dl-title { font-size: 14px; font-weight: 500; padding-bottom: 20px; margin-bottom: 28px; border-bottom: 1px solid #e8e6e1; }
.dl-wrap .dl-meta { font-size: 12px; color: #78776f; margin-top: 4px; font-weight: 300; }
.dl-tbl { width: 100%; border-collapse: collapse; }
.dl-tbl th { font-size: 10px; font-weight: 500; color: #b5b3ac; text-transform: uppercase; letter-spacing: 0.8px; padding: 8px 12px; border-bottom: 1px solid #e8e6e1; text-align: left; }
.dl-tbl td { padding: 12px; border-bottom: 1px solid #e8e6e1; vertical-align: top; }
.dl-tbl td.file { font-weight: 400; }
.dl-tbl td.desc { color: #78776f; font-weight: 300; }
.dl-tbl a.btn {
  display: inline-block; padding: 4px 12px; font-size: 11px; font-weight: 500;
  color: #1a1917; background: #f3f1ec; border: 1px solid #e8e6e1; border-radius: 4px;
  text-decoration: none; transition: background 0.15s;
}
.dl-tbl a.btn:hover { background: #e8e6e1; }
.dl-foot { font-size: 11px; color: #b5b3ac; margin-top: 32px; padding-top: 14px; border-top: 1px solid #e8e6e1; font-weight: 300; }
</style>
</head>
<body>

<div class="dl-wrap">

<div class="dl-title">
  Virtual Trading · Data Downloads
  <div class="dl-meta">매일 장마감 후 자동 갱신</div>
</div>

<table class="dl-tbl">
  <thead>
    <tr>
      <th style="width:30%">파일</th>
      <th style="width:50%">설명</th>
      <th style="width:20%; text-align:right">다운로드</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="file">virtual_trade_log.csv</td>
      <td class="desc">가상매매 체결 내역 — 종목, 진입/청산일, 가격, 수량, 손익</td>
      <td style="text-align:right"><a class="btn" href="{{ '/assets/downloads/virtual_trade_log.csv' | relative_url }}" download>CSV</a></td>
    </tr>
    <tr>
      <td class="file">virtual_perf_log.csv</td>
      <td class="desc">일별 성과 로그 — 총자산, 일간/누적 수익률, KOSPI/KOSPI200 대비 알파</td>
      <td style="text-align:right"><a class="btn" href="{{ '/assets/downloads/virtual_perf_log.csv' | relative_url }}" download>CSV</a></td>
    </tr>
  </tbody>
</table>

<div class="dl-foot">
  데이터는 <a href="/performance/">Performance</a> 페이지에 게시되는 일일 보고서와 동일한 시점의 스냅샷입니다.
</div>

</div>

</body>
</html>
