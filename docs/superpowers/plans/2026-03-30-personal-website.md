# 个人网站实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**目标:** 构建一个暗色极客风的个人AI PM作品集网站

**架构:** 纯HTML + CSS + Vanilla JS，单页面应用，GitHub Pages部署

**技术栈:** HTML5, CSS3 (CSS Variables), Vanilla JS, Lucide Icons (CDN)

---

## 文件结构

```
personal-website/
├── index.html          # 主页面
├── css/
│   └── styles.css      # 所有样式
├── js/
│   └── main.js         # 交互逻辑
└── assets/
    └── images/         # 图片资源
```

---

## 任务清单

### 任务 1: 创建项目目录结构

**Files:**
- Create: `personal-website/css/styles.css`
- Create: `personal-website/js/main.js`
- Create: `personal-website/assets/images/.gitkeep`

- [ ] **Step 1: 创建目录结构**

```bash
mkdir -p personal-website/css personal-website/js personal-website/assets/images
touch personal-website/css/.gitkeep personal-website/js/.gitkeep
```

- [ ] **Step 2: 提交**

```bash
git add .
git commit -m "feat: scaffold personal website project structure"
```

---

### 任务 2: 编写 HTML 结构

**Files:**
- Create: `personal-website/index.html`

- [ ] **Step 1: 编写完整HTML结构**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人作品集 | AI PM</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
    <!-- Hero Section -->
    <section id="hero">
        <div class="hero-content">
            <div class="avatar-container">
                <img src="assets/images/avatar.jpg" alt="个人照片" class="avatar">
            </div>
            <div class="hero-text">
                <h1>你好，我是<span class="highlight">未来AI产品经理</span></h1>
                <p>前阿里AI训练师 | 正在成为AI PM的路上</p>
            </div>
        </div>
        <div class="social-links">
            <a href="https://github.com/你的GitHub" target="_blank" aria-label="GitHub">
                <i data-lucide="github"></i>
            </a>
            <a href="https://www.douyin.com/你的抖音" target="_blank" aria-label="抖音">
                <i data-lucide="video"></i>
            </a>
            <a href="mailto:your@email.com" aria-label="邮箱">
                <i data-lucide="mail"></i>
            </a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about">
        <h2>About Me</h2>
        <div class="about-content">
            <p>曾在阿里巴巴担任AI训练师，参与大模型数据标注与质量把控工作。在实际工作中，我深入了解了AI产品的运作机制，并逐渐对产品方向产生浓厚兴趣。</p>
            <p>目前正在系统学习AI产品经理知识，希望未来能做出有影响力的AI产品。</p>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience">
        <h2>经历</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>阿里巴巴 - AI训练师</h3>
                    <span class="timeline-date">2024-2025</span>
                    <p>参与大模型数据标注、效果评估、质量把控等工作</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>AI工具学习</h3>
                    <span class="timeline-date">2024 至今</span>
                    <p>系统学习ChatGPT、Claude、MiniMax等AI工具，探索AI产品可能性</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
        <h2>项目</h2>
        <div class="projects-grid">
            <a href="#coscraft" class="project-card">
                <h3>CosCraft</h3>
                <p>AI生成Cosplay服装手工制作参考资料工具</p>
                <span class="project-tag">AI工具</span>
            </a>
            <a href="#cicyber" class="project-card">
                <h3>次元置换</h3>
                <p>二次元物物交换平台</p>
                <span class="project-tag">产品设计</span>
            </a>
        </div>
    </section>

    <!-- Works Section -->
    <section id="works">
        <h2>创作</h2>
        <div class="works-grid">
            <div class="work-item">
                <iframe src="https://www.douyin.com/embed/视频ID" allowfullscreen></iframe>
            </div>
        </div>
    </section>

    <!-- Resume Section -->
    <section id="resume">
        <h2>简历</h2>
        <div class="resume-content">
            <p>感谢您的时间！期待与您交流。</p>
            <div class="contact-info">
                <p><i data-lucide="mail"></i> your@email.com</p>
                <p><i data-lucide="message-circle"></i> 微信: your-wechat</p>
            </div>
            <a href="assets/resume.pdf" download class="btn-download">
                <i data-lucide="download"></i> 下载简历 PDF
            </a>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 个人作品集. All rights reserved.</p>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 提交**

```bash
git add index.html
git commit -m "feat: add HTML structure with all sections"
```

---

### 任务 3: 编写 CSS 样式

**Files:**
- Create: `personal-website/css/styles.css`

- [ ] **Step 1: 编写暗色极客风CSS**

