/**
 * Enter.pro App Entry Point
 * ─────────────────────────────────────────────────────────
 * 1. 从 window.EnterSlides.ALL 拉取所有 slide 函数
 * 2. 渲染到 #stage（第一个自动加 is-active）
 * 3. 初始化 NavController
 *
 * 加载顺序（index.html 中）：
 *   slides.js  →  nav.js  →  app.js
 * ─────────────────────────────────────────────────────────
 */

document.addEventListener('DOMContentLoaded', function () {
  var stage = document.getElementById('stage');
  if (!stage) { console.error('[app] #stage not found'); return; }

  // 渲染所有 slides
  var allSlides = window.EnterSlides && window.EnterSlides.ALL;
  if (!allSlides || !allSlides.length) {
    console.error('[app] window.EnterSlides.ALL not found — check slides.js');
    return;
  }

  stage.innerHTML = allSlides.map(function (fn, i) {
    var html = fn();
    if (i === 0) {
      // 确保第一个 slide 有 is-active
      return html.replace(/class="slide /, 'class="slide is-active ');
    }
    // 其余 slide 移除 is-active（以防 slides.js 里写了）
    return html.replace(/ is-active/g, '');
  }).join('\n');

  // 启动导航控制器
  window.pres = new NavController();
});
