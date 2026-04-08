/**
 * Enter.pro Interactive Presentation
 * Presentation controller — keyboard, navigation, autoplay, overview
 */

class Presentation {
  constructor() {
    this.slides      = Array.from(document.querySelectorAll('.slide'));
    this.total       = this.slides.length;
    this.current     = 0;
    this.playing     = false;
    this.playTimer   = null;
    this.playDelay   = 4500; // ms per slide

    this.$progress   = document.getElementById('progress-fill');
    this.$curNum     = document.getElementById('cur-num');
    this.$totNum     = document.getElementById('tot-num');
    this.$dots       = document.getElementById('dots');
    this.$btnPlay    = document.getElementById('btn-play');
    this.$btnPrev    = document.getElementById('btn-prev');
    this.$btnNext    = document.getElementById('btn-next');
    this.$btnOver    = document.getElementById('btn-overview');
    this.$overview   = document.getElementById('overview');
    this.$overGrid   = document.getElementById('overview-grid');
    this.$hints      = document.getElementById('hints');

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

    const forward = index > this.current;
    const prevSlide = this.slides[this.current];
    const nextSlide = this.slides[index];

    // Step 1: instantly position incoming slide off-screen (no transition)
    nextSlide.classList.remove(
      'is-active', 'is-leaving-left', 'is-leaving-right',
      'is-enter-from-right', 'is-enter-from-left'
    );
    nextSlide.classList.add(forward ? 'is-enter-from-right' : 'is-enter-from-left');

    // Step 2: force reflow so browser registers the starting position
    nextSlide.getBoundingClientRect();

    // Step 3: animate outgoing slide
    prevSlide.classList.remove('is-active');
    prevSlide.classList.add(forward ? 'is-leaving-left' : 'is-leaving-right');

    // Step 4: animate incoming slide to center
    nextSlide.classList.remove('is-enter-from-right', 'is-enter-from-left');
    nextSlide.classList.add('is-active');

    // Cleanup outgoing slide after animation
    setTimeout(() => {
      prevSlide.classList.remove('is-leaving-left', 'is-leaving-right');
    }, 520);

    this.current = index;
    this._render();
  }

  next() { this.goTo((this.current + 1) % this.total, 'next'); }
  prev() { this.goTo((this.current - 1 + this.total) % this.total, 'prev'); }

  /* ─── Auto-play ──────────────────────────────── */

  togglePlay() {
    this.playing = !this.playing;
    if (this.playing) {
      this.$btnPlay.textContent = '⏸';
      this.$btnPlay.classList.add('is-playing');
      this.playTimer = setInterval(() => this.next(), this.playDelay);
    } else {
      this.$btnPlay.textContent = '▶';
      this.$btnPlay.classList.remove('is-playing');
      clearInterval(this.playTimer);
    }
  }

  stopPlay() {
    if (!this.playing) return;
    this.playing = false;
    this.$btnPlay.textContent = '▶';
    this.$btnPlay.classList.remove('is-playing');
    clearInterval(this.playTimer);
  }

  /* ─── Overview ────────────────────────────────── */

  openOverview() {
    this.$overview.classList.add('is-open');
    // Highlight current
    this.$overGrid.querySelectorAll('.ov-thumb').forEach((t, i) => {
      t.classList.toggle('is-current', i === this.current);
    });
  }

  closeOverview() {
    this.$overview.classList.remove('is-open');
  }

  toggleOverview() {
    this.$overview.classList.contains('is-open')
      ? this.closeOverview()
      : this.openOverview();
  }

  /* ─── Fullscreen ──────────────────────────────── */

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  /* ─── Render UI ──────────────────────────────── */

  _render() {
    const pct = this.total > 1
      ? (this.current / (this.total - 1)) * 100
      : 100;
    this.$progress.style.width = pct + '%';
    this.$curNum.textContent = this.current + 1;

    // Dots
    this.$dots.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('is-active', i === this.current);
    });

    // Overview thumbs
    this.$overGrid.querySelectorAll('.ov-thumb').forEach((t, i) => {
      t.classList.toggle('is-current', i === this.current);
    });
  }

  /* ─── Events ──────────────────────────────────── */

  _bindEvents() {
    // Buttons
    this.$btnNext.addEventListener('click', () => { this.stopPlay(); this.next(); });
    this.$btnPrev.addEventListener('click', () => { this.stopPlay(); this.prev(); });
    this.$btnPlay.addEventListener('click', () => this.togglePlay());
    this.$btnOver.addEventListener('click', () => this.toggleOverview());
    document.getElementById('btn-close-overview').addEventListener('click', () => this.closeOverview());
    document.getElementById('btn-fullscreen').addEventListener('click', () => this.toggleFullscreen());
    document.getElementById('btn-keyboard').addEventListener('click', () => {
      this.$hints.style.display = this.$hints.style.display === 'flex' ? 'none' : 'flex';
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          this.stopPlay(); this.next(); break;
        case 'ArrowLeft':
        case 'ArrowUp':
          this.stopPlay(); this.prev(); break;
        case ' ':
          e.preventDefault(); this.togglePlay(); break;
        case 'f':
        case 'F':
          this.toggleFullscreen(); break;
        case 'o':
        case 'O':
          this.toggleOverview(); break;
        case 'Escape':
          this.closeOverview();
          this.$hints.style.display = 'none';
          break;
        case '?':
          this.$hints.style.display =
            this.$hints.style.display === 'flex' ? 'none' : 'flex';
          break;
        case 'Home':
          this.stopPlay(); this.goTo(0); break;
        case 'End':
          this.stopPlay(); this.goTo(this.total - 1); break;
      }
    });

    // Touch / swipe
    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    document.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) {
        this.stopPlay();
        dx < 0 ? this.next() : this.prev();
      }
    }, { passive: true });

    // Stage click-to-advance removed — use arrow keys or buttons instead
    // This avoids interfering with text selection
  }
}

/* ─── Boot ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  window.pres = new Presentation();
});