```css
:root {
    --bg-dark: #0a0a0a;
    --bg-card: #111111;
    --border: #222222;
    --accent-blue: #00d4ff;
    --accent-green: #00ff88;
    --text-primary: #ffffff;
    --text-secondary: #888888;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
}

section {
    min-height: 100vh;
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h2 {
    font-size: 2rem;
    margin-bottom: 40px;
    color: var(--text-primary);
}

/* Hero */
#hero {
    text-align: center;
    background: linear-gradient(180deg, var(--bg-dark) 0%, #0f0f0f 100%);
}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--accent-blue);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
}

.hero-text h1 {
    font-size: 2.5rem;
    font-weight: 700;
}

.highlight {
    color: var(--accent-blue);
}

.social-links {
    display: flex;
    gap: 20px;
    margin-top: 40px;
}

.social-links a {
    color: var(--text-secondary);
    transition: color 0.3s, transform 0.3s;
}

.social-links a:hover {
    color: var(--accent-blue);
    transform: translateY(-3px);
}

/* About */
#about {
    background: var(--bg-dark);
}

.about-content {
    max-width: 700px;
    margin: 0 auto;
}

.about-content p {
    color: var(--text-secondary);
    margin-bottom: 20px;
    font-size: 1.1rem;
}

/* Timeline */
.timeline {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    padding-left: 30px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border);
}

.timeline-item {
    position: relative;
    margin-bottom: 40px;
}

.timeline-marker {
    position: absolute;
    left: -35px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-blue);
    box-shadow: 0 0 10px var(--accent-blue);
}

.timeline-content h3 {
    color: var(--text-primary);
    font-size: 1.2rem;
}

.timeline-date {
    color: var(--accent-green);
    font-size: 0.9rem;
}

.timeline-content p {
    color: var(--text-secondary);
    margin-top: 10px;
}

/* Projects Grid */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    max-width: 900px;
    margin: 0 auto;
}

.project-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 30px;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-blue);
    box-shadow: 0 10px 40px rgba(0, 212, 255, 0.1);
}

.project-tag {
    display: inline-block;
    margin-top: 15px;
    padding: 5px 12px;
    background: rgba(0, 212, 255, 0.1);
    color: var(--accent-blue);
    border-radius: 20px;
    font-size: 0.8rem;
}

/* Works */
.works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    max-width: 900px;
    margin: 0 auto;
}

.work-item iframe {
    width: 100%;
    aspect-ratio: 9/16;
    border-radius: 12px;
    border: none;
}

/* Resume */
.resume-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.contact-info {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.contact-info p {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-secondary);
}

.btn-download {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    background: var(--accent-blue);
    color: var(--bg-dark);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: transform 0.3s, box-shadow 0.3s;
}

.btn-download:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

footer {
    text-align: center;
    padding: 40px;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-text h1 {
        font-size: 1.8rem;
    }
    
    section {
        padding: 60px 20px;
    }
}
```

- [ ] **Step 2: 提交**

```bash
git add css/styles.css
git commit -m "feat: add dark geek style CSS"
```

---

### 任务 4: 编写 JavaScript 交互

**Files:**
- Create: `personal-website/js/main.js`

- [ ] **Step 1: 编写JavaScript**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    document.querySelector('#hero').style.opacity = '1';
    document.querySelector('#hero').style.transform = 'translateY(0)';
});
```

- [ ] **Step 2: 提交**

```bash
git add js/main.js
git commit -m "feat: add scroll animation and lucide icons init"
```

---

### 任务 5: 配置 GitHub Pages 部署

**Files:**
- Create: `personal-website/README.md`

- [ ] **Step 1: 创建README**

```markdown
# 个人作品集网站

暗色极客风AI PM个人作品集网站

## 部署

本项目使用 GitHub Pages 部署。推送至 `gh-pages` 分支即可自动部署。

## 本地预览

直接用浏览器打开 `index.html` 即可。

## 待补充

- [ ] 添加个人照片 `assets/images/avatar.jpg`
- [ ] 添加简历 PDF `assets/resume.pdf`
- [ ] 替换社交媒体链接
- [ ] 添加抖音/B站视频嵌入
```

- [ ] **Step 2: 提交并创建gh-pages分支**

```bash
git add README.md
git commit -m "docs: add README"
git checkout -b gh-pages
git push -u origin gh-pages
```

---

## 待用户补充的内容

1. **头像图片:** 上传至 `assets/images/avatar.jpg`
2. **简历PDF:** 上传至 `assets/resume.pdf`
3. **社交链接:** 替换HTML中的GitHub/抖音链接
4. **视频嵌入:** 替换抖音/B站iframe的src

---

## 实施顺序

1. 任务1: 创建目录结构
2. 任务2: 编写HTML
3. 任务3: 编写CSS
4. 任务4: 编写JS
5. 任务5: GitHub Pages部署配置

---

**Plan saved to:** `docs/superpowers/plans/2026-03-30-personal-website.md`
