---
layout: home
title: Home
permalink: /
---

<section class="cinema-home" data-cinema-home>
  <div class="cinema-scenes" aria-hidden="true">
    <div class="cinema-scene is-active" data-scene>
      <img src="/assets/img/home/hero-signal.webp" alt="" fetchpriority="high">
    </div>

    <div class="cinema-scene" data-scene>
      <img src="/assets/img/home/hero-regime.webp" alt="">
    </div>

    <div class="cinema-scene" data-scene>
      <img src="/assets/img/home/hero-network.webp" alt="">
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
