---
layout: home
title: Home
permalink: /
---

<section class="cinema-home" data-cinema-home>
  <div class="cinema-scenes" aria-hidden="true">
    <div class="cinema-scene is-active" data-scene>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="presentation">
        <defs>
          <radialGradient id="scene-a-glow" cx="72%" cy="32%" r="62%">
            <stop offset="0%" stop-color="#d8ff73" stop-opacity="0.95" />
            <stop offset="45%" stop-color="#8bd34a" stop-opacity="0.26" />
            <stop offset="100%" stop-color="#050705" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="scene-a-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
            <stop offset="20%" stop-color="#b9ff77" stop-opacity="0.3" />
            <stop offset="65%" stop-color="#d8ff73" stop-opacity="1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="#050705" />
        <rect width="1600" height="900" fill="url(#scene-a-glow)" />
        <g opacity="0.16">
          <path d="M0 170H1600 M0 300H1600 M0 430H1600 M0 560H1600 M0 690H1600" stroke="#ffffff" />
          <path d="M180 0V900 M420 0V900 M660 0V900 M900 0V900 M1140 0V900 M1380 0V900" stroke="#ffffff" />
        </g>
        <path
          d="M-30 650 C 180 620, 260 660, 430 552 S 660 340, 820 405 S 1080 298, 1215 355 S 1450 250, 1635 304"
          fill="none"
          stroke="url(#scene-a-line)"
          stroke-linecap="round"
          stroke-width="5"
        />
        <path
          d="M-30 650 C 180 620, 260 660, 430 552 S 660 340, 820 405 S 1080 298, 1215 355 S 1450 250, 1635 304"
          fill="none"
          stroke="#d8ff73"
          stroke-linecap="round"
          stroke-opacity="0.22"
          stroke-width="26"
        />
      </svg>
    </div>

    <div class="cinema-scene" data-scene>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="presentation">
        <defs>
          <radialGradient id="scene-b-glow" cx="26%" cy="56%" r="62%">
            <stop offset="0%" stop-color="#f4f0e8" stop-opacity="0.72" />
            <stop offset="38%" stop-color="#b9b1a3" stop-opacity="0.16" />
            <stop offset="100%" stop-color="#080706" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="#080706" />
        <rect width="1600" height="900" fill="url(#scene-b-glow)" />
        <g fill="none" stroke="#f4f0e8" stroke-opacity="0.2">
          <path d="M-60 766 C 156 602, 196 714, 412 546 S 688 374, 882 428 S 1166 194, 1662 278" />
          <path d="M-80 716 C 142 544, 206 650, 430 490 S 712 314, 918 376 S 1198 126, 1668 214" />
          <path d="M-96 668 C 120 490, 212 594, 438 442 S 734 256, 942 318 S 1210 84, 1678 156" />
          <path d="M-120 620 C 108 438, 224 536, 454 388 S 744 208, 956 266 S 1222 36, 1690 102" />
        </g>
        <g fill="none" stroke="#f4f0e8" stroke-opacity="0.1">
          <circle cx="430" cy="430" r="260" />
          <circle cx="430" cy="430" r="360" />
          <circle cx="430" cy="430" r="460" />
        </g>
      </svg>
    </div>

    <div class="cinema-scene" data-scene>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="presentation">
        <defs>
          <radialGradient id="scene-c-glow" cx="52%" cy="44%" r="65%">
            <stop offset="0%" stop-color="#c2d6ff" stop-opacity="0.62" />
            <stop offset="42%" stop-color="#7488b8" stop-opacity="0.14" />
            <stop offset="100%" stop-color="#05060a" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="#05060a" />
        <rect width="1600" height="900" fill="url(#scene-c-glow)" />
        <g fill="#dfe8ff">
          <circle cx="250" cy="645" r="5" />
          <circle cx="430" cy="525" r="7" />
          <circle cx="612" cy="560" r="5" />
          <circle cx="810" cy="360" r="8" />
          <circle cx="1042" cy="410" r="5" />
          <circle cx="1230" cy="240" r="7" />
          <circle cx="1375" cy="300" r="5" />
        </g>
        <g fill="none" stroke="#dfe8ff" stroke-opacity="0.34" stroke-width="2">
          <path d="M250 645 L430 525 L612 560 L810 360 L1042 410 L1230 240 L1375 300" />
          <path d="M430 525 L810 360 L1230 240" stroke-dasharray="8 12" />
        </g>
        <g fill="none" stroke="#dfe8ff" stroke-opacity="0.08">
          <circle cx="810" cy="360" r="120" />
          <circle cx="810" cy="360" r="220" />
          <circle cx="810" cy="360" r="320" />
        </g>
      </svg>
    </div>
  </div>

  <div class="cinema-grain" aria-hidden="true"></div>
  <div class="cinema-vignette" aria-hidden="true"></div>

  <div class="cinema-content">
    <p class="cinema-eyebrow">Multi-Market Alpha Lab</p>
    <div class="cinema-copy" aria-live="polite">
      <h1 data-title>Signals are only interesting after they survive time.</h1>
      <p data-body>
        A quiet research space for systematic investing, live experiments, and the structure beneath market noise.
      </p>
    </div>

    <div class="cinema-actions">
      <a href="/performance/">Live Reports</a>
      <a href="/blog/">Research Notes</a>
      <a href="/about/">About</a>
    </div>
  </div>

  <div class="cinema-index" aria-label="Scenes">
    <button class="is-active" type="button" data-scene-button="0" aria-label="Scene 1"></button>
    <button type="button" data-scene-button="1" aria-label="Scene 2"></button>
    <button type="button" data-scene-button="2" aria-label="Scene 3"></button>
  </div>

  <button class="cinema-scroll" type="button" data-scroll-next aria-label="Scroll to explore">
    <span></span>
  </button>
