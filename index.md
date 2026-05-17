---
layout: default
title: Home
permalink: /
---

<section class="lab-home">
  <div class="lab-hero">
    <div class="lab-kicker">Multi-Market Alpha Lab</div>
    <h1>Systematic research for markets that do not sit still.</h1>
    <p>
      Multi-factor equity research across Korea, Japan, and China —
      live strategy logs, live reports, and research notes built from the same operating system.
    </p>
    <div class="lab-hero-actions">
      <a class="lab-btn lab-btn-primary" href="/performance/">View live reports</a>
      <a class="lab-btn" href="/downloads/">Download logs</a>
      <a class="lab-btn" href="https://github.com/parkminhyung/Multi-Factor-Alpha-Strategy" target="_blank" rel="noreferrer">
        GitHub repo
      </a>
    </div>
  </div>

  <div class="lab-market-shell" data-market-shell>
    <div class="lab-market-head">
      <span>Live strategy map</span>
      <div class="lab-tabs" role="tablist" aria-label="Markets">
        <button class="is-active" type="button" data-market-tab="krx" role="tab" aria-selected="true">KRX</button>
        <button type="button" data-market-tab="jpx" role="tab" aria-selected="false">JPX</button>
        <button type="button" data-market-tab="chn" role="tab" aria-selected="false">CHN</button>
      </div>
    </div>

    <article class="lab-market-panel is-active" data-market-panel="krx">
      <div>
        <div class="lab-market-label">Korea · KRX</div>
        <h2><span data-copy="krx">Daily virtual trading is live.</span></h2>
        <p>
          Korean equity signals, benchmark-aware monitoring, and downloadable NAV / trade logs
          are updated through the operating pipeline.
        </p>
      </div>
      <div class="lab-metrics">
        <div><span>Return</span><strong data-market-field="krx:return">—</strong></div>
        <div><span>Daily</span><strong data-market-field="krx:daily">—</strong></div>
        <div><span>MDD</span><strong data-market-field="krx:mdd">—</strong></div>
        <div><span>Positions</span><strong data-market-field="krx:positions">—</strong></div>
      </div>
      <div class="lab-sparkline" data-market-sparkline="krx" aria-hidden="true"></div>
      <a href="/performance/">Open KRX report <span data-market-field="krx:asof"></span></a>
    </article>

    <article class="lab-market-panel" data-market-panel="jpx">
      <div>
        <div class="lab-market-label">Japan · JPX</div>
        <h2>Japan strategy reporting is live.</h2>
        <p>
          JPX follows the same operating language: daily positions, allocation,
          benchmark-relative performance, and transparent live logs.
        </p>
      </div>
      <div class="lab-metrics">
        <div><span>Return</span><strong data-market-field="jpx:return">—</strong></div>
        <div><span>Daily</span><strong data-market-field="jpx:daily">—</strong></div>
        <div><span>MDD</span><strong data-market-field="jpx:mdd">—</strong></div>
        <div><span>Positions</span><strong data-market-field="jpx:positions">—</strong></div>
      </div>
      <div class="lab-sparkline" data-market-sparkline="jpx" aria-hidden="true"></div>
      <a href="/performance-jpx/">Open JPX page <span data-market-field="jpx:asof"></span></a>
    </article>

    <article class="lab-market-panel" data-market-panel="chn">
      <div>
        <div class="lab-market-label">China · CHN</div>
        <h2>China strategy reporting is already online.</h2>
        <p>
          CHN virtual trading reports expose the same research grammar:
          allocation, drawdown, benchmark-relative alpha, and trade diagnostics.
        </p>
      </div>
      <div class="lab-metrics">
        <div><span>Return</span><strong data-market-field="chn:return">—</strong></div>
        <div><span>Daily</span><strong data-market-field="chn:daily">—</strong></div>
        <div><span>MDD</span><strong data-market-field="chn:mdd">—</strong></div>
        <div><span>Positions</span><strong data-market-field="chn:positions">—</strong></div>
      </div>
      <div class="lab-sparkline" data-market-sparkline="chn" aria-hidden="true"></div>
      <a href="/performance-chn/">Open CHN report <span data-market-field="chn:asof"></span></a>
    </article>
  </div>

  <div class="lab-grid">
    <a class="lab-card" href="/performance/">
      <span>01</span>
      <h3>Live Reports</h3>
      <p>Strategy NAV, drawdown, allocation, and benchmark-relative alpha in one report.</p>
    </a>
    <a class="lab-card" href="/downloads/">
      <span>02</span>
      <h3>Data</h3>
      <p>Daily trade logs and performance CSVs for verification, replication, and auditability.</p>
    </a>
    <a class="lab-card" href="/about/">
      <span>03</span>
      <h3>Method</h3>
      <p>The model philosophy, factor architecture, and why the lab is built as a live system.</p>
    </a>
  </div>

  <section class="lab-notes">
    <div class="lab-section-head">
      <span>Latest notes</span>
      <a href="/blog/">All notes</a>
    </div>
    {% if site.posts.size > 0 %}
      <div class="lab-notes-list">
        {% for post in site.posts limit: 3 %}
          <a href="{{ post.url | relative_url }}">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
            <strong>{{ post.title }}</strong>
            {% if post.description %}
              <p>{{ post.description }}</p>
            {% endif %}
          </a>
        {% endfor %}
      </div>
    {% else %}
      <div class="lab-notes-empty">
        <strong>Research notes will live here.</strong>
        <p>
          Market structure, factor behavior, regime shifts, and operating lessons from the live system.
        </p>
      </div>
    {% endif %}
  </section>

  <div class="lab-note">
    <div>
      <span>Research stance</span>
      <p>
        Prefer evidence over narrative, live operation over polished backtests,
        and simple interfaces over ornamental dashboards.
      </p>
    </div>
    <small>
      Informational and research purposes only. Not investment advice.
    </small>
  </div>
