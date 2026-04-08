/**
 * Enter.pro Nav Controller
 * ─────────────────────────────────────────────────────────
 * 负责：键盘导航 / 触摸滑动 / 自动播放 / 幻灯片总览 / 全屏
 * 与内容完全解耦，不包含任何 slide HTML。
 * ─────────────────────────────────────────────────────────
 */

class NavController {
  constructor() {
    this.slides    = Array.from(document.querySelectorAll('.slide'));
    this.total     = this.slides.length;
    this.current   = 0;
    this.playing   = false;
    this.playTimer = null;
    this.playDelay = 4500;

    this.$progress = document.getElementById('progress-fill');
    this.$curNum   = document.getElementById('cur-num');
    this.$totNum   = document.getElementById('tot-num');
    this.$dots     = document.getElementById('dots');
    this.$btnPlay  = document.getElementById('btn-play');
    this.$btnPrev  = document.getElementById('btn-prev');
    this.$btnNext  = document.getElementById('btn-next');
    this.$btnOver  = document.getElementById('btn-overview');
    this.$overview = document.getElementById('overview');
    this.$overGrid = document.getElementById('overview-grid');
    this.$hints    = document.getElementById('hints');

    this._init();
  }

  /* ─── Init ─────────────────────────────────── */

  _init() {
    this.$totNum.textContent = this.total;
    this._buildDots();
    this._buildOverview();
    this._bindEvents();
    this._render();
  }

  _buildDots() {
    this.$dots.innerHTML = '';
    this.slides.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'dot' + (i === 0 ? ' is-active' : '');
      d.title = this.slides[i].dataset.title || `Slide ${i + 1}`;
      d.addEventListener('click', () => this.goTo(i));
      this.$dots.appendChild(d);
    });
  }

  _buildOverview() {
    this.$overGrid.innerHTML = '';
    const icons = ['🎯','✨','👥','⚡','🎨','🗂','🤖','⚡','☁️','🔗','📋','💎','💡','📬'];
    this.slides.forEach((slide, i) => {
      const thumb = document.createElement('div');
      thumb.className = 'ov-thumb' + (i === 0 ? ' is-current' : '');
      thumb.innerHTML = `
        <span class="ov-thumb-num">${i + 1}</span>
        <div class="ov-thumb-icon">${icons[i] || '▪'}</div>
        <div class="ov-thumb-title">${slide.dataset.title || 'Slide ' + (i + 1)}</div>
      `;
      thumb.addEventListener('click', () => {
        this.goTo(i);
        this.closeOverview();
      });
      this.$overGrid.appendChild(thumb);
    });
  }

  /* ─── Navigation ────────────────────────────── */

  goTo(index, dir = 'next') {
    if (index < 0 || index >= this.total || index === this.current) return;

    const prev = this.slides[this.current];
    const next = this.slides[index];

    prev.classList.remove('is-active', 'slide-in-right', 'slide-in-left');
    prev.classList.add(dir === 'next' ? 'slide-out-left' : 'slide-out-right');

    next.classList.remove('slide-out-left', 'slide-out-right');
    next.classList.add('is-active', dir === 'next' ? 'slide-in-right' : 'slide-in-left');

    setTimeout(() => {
      prev.classList.remove('slide-out-left', 'slide-out-right');
    }, 500);

    this.current = index;
    this._render();
  }

  next() { this.goTo(this.current + 1, 'next'); }
  prev() { this.goTo(this.current - 1, 'prev'); }

  /* ─── Autoplay ──────────────────────────────── */

  togglePlay() { this.playing ? this.stopPlay() : this.startPlay(); }

  startPlay() {
    this.playing = true;
    this.$btnPlay.textContent = '⏸';
    this.$btnPlay.title = '暂停 (Space)';
    this.playTimer = setInterval(() => {
      if (this.current >= this.total - 1) { this.stopPlay(); return; }
      this.next();
    }, this.playDelay);
  }

  stopPlay() {
    this.playing = false;
    this.$btnPlay.textContent = '▶';
    this.$btnPlay.title = '自动播放 (Space)';
    clearInterval(this.playTimer);
  }

  /* ─── Overview ──────────────────────────────── */

  toggleOverview()  { this.$overview.classList.toggle('is-open'); }
  closeOverview()   { this.$overview.classList.remove('is-open'); }

  /* ─── Fullscreen ────────────────────────────── */

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  /* ─── Render ────────────────────────────────── */

  _render() {
    const pct = this.total > 1 ? (this.current / (this.total - 1)) * 100 : 100;
    this.$progress.style.width = pct + '%';
    this.$curNum.textContent   = this.current + 1;

    this.$dots.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('is-active', i === this.current);
    });
    this.$overGrid.querySelectorAll('.ov-thumb').forEach((t, i) => {
      t.classList.toggle('is-current', i === this.current);
    });
  }

  /* ─── Events ──────────────────────────────────── */

  _bindEvents() {
    this.$btnNext.addEventListener('click', () => { this.stopPlay(); this.next(); });
    this.$btnPrev.addEventListener('click', () => { this.stopPlay(); this.prev(); });
    this.$btnPlay.addEventListener('click', () => this.togglePlay());
    this.$btnOver.addEventListener('click', () => this.toggleOverview());
    document.getElementById('btn-close-overview').addEventListener('click', () => this.closeOverview());
    document.getElementById('btn-fullscreen').addEventListener('click', () => this.toggleFullscreen());
    document.getElementById('btn-keyboard').addEventListener('click', () => {
      this.$hints.style.display = this.$hints.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown':  this.stopPlay(); this.next(); break;
        case 'ArrowLeft':  case 'ArrowUp':    this.stopPlay(); this.prev(); break;
        case ' ':    e.preventDefault(); this.togglePlay(); break;
        case 'f': case 'F': this.toggleFullscreen(); break;
        case 'o': case 'O': this.toggleOverview(); break;
        case 'Escape':
          this.closeOverview();
          this.$hints.style.display = 'none';
          break;
        case '?':
          this.$hints.style.display =
            this.$hints.style.display === 'flex' ? 'none' : 'flex';
          break;
        case 'Home': this.stopPlay(); this.goTo(0); break;
        case 'End':  this.stopPlay(); this.goTo(this.total - 1); break;
      }
    });

    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    document.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) { this.stopPlay(); dx < 0 ? this.next() : this.prev(); }
    }, { passive: true });
  }
}