</section>

<section class="home-portals" data-reveal>
  <a href="/performance/">
    <span>01</span>
    <strong>Live Reports</strong>
    <em>See what the systems are doing now.</em>
  </a>
  <a href="/downloads/">
    <span>02</span>
    <strong>Data</strong>
    <em>Download logs, trades, and NAV history.</em>
  </a>
  <a href="/about/">
    <span>03</span>
    <strong>Method</strong>
    <em>Read the principles behind the work.</em>
  </a>
</section>

<script>
  (function () {
    const root = document.querySelector('[data-cinema-home]');
    if (!root) return;

    const scenes = Array.from(root.querySelectorAll('[data-scene]'));
    const buttons = Array.from(root.querySelectorAll('[data-scene-button]'));
    const title = root.querySelector('[data-title]');
    const body = root.querySelector('[data-body]');
    const copy = [
      {
        title: 'Signals are only interesting after they survive time.',
        body: 'A quiet research space for systematic investing, live experiments, and the structure beneath market noise.'
      },
      {
        title: 'Markets move. The method should remain legible.',
        body: 'Reports, logs, and research notes designed to show the process — not just the outcome.'
      },
      {
        title: 'Evidence first. Narrative second.',
        body: 'Multi-factor systems across markets, observed in public and refined in the open.'
      }
    ];

    let active = 0;
    let timer;

    function show(index) {
      active = index;
      scenes.forEach((scene, i) => scene.classList.toggle('is-active', i === index));
      buttons.forEach((button, i) => button.classList.toggle('is-active', i === index));
      root.classList.add('is-changing');
      window.setTimeout(() => {
        title.textContent = copy[index].title;
        body.textContent = copy[index].body;
        root.classList.remove('is-changing');
      }, 180);
    }

    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(() => show((active + 1) % scenes.length), 7000);
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        show(Number(button.dataset.sceneButton));
        restart();
      });
    });

    root.addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      root.style.setProperty('--pointer-x', x.toFixed(3));
      root.style.setProperty('--pointer-y', y.toFixed(3));
    });

    root.querySelector('[data-scroll-next]').addEventListener('click', () => {
      document.querySelector('.home-portals').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    const reveal = document.querySelector('[data-reveal]');
    if ('IntersectionObserver' in window && reveal) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      }, { threshold: 0.2 });
      observer.observe(reveal);
    } else if (reveal) {
      reveal.classList.add('is-visible');
    }

    restart();
  })();
</script>
