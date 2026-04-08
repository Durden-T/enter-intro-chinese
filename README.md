# Enter.pro 产品使用手册 — 交互式演示

基于 Enter.pro 官方内容构建的交互式 Web 演示，14 张幻灯片，无任何外部依赖，纯原生 HTML / CSS / JS。

---

## 代码架构图

```
enter-intro-chinese/
│
├── index.html                 # 🏠 壳文件：页面结构 + 导航 UI，按序加载脚本
│
├── src/                       # JavaScript 模块层
│   ├── content.js  ← ✏️ 改文案/链接/数据   → 只动这个文件
│   ├── slides.js   ← 🏗 改布局/HTML 结构   → 找对应模板函数
│   ├── nav.js      ← ⚙️ 导航控制器          → 键盘/触摸/播放/全屏
│   └── app.js      ← 🚀 启动入口            → 渲染 slides + 初始化 nav
│
├── styles/                    # CSS 样式层
│   ├── tokens.css  ← 🎨 改颜色/字体         → CSS 变量，全局生效
│   ├── slides.css  ← 🖼 改单张 slide 样式   → 按 .s-cover / .s-maas 等类名定位
│   └── ui.css      ← 🧭 导航栏/进度条样式   → header / controls / overview
│
├── screenshots/               # 14 张截图（自动生成，用于预览）
└── README.md                  # 本文件
```

### 数据流向

```
index.html
    │
    ├─ 加载 styles/ ──────────────────────────── 视觉样式
    │
    └─ 按序加载 src/
         │
         ├─ content.js  → window.EnterContent   纯数据对象（文案、链接、列表）
         │
         ├─ slides.js   → window.EnterSlides    读取 EnterContent，输出 HTML 字符串
         │
         ├─ nav.js      → class NavController   导航逻辑，与内容完全解耦
         │
         └─ app.js      DOMContentLoaded 后
                          ├─ 渲染 EnterSlides.ALL 到 #stage
                          └─ new NavController()
```

---

## 快速修改指南

### ✏️ 改文案 / 链接 / 列表内容

**只需编辑 `src/content.js`，不用碰任何 HTML。**

```js
// 例：修改第 1 张封面副标题
cover: {
  subtitle: '产品使用手册及技巧',  // ← 改这里
}

// 例：修改官方 Discord 链接
brand: {
  links: {
    discord: { url: 'https://discord.gg/新链接', label: 'discord.gg/新链接' },
  }
}

// 例：第 13 张新增一条使用技巧
tips: {
  cards: [
    // ... 已有的 ...
    { icon: '🧪', title: '新技巧标题', body: '技巧描述文字' },  // ← 在这里追加
  ]
}
```

### 🏗 改某张 slide 的布局 / 结构

**编辑 `src/slides.js`，找对应的模板函数：**

| 函数名 | 对应幻灯片 |
|--------|-----------|
| `slide01Cover` | 封面 |
| `slide02What` | Enter 是什么 |
| `slide03Audience` | 目标受众与理念 |
| `slide04QuickStart` | 如何快速创作 |
| `slide05Modes` | 三种创作模式 |
| `slide06PlanMode` | Plan Mode |
| `slide07MaaS` | Enter MaaS |
| `slide08Skills` | Skills & MCP |
| `slide09Cloud` | Enter Cloud |
| `slide10Integrations` | 集成能力 |
| `slide11Templates` | 模板 & 模型 |
| `slide12Credits` | 积分与会员 |
| `slide13Tips` | 使用技巧 |
| `slide14Contact` | 联系我们 |

### 🎨 改颜色 / 字体

**编辑 `styles/tokens.css`，改 CSS 变量，全局生效：**

```css
:root {
  --red:   #E8344E;   /* 主品牌色 */
  --black: #111111;   /* 深色背景 */
  --font:  Arial, Helvetica, sans-serif;
}
```

### ➕ 新增一张幻灯片

1. 在 `src/content.js` 新增数据对象
2. 在 `src/slides.js` 新增模板函数 `slideXXNew()`
3. 将函数加入 `window.EnterSlides.ALL` 数组

---

## 幻灯片内容（14 张）

| # | 标题 | 说明 |
|---|------|------|
| 1 | 封面 | 品牌标识 + Slogan |
| 2 | Enter 是什么？ | 一句话介绍 + 官方链接 |
| 3 | 目标受众与理念 | 3 类受众画像 |
| 4 | 如何快速创作 | 4 步流程（输入→规划→迭代→发布）|
| 5 | 三种创作模式 | 对话 / Visual Edit / 代码 |
| 6 | Plan Mode | 核心功能详解 |
| 7 | Enter MaaS | AI All 升级，模型列表 |
| 8 | Skills & MCP | 能力扩展系统 |
| 9 | Enter Cloud | 内置后端五大服务 |
| 10 | 集成能力 | GitHub · Supabase · Stripe |
| 11 | 模板 & 模型 | 模板分类 + 模型性能图 |
| 12 | 积分与会员 | 积分获取方式 + 余额查看 |
| 13 | 使用技巧 | 6 条高效 vibe coding 心法 |
| 14 | 联系我们 | 官方渠道汇总 |

---

## 键盘快捷键

| 键 | 功能 |
|---|---|
| `← →` | 上 / 下一张 |
| `Space` | 自动播放 / 暂停 |
| `O` | 幻灯片总览 |
| `F` | 全屏 |
| `Home / End` | 跳至第一 / 最后一张 |
| `Esc` | 关闭面板 |
| `?` | 显示快捷键帮助 |

---

## 本地运行

```bash
# 方式一：直接打开
open index.html

# 方式二：本地服务器（推荐，避免浏览器跨域限制）
python3 -m http.server 8080
# 访问 http://localhost:8080
```

## 在 Enter.pro 中迭代

1. 将仓库推送到 GitHub
2. 在 Enter.pro 选择 **Import from GitHub** 导入本仓库
3. 对 AI 说明想改的内容，例如：
   - `"修改 content.js 里第 7 张 MaaS 的模型列表，新增 DeepSeek R2"`
   - `"在 tokens.css 里把主色改成蓝色 #2563EB"`
   - `"在 slides.js 的 slide13Tips 函数里把卡片改成两列布局"`

---

Built with ❤️ for Enter.pro · [enter.pro](https://enter.pro)