</section>

<script>
  (function () {
    const shell = document.querySelector('[data-market-shell]');
    if (!shell) return;
    const tabs = shell.querySelectorAll('[data-market-tab]');
    const panels = shell.querySelectorAll('[data-market-panel]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const market = tab.dataset.marketTab;
        tabs.forEach((item) => {
          const active = item === tab;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-selected', String(active));
        });
        panels.forEach((panel) => {
          panel.classList.toggle('is-active', panel.dataset.marketPanel === market);
        });
      });
    });

    function fmtPct(value) {
      if (value == null || Number.isNaN(value)) return '—';
      const pct = value * 100;
      return `${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%`;
    }

    function setField(market, key, value, tone) {
      const el = shell.querySelector(`[data-market-field="${market}:${key}"]`);
      if (!el) return;
      el.textContent = value;
      if (tone) el.dataset.tone = tone;
    }

    function renderSparkline(market, values) {
      const host = shell.querySelector(`[data-market-sparkline="${market}"]`);
      if (!host || !Array.isArray(values) || values.length < 2) return;
      const width = 360;
      const height = 72;
      const min = Math.min(...values);
      const max = Math.max(...values);
      const spread = max - min || 1;
      const points = values.map((value, index) => {
        const x = (index / (values.length - 1)) * width;
        const y = height - ((value - min) / spread) * height;
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      }).join(' ');
      const latest = values[values.length - 1];
      const stroke = latest >= 0 ? '#16a34a' : '#e03131';
      host.innerHTML = `
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="presentation">
          <line x1="0" y1="${height}" x2="${width}" y2="${height}" />
          <polyline points="${points}" style="stroke:${stroke}" />
        </svg>
      `;
    }

    fetch('/assets/json/home_snapshot.json', { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((payload) => {
        Object.entries(payload.markets || {}).forEach(([market, data]) => {
          if (!data || data.status !== 'live') return;
          setField(market, 'return', fmtPct(data.cumulative_return), data.cumulative_return >= 0 ? 'pos' : 'neg');
          setField(market, 'daily', fmtPct(data.daily_return), data.daily_return >= 0 ? 'pos' : 'neg');
          setField(market, 'mdd', fmtPct(data.mdd), 'neg');
          setField(market, 'positions', `${data.n_positions}`);
          setField(market, 'asof', data.as_of ? `· ${data.as_of}` : '');
          renderSparkline(market, data.sparkline);
        });
      })
      .catch(() => {});
  })();
</script>
