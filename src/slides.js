/**
 * Enter.pro Slides — 内容模块
 * ─────────────────────────────────────────────────────────
 * 每个 slide 是一个独立函数，返回完整的 <section> HTML 字符串。
 * 修改某一页时，只需找到对应函数编辑即可。
 *
 * 函数命名规则：slide01Cover, slide02What ...
 * 最终通过 window.EnterSlides.ALL 数组按顺序渲染。
 * ─────────────────────────────────────────────────────────
 */

(function () {

/** SLIDE 1 — 封面 */
function slide01Cover() {
  return `
  <section class="slide s-cover" data-index="0" data-title="封面">
    <div class="red-bar"></div>
    <div class="content">
      <p class="c-label anim-in">Product Guide · 2026</p>
      <h1 class="anim-in-2">Enter<span class="dot">.</span>pro</h1>
      <p class="subtitle anim-in-3">产品使用手册及技巧</p>
      <p class="slogan anim-in-4">"Just press Enter, ship like a pro."</p>
      <div class="meta anim-in-5">
        <span>enter.pro</span>
        <div class="dot-sep"></div>
        <span>AI 协作共创平台</span>
        <div class="dot-sep"></div>
        <span>从想法到产品，一键直达</span>
      </div>
    </div>
  </section>`;
}

/** SLIDE 2 — Enter 是什么 */
function slide02What() {
  return `
  <section class="slide s-what" data-index="1" data-title="Enter 是什么">
    <div class="s-inner">
      <div class="s-col-left left anim-in">
        <p class="section-label">Chapter 01</p>
        <h2>Enter<span style="color:var(--red)">.</span>pro<br>是什么？</h2>
        <p class="slogan" style="margin-top:16px">"Just press Enter,<br>ship like a pro."</p>
      </div>
      <div class="s-col-right right anim-in-2">
        <p class="section-label">一句话介绍</p>
        <p class="intro-text">
          Enter 是一款主打 <strong>AI 协作共创</strong> 的通用网站 / 应用构建平台，
          通过对话即可完成从
          <strong>想法 → 原型 → 完整产品</strong> 的全流程开发。
        </p>
        <div style="width:32px;height:2px;background:var(--red);margin-bottom:24px;"></div>
        <div class="links">
          <a class="link-item" href="https://enter.pro" target="_blank" rel="noopener"><span class="li-icon">🌐</span>enter.pro</a>
          <a class="link-item" href="https://forum.enter.pro" target="_blank" rel="noopener"><span class="li-icon">💬</span>forum.enter.pro</a>
          <a class="link-item" href="https://discord.gg/BCyR5hXw" target="_blank" rel="noopener"><span class="li-icon">🎮</span>discord.gg/BCyR5hXw</a>
          <a class="link-item" href="https://x.com/Enter_AI_pro" target="_blank" rel="noopener"><span class="li-icon">🐦</span>@Enter_AI_pro</a>
          <a class="link-item" href="https://youtube.com/@EnterProAI" target="_blank" rel="noopener"><span class="li-icon">▶</span>youtube @EnterProAI</a>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 3 — 目标受众与理念 */
function slide03Audience() {
  return `
  <section class="slide s-audience bg-white" data-index="2" data-title="目标受众与理念">
    <div class="header-row"></div>
    <div class="inner">
      <div class="left-title anim-in">
        <p class="section-label">Chapter 02</p>
        <h2>目标受众<br>与理念</h2>
        <p style="margin-top:14px;font-size:10px;color:var(--gray-500);line-height:1.7;">
          AI 不是减少创意，<br>而是解放创意、帮助表达。
        </p>
      </div>
      <div class="items">
        <div class="item anim-in-2">
          <div class="num-badge red">1</div>
          <div class="item-body">
            <h4>零门槛创意表达</h4>
            <p>对 AI 辅助编程感兴趣，<span class="acc">不被编程经验门槛约束</span>，大胆尽情表达创意，追求做出高质量网站 / 应用。</p>
          </div>
        </div>
        <div class="item anim-in-3">
          <div class="num-badge red">2</div>
          <div class="item-body">
            <h4>AI 与创作者的协作关系</h4>
            <p>持续探索 AI 在应用开发的智能应用，研究 AI 与创作者的协作关系。<span class="acc">AI 不是替代创意，而是解放创意。</span></p>
          </div>
        </div>
        <div class="item anim-in-4">
          <div class="num-badge red">3</div>
          <div class="item-body">
            <h4>从想法到完整产品</h4>
            <p>支持从 <span class="acc">想法 → 原型 → 完整产品</span> 的全流程开发，让每个人都能快速将创意变成可上线的真实产品。</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 4 — 如何快速创作 */
function slide04QuickStart() {
  return `
  <section class="slide s-quickstart" data-index="3" data-title="如何快速创作">
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0">Chapter 03</p>
        <h2>如何快速创作？</h2>
      </div>
      <div class="steps">
        <div class="step anim-in-2">
          <p class="step-num">STEP 01</p>
          <div class="step-icon">💡</div>
          <h3>输入想法</h3>
          <p>在输入框中描述你想要创建的网站或应用。没有想法？试试 "Good Luck" 按钮体验随机 Prompt。</p>
          <p class="step-tag">可上传图片 / 文本 / 视频 / 代码</p>
        </div>
        <div class="arrow anim-in-2">→</div>
        <div class="step dark anim-in-3">
          <p class="step-num">STEP 02</p>
          <div class="step-icon">🗂</div>
          <h3>开启 Plan Mode</h3>
          <p>AI 先规划项目结构，生成结构化 Project Plan，由你确认后再开始编写代码。</p>
          <p class="step-tag">推荐开启，节省积分</p>
        </div>
        <div class="arrow anim-in-3">→</div>
        <div class="step anim-in-4">
          <p class="step-num">STEP 03</p>
          <div class="step-icon">🔄</div>
          <h3>对话迭代</h3>
          <p>通过自然语言持续调整，支持对话、Visual Edit、代码三种模式，右侧实时预览。</p>
          <p class="step-tag">所见即所得</p>
        </div>
        <div class="arrow anim-in-4">→</div>
        <div class="step anim-in-5">
          <p class="step-num">STEP 04</p>
          <div class="step-icon">🚀</div>
          <h3>发布上线</h3>
          <p>点击右上角 "Publish"，项目即刻发布上线，获得可直接分享的公开链接。</p>
          <p class="step-tag">一键发布，即时可达</p>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 5 — 三种创作模式 */
function slide05Modes() {
  return `
  <section class="slide s-modes" data-index="4" data-title="三种创作模式">
    <div class="s-inner">
      <div class="s-col-left left anim-in">
        <p class="section-label" style="color:rgba(255,255,255,0.4)">Chapter 04</p>
        <h2 style="color:#fff;font-size:clamp(24px,3.5vw,40px);font-weight:900;margin-bottom:14px;line-height:1.1;">三种<br>创作模式</h2>
        <p style="font-size:11px;color:var(--gray-500);line-height:1.65;">无论哪种模式，Enter 都支持<span style="color:var(--red);font-weight:700;">实时预览</span>，右侧窗口即时呈现效果。</p>
      </div>
      <div class="s-col-right right" style="gap:12px;display:flex;flex-direction:column;justify-content:center;">
        <div class="mode-card featured anim-in-2">
          <div class="icon-circle red" style="font-size:16px;">💬</div>
          <div class="mode-body">
            <h4>对话模式</h4>
            <p>在左侧对话面板通过自然语言与 AI 对话，描述想要的功能或修改，AI 自动生成代码。</p>
            <p class="mode-example">"Add a dark mode toggle" · "Change color scheme to blue"</p>
          </div>
        </div>
        <div class="mode-card anim-in-3">
          <div class="icon-circle" style="font-size:16px;">👆</div>
          <div class="mode-body">
            <h4>Visual Edit 模式</h4>
            <p>在右侧预览窗口点击 Visual Edit 按钮（小箭头），选中任意区域，直接可视化调整。无需写代码。</p>
          </div>
        </div>
        <div class="mode-card anim-in-4">
          <div class="icon-circle" style="font-size:16px;">👨‍💻</div>
          <div class="mode-body">
            <h4>代码模式</h4>
            <p>点击上方 Code 按钮切换代码模式，直接在代码编辑器中查找、查看、修改代码，适合有技术背景的用户。</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 6 — Plan Mode */
function slide06PlanMode() {
  return `
  <section class="slide s-plan bg-white" data-index="5" data-title="Plan Mode">
    <div class="top-accent"></div>
    <div class="inner">
      <div class="left anim-in">
        <p class="section-label">Chapter 05</p>
        <span class="badge">核心功能</span>
        <h2>Plan<br>Mode</h2>
        <p>Plan Mode 是 Enter 的核心功能之一，作为你的<strong>产品经理和架构师</strong>，在写代码前帮你规划整个项目。</p>
      </div>
      <div class="right">
        <div class="feat anim-in-2">
          <span class="feat-icon">🔍</span>
          <div class="feat-body">
            <h4>只读代码，不修改</h4>
            <p>在此模式下 Enter 不会写代码，只专注于需求理解和逻辑规划，确保方向正确。</p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="feat anim-in-3">
          <span class="feat-icon">🤝</span>
          <div class="feat-body">
            <h4>确认需求范围</h4>
            <p>若需求不明确，Enter 会主动与你确认细节，避免方向跑偏，确保理解准确。</p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="feat anim-in-4">
          <span class="feat-icon">📋</span>
          <div class="feat-body">
            <h4>生成结构化执行计划</h4>
            <p>你会收到包含目标、范围、实现方式的执行链。<strong>仅获得你的确认后</strong>，才真正开始写代码。</p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="tip anim-in-5">
          💡 <strong>使用技巧：</strong>开启 Plan Mode 可显著减少积分消耗，是最高效的创作方式。还支持结构化 Q&A 让你点击确认，计划可 Git 追踪和回滚。
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 7 — Enter MaaS */
function slide07MaaS() {
  return `
  <section class="slide s-maas" data-index="6" data-title="Enter MaaS">
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0;color:rgba(255,255,255,0.3)">Chapter 06</p>
        <h2>Enter <span class="acc">MaaS</span></h2>
        <span class="new-badge">AI All 升级</span>
        <span class="sub">Model as a Service — 无需任何 API 密钥</span>
      </div>
      <div class="body">
        <div class="intro anim-in-2">
          <p>AI All 升级为 Enter MaaS，成为项目内独立模块，更清晰、更强大，<strong style="color:#fff;">并可在 Enter 外部使用。</strong></p>
          <div class="new-feat">
            <h5>🎯 专属 MaaS 面板</h5>
            <p>从 Settings 升级为顶层独立模块，每个模型的能力、价格、成功率一目了然</p>
          </div>
          <div class="new-feat">
            <h5>💰 透明 Token 定价</h5>
            <p>每百万 Token 的输入/输出价格在调用前完全可见，无任何隐性收费</p>
          </div>
          <div class="new-feat" style="border-color:rgba(255,255,255,0.15)">
            <h5 style="color:#fff;">🔑 外部 API 访问（新）</h5>
            <p>Enter API Key 现可在任何项目、工具中使用，模型能力随身携带</p>
          </div>
        </div>
        <div class="models anim-in-3">
          <div>
            <p class="cat-label">🧠 大语言模型 LLM</p>
            <div class="chips">
              <div class="mchip hot"><h5>GPT-5.4 Pro</h5><p>强推理 / 编码</p></div>
              <div class="mchip"><h5>Claude Sonnet 4.5</h5><p>长文 / 分析</p></div>
              <div class="mchip"><h5>Gemini 3.1 Pro</h5><p>多模态</p></div>
              <div class="mchip"><h5>Kimi K2.5</h5><p>长上下文</p></div>
              <div class="mchip"><h5>GLM 5</h5><p>中文优化</p></div>
              <div class="mchip"><h5>Minimax M2.5</h5><p>高效</p></div>
            </div>
          </div>
          <div class="divider dark" style="margin:6px 0;"></div>
          <div>
            <p class="cat-label">🎨 图像 &nbsp;·&nbsp; 🎵 音乐</p>
            <div class="chips">
              <div class="mchip"><h5>Nano Banana Pro</h5><p>精准文字渲染</p></div>
              <div class="mchip"><h5>Nano Banana 2</h5><p>高级图像编辑</p></div>
              <div class="mchip"><h5>Suno V5</h5><p>AI 作曲 10x</p></div>
              <div class="mchip"><h5>Mureka V8</h5><p>商业级音乐</p></div>
            </div>
          </div>
          <div class="divider dark" style="margin:6px 0;"></div>
          <div>
            <p class="cat-label">🎬 视频模型</p>
            <div class="chips">
              <div class="mchip hot"><h5>Veo 3.1</h5><p>电影级 音视频同步</p></div>
              <div class="mchip"><h5>Sora2</h5><p>社交媒体优化</p></div>
              <div class="mchip"><h5>Seedance 1.0 Pro</h5><p>高性价比</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 8 — Skills & MCP */
function slide08Skills() {
  return `
  <section class="slide s-skills" data-index="7" data-title="Skills & MCP">
    <div class="top-bar"></div>
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0">Chapter 07</p>
        <h2>Skills &amp; MCP — 让 Agent 更强</h2>
      </div>
      <div class="cols">
        <div class="col dark anim-in-2">
          <div class="col-head">
            <div class="icon-circle red" style="width:32px;height:32px;font-size:15px;">⚡</div>
            <h3>Enter Skills</h3>
            <span class="new-tag">NEW</span>
          </div>
          <p class="intro">Skills 是能力包，让 Agent 从通才变成专家。开启 Skill，Agent 就掌握了该领域的知识和操作流程。</p>
          <div class="skill-item featured">
            <h5>🏢 官方 Skills</h5>
            <p>Enter 团队维护，覆盖错误检测、依赖安装、CRUD API、Stripe 接入等高频场景</p>
          </div>
          <div class="skill-item">
            <h5>🌍 社区 Skills</h5>
            <p>从 GitHub / agentskills.io 等平台通过 URL 直接导入</p>
          </div>
          <div class="skill-item">
            <h5>🛠 自定义 Skills</h5>
            <p>在对话中描述需求让 Agent 生成，或导入 GitHub 仓库，或上传 .skill 文件</p>
          </div>
        </div>
        <div class="col white anim-in-3">
          <div class="col-head">
            <div class="icon-circle" style="width:32px;height:32px;font-size:15px;">🔌</div>
            <h3>MCP 集成</h3>
            <span class="new-tag">NEW</span>
          </div>
          <p class="intro">MCP（Model Context Protocol）让 Agent 直接调用外部服务，一段 JSON 配置即可接入任意工具。</p>
          <div class="mcp-step">
            <div class="num-badge" style="background:var(--black);color:#fff;font-size:9px;">1</div>
            <p>在 Agent Panel → MCPs 中点击 "Add MCP"</p>
          </div>
          <div class="mcp-step">
            <div class="num-badge" style="background:var(--black);color:#fff;font-size:9px;">2</div>
            <p>粘贴 MCP Server 的 JSON 配置（url 方式）</p>
          </div>
          <div class="mcp-step">
            <div class="num-badge" style="background:var(--black);color:#fff;font-size:9px;">3</div>
            <p>点击 Connect，Agent 即可直接调用外部工具</p>
          </div>
          <div class="svc-chips">
            <span class="chip">Notion</span>
            <span class="chip">Supabase</span>
            <span class="chip">Context7</span>
            <span class="chip">任意 HTTP MCP</span>
          </div>
          <div class="note">
            ⚠️ Enter 仅支持 <span>url 方式</span>（Streamable HTTP），不支持 command/stdio 本地进程
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 9 — Enter Cloud */
function slide09Cloud() {
  return `
  <section class="slide s-cloud" data-index="8" data-title="Enter Cloud">
    <div class="s-inner">
      <div class="s-col-left left anim-in">
        <p class="section-label" style="color:rgba(255,255,255,0.4)">Chapter 08</p>
        <h2>Enter<br><span class="acc">Cloud</span></h2>
        <span class="badge">全新发布</span>
        <p>内置后端服务，无需注册外部账号，无需切换标签页。一键启用，立即构建全栈应用。</p>
        <div class="enable-box">
          <h5>🚀 零配置启用</h5>
          <p>在项目右侧找到 Cloud → Enable，或直接告诉 Agent "我需要数据库"，自动完成配置</p>
        </div>
      </div>
      <div class="s-col-right right anim-in-2">
        <p class="section-label">五大内置服务</p>
        <h3 style="font-size:clamp(13px,1.6vw,16px);font-weight:900;color:var(--black);margin-bottom:12px;">数据库 · 函数 · 存储 · 密钥 · 认证 — 全在一处</h3>
        <div class="right-inner">
          <div class="feat-grid">
            <div class="fc"><span class="fi">🗄</span><div><h4>Database</h4><p>托管 PostgreSQL，可视化编辑表数据、配置 RLS 策略</p></div></div>
            <div class="fc"><span class="fi">⚡</span><div><h4>Functions</h4><p>Edge Functions 边缘函数，查看代码、日志和调用指标</p></div></div>
            <div class="fc"><span class="fi">📦</span><div><h4>Storage</h4><p>对象存储，Bucket 管理，图片直接预览</p></div></div>
            <div class="fc"><span class="fi">🔐</span><div><h4>Secrets</h4><p>安全管理环境变量和 API Key，值默认加密隐藏</p></div></div>
            <div class="fc"><span class="fi">👤</span><div><h4>Authentication</h4><p>用户管理 + 登录配置，邮箱认证开箱即用</p></div></div>
          </div>
          <div class="free-launch-banner">
            <span class="free-icon">🎉</span>
            <div><strong>发布期间完全免费</strong><span>— 无需额外费用，现在开启即可使用全部五项服务</span></div>
          </div>
          <div class="agent-bar">
            <span class="ai">🤖</span>
            <p>Agent 深度整合：<span>"创建 users 表"</span> · <span>"查询最近7天订单"</span> · <span>"写一个发邮件的 Edge Function"</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 10 — 集成能力 */
function slide10Integrations() {
  return `
  <section class="slide s-integrations" data-index="9" data-title="集成能力">
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0">Chapter 09</p>
        <h2>集成能力：GitHub · Supabase · Stripe</h2>
      </div>
      <div class="cards">
        <div class="cards-col-left">
          <div class="icard accent anim-in-2">
            <div class="icard-body">
              <div class="stripe"></div>
              <div class="icard-head">
                <div class="icon-circle light" style="font-size:18px;">🐙</div>
                <h3>GitHub<br>双向同步</h3>
              </div>
              <p class="desc">提供完整的 GitHub 集成，代码双向流动，工程师协作无缝衔接。连接一次，永久受益。</p>
              <div class="icard-steps">
                <div class="step-row"><span class="step-num">1</span><span>Dashboard → New Chat → <strong>Import from GitHub</strong></span></div>
                <div class="step-row"><span class="step-num">2</span><span>通过 OAuth 授权 GitHub 账号</span></div>
                <div class="step-row"><span class="step-num">3</span><span>选择 Repo 和分支，双向同步立即开始</span></div>
                <div class="step-row"><span class="step-num">4</span><span>代码变更自动同步，版本历史完整保留</span></div>
              </div>
            </div>
            <div class="tags">
              <span class="chip accent">导入仓库</span><span class="chip accent">双向同步</span>
              <span class="chip accent">版本保护</span><span class="chip accent">团队协作</span>
            </div>
          </div>
        </div>
        <div class="cards-col-right">
          <div class="icard white anim-in-3">
            <div class="icard-body">
              <div class="stripe"></div>
              <div class="icard-head">
                <div class="icon-circle light" style="font-size:18px;">🗄</div>
                <h3>Supabase<br>后端集成</h3>
              </div>
              <p class="desc">一键连接 Supabase，为应用添加完整后端能力，告别手动搭建服务器。</p>
              <ul class="icard-list">
                <li>PostgreSQL 数据库 + 自动生成 RESTful API</li>
                <li>用户注册 / 登录 Auth 开箱即用</li>
                <li>文件存储 Storage + Edge Functions</li>
              </ul>
            </div>
            <div class="tags">
              <span class="chip">数据库</span><span class="chip">Auth 认证</span><span class="chip">Edge Functions</span>
            </div>
          </div>
          <div class="icard white anim-in-4">
            <div class="icard-body">
              <div class="stripe"></div>
              <div class="icard-head">
                <div class="icon-circle light" style="font-size:18px;">💳</div>
                <h3>Stripe<br>商业化集成</h3>
              </div>
              <p class="desc">一键接入 Stripe 支付，让你的应用快速实现商业化变现，坐上商业化快车。</p>
              <ul class="icard-list">
                <li>支持一次性付款 / 订阅制两种模式</li>
                <li>无需自建支付后端，Enter 自动配置</li>
                <li>全球主流信用卡与本地支付方式</li>
              </ul>
            </div>
            <div class="tags">
              <span class="chip">在线支付</span><span class="chip">订阅管理</span><span class="chip">快速商业化</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 11 — 模板 & 模型 */
function slide11Templates() {
  return `
  <section class="slide s-templates bg-white" data-index="10" data-title="模板 & 模型">
    <div class="s-inner">
      <div class="s-col-left left anim-in" style="border-right:1px solid var(--gray-100);">
        <p class="section-label">Chapter 10</p>
        <h2>模板系统 &amp;<br>模型选择</h2>
        <p style="font-size:10px;color:var(--gray-500);line-height:1.65;margin:12px 0 14px;">
          丰富的免费社区模板，帮助你快速启动项目，覆盖主流应用类型。
        </p>
        <div class="tpl-tags">
          <span class="chip red">Landing Page</span><span class="chip">Portfolio</span>
          <span class="chip">Forum</span><span class="chip">EDM</span><span class="chip">Blog</span>
          <span class="chip">Dashboard</span><span class="chip">AI App</span>
          <span class="chip">Platform</span><span class="chip">Core Page</span>
        </div>
      </div>
      <div class="s-col-right right anim-in-2">
        <p class="section-label">支持的 AI 模型</p>
        <h3 style="font-size:16px;font-weight:900;color:var(--black);margin-bottom:18px;">业内最先进模型，随意切换</h3>
        <div>
          <div class="model-row"><span class="model-name">Claude 4.5 Opus</span><div class="model-bar-bg"><div class="model-bar" style="width:96%"></div></div><span class="model-type">推理</span></div>
          <div class="model-row"><span class="model-name">Claude 4.5 Sonnet</span><div class="model-bar-bg"><div class="model-bar" style="width:85%"></div></div><span class="model-type">写作</span></div>
          <div style="height:1px;background:var(--gray-100);margin:6px 0;"></div>
          <div class="model-row"><span class="model-name">Gemini 3.1 Pro</span><div class="model-bar-bg"><div class="model-bar" style="width:88%;background:#333"></div></div><span class="model-type">多模态</span></div>
          <div class="model-row"><span class="model-name">Gemini 3.1 Flash</span><div class="model-bar-bg"><div class="model-bar" style="width:72%;background:#333"></div></div><span class="model-type">快速</span></div>
          <div style="height:1px;background:var(--gray-100);margin:6px 0;"></div>
          <div class="model-row"><span class="model-name">GPT-5.4 Pro</span><div class="model-bar-bg"><div class="model-bar" style="width:92%;background:#555"></div></div><span class="model-type">逻辑</span></div>
          <div class="model-row"><span class="model-name">GPT-5.2 Pro</span><div class="model-bar-bg"><div class="model-bar" style="width:80%;background:#555"></div></div><span class="model-type">规划</span></div>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 12 — 积分与会员 */
function slide12Credits() {
  return `
  <section class="slide s-credits" data-index="11" data-title="积分与会员">
    <div class="s-inner">
      <div class="s-col-left left anim-in">
        <p class="section-label" style="color:rgba(255,255,255,0.35)">Chapter 11</p>
        <h2>积分与<br>会员</h2>
        <div class="credit-item"><div class="ci-icon">🎁</div><div class="ci-body"><h4>新用户注册</h4><p>赠送 100 免费积分</p></div></div>
        <div class="credit-item"><div class="ci-icon">📅</div><div class="ci-body"><h4>每日登录</h4><p>额外获得 100 积分</p></div></div>
        <div class="credit-item"><div class="ci-icon">👥</div><div class="ci-body"><h4>邀请好友注册</h4><p>每次邀请获得 100 积分</p></div></div>
      </div>
      <div class="s-col-right right anim-in-2">
        <h3>在侧边栏随时查看余额</h3>
        <div class="balance">
          <p class="hint">当前积分余额</p>
          <p class="amount">100+</p>
          <p class="unit">Credits — 点击 "Credits" 查看详细消耗记录</p>
        </div>
        <div class="plan-box">
          <span style="font-size:18px;">👑</span>
          <div><h4>会员订阅计划</h4><p>Enter 正在推出会员订阅计划，敬请期待！</p></div>
        </div>
      </div>
    </div>
  </section>`;
}

/** SLIDE 13 — 使用技巧 */
function slide13Tips() {
  return `
  <section class="slide s-tips" data-index="12" data-title="使用技巧">
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0">Chapter 12</p>
        <h2>使用技巧 — 更少积分，更多构建</h2>
      </div>
      <div class="grid">
        <div class="tip-card accent anim-in-2">
          <div class="tip-top"><span class="tip-emoji">🗂</span><h4>优先用 Plan Mode</h4></div>
          <p>在开始编码前用 Plan Mode 规划项目结构和功能，可显著减少积分消耗，避免因理解偏差导致的反复修改，是复杂项目的首选工作流。</p>
          <span class="tip-hl">节省积分首选</span>
        </div>
        <div class="tip-card light anim-in-2">
          <div class="tip-top"><span class="tip-emoji">🎯</span><h4>具体描述需求</h4></div>
          <p>向 AI 提供详细、具体的需求描述，包括目标用户、功能边界和视觉风格参考，能获得更准确的结果，大幅减少来回修改次数。</p>
        </div>
        <div class="tip-card light anim-in-3">
          <div class="tip-top"><span class="tip-emoji">📋</span><h4>善用模板起步</h4></div>
          <p>从社区模板开始可以节省大量时间，先跑通基础框架，再根据需求进行个性化定制，比从零开始效率高 3-5 倍。</p>
        </div>
        <div class="tip-card light anim-in-3">
          <div class="tip-top"><span class="tip-emoji">🔗</span><h4>连 GitHub 做版本控制</h4></div>
          <p>连接 GitHub 进行版本控制，保护代码安全，方便团队协作和代码回滚，也让项目可以随时导入其他平台继续迭代。</p>
        </div>
        <div class="tip-card light anim-in-4">
          <div class="tip-top"><span class="tip-emoji">💬</span><h4>加入社区交流</h4></div>
          <p>加入 Forum 或 Discord 社区，与其他创作者交流经验，获取最新使用技巧，社区也是发现优质模板和灵感的最佳渠道。</p>
          <a class="tip-link" href="https://forum.enter.pro" target="_blank" rel="noopener">forum.enter.pro</a>
        </div>
        <div class="tip-card accent anim-in-4">
          <div class="tip-top"><span class="tip-emoji">🤖</span><h4>选对模型</h4></div>
          <p>复杂逻辑和架构规划用 GPT-5.4 Pro，日常内容创作和功能开发用 Claude Sonnet，快速原型验证用 Gemini Flash 最省积分。</p>
        </div>
      </div>
      <div class="tips-spacer"></div>
      <div class="bottom-bar anim-in-5">
        <p class="bb-text">💡 <strong>核心节奏：</strong>开始前用 Plan Mode 规划，编码时具体描述需求，卡住时上传截图 + F12 错误信息 — 这是高效 vibe coding 的三步心法。</p>
        <a class="bb-link" href="https://blog.enter.pro" target="_blank" rel="noopener">查看更多技巧 →</a>
      </div>
    </div>
  </section>`;
}

/** SLIDE 14 — 联系我们 */
function slide14Contact() {
  return `
  <section class="slide s-contact bg-white" data-index="13" data-title="联系我们">
    <div class="red-border-left"></div>
    <div class="s-inner">
      <div class="s-col-left left anim-in" style="border-right:1px solid var(--gray-100);">
        <p class="section-label">Get In Touch</p>
        <h2>联系<br><span class="acc">Enter</span></h2>
        <p class="tagline">有问题？有想法？<br>我们在这里。</p>
        <div class="cta" onclick="window.open('https://enter.pro','_blank')">
          <span>立即开始创作</span><span class="arr">→</span>
        </div>
      </div>
      <div class="s-col-right right anim-in-2">
        <h3>联系方式</h3>
        <a class="link-row" href="https://enter.pro" target="_blank" rel="noopener">
          <div class="link-icon">🌐</div><div class="link-info"><p class="lt">官网</p><p class="lv">enter.pro</p></div>
        </a>
        <div style="height:1px;background:var(--gray-100);margin:4px 0 12px;"></div>
        <a class="link-row" href="https://enter.pro/blog" target="_blank" rel="noopener">
          <div class="link-icon">📝</div><div class="link-info"><p class="lt">博客 / 论坛</p><p class="lv">enter.pro/blog · forum.enter.pro</p></div>
        </a>
        <div style="height:1px;background:var(--gray-100);margin:4px 0 12px;"></div>
        <a class="link-row" href="https://discord.gg/BCyR5hXw" target="_blank" rel="noopener">
          <div class="link-icon">🎮</div><div class="link-info"><p class="lt">Discord 社区</p><p class="lv">discord.gg/BCyR5hXw</p></div>
        </a>
        <div style="height:1px;background:var(--gray-100);margin:4px 0 12px;"></div>
        <a class="link-row" href="mailto:support@enter.pro">
          <div class="link-icon">📧</div><div class="link-info"><p class="lt">邮箱支持</p><p class="lv">support@enter.pro</p></div>
        </a>
        <div class="wechat-note">
          💬 中国大陆用户可加入 <span>Enter.pro 官方微信群</span>，扫码入群交流。
        </div>
      </div>
    </div>
  </section>`;
}

/* ── 按顺序导出所有 slides ── */
window.EnterSlides = {
  ALL: [
    slide01Cover,
    slide02What,
    slide03Audience,
    slide04QuickStart,
    slide05Modes,
    slide06PlanMode,
    slide07MaaS,
    slide08Skills,
    slide09Cloud,
    slide10Integrations,
    slide11Templates,
    slide12Credits,
    slide13Tips,
    slide14Contact,
  ]
};

})(); // end IIFE
