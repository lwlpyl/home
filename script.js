// ==================== 配置区域 ====================
// 个人配置
const siteConfig = {
  name: "李文龙",
  email: "1798946643@qq.com",
  github: "https://github.com/lwlpyl",
  location: "江苏省南京市建邺区",
};

// 项目数据
const projects = [
  {
    name: "李释佛器",
    emoji: "🪷",
    description: "佛像法器产品展示网站，纯前端响应式设计",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://lwlpyl.github.io/dxlsfq/",
    github: "https://github.com/lwlpyl/dxlsfq",
  },
  {
    name: "个人博客",
    emoji: "📝",
    description: "个人介绍、项目分享、技术博客",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
  {
    name: "AI 塔罗牌",
    emoji: "🔮",
    description: "基于 AI 的在线塔罗牌占卜应用",
    tags: ["AI", "Web", "Interactive"],
    link: "https://github.com/lwlpyl/ai-tarot",
    github: "https://github.com/lwlpyl/ai-tarot",
  },
  {
    name: "照片集",
    emoji: "📸",
    description: "个人照片展示画廊",
    tags: ["Gallery", "Responsive"],
    link: "https://github.com/lwlpyl/photo",
    github: "https://github.com/lwlpyl/photo",
  },
];

// 博客文章数据
const blogPosts = [
  {
    title: "欢迎来到我的博客",
    date: "2026-03-15",
    excerpt:
      "这是我的个人博客，我会在这里分享我的项目经验、技术心得和学习笔记。希望能对你有所帮助！",
    link: "https://github.com/lwlpyl/blog",
  },
  {
    title: "如何构建纯前端网站",
    date: "2026-03-14",
    excerpt:
      "介绍如何使用 HTML、CSS 和 JavaScript 构建一个完整的响应式网站，无需后端支持。",
    link: "https://github.com/lwlpyl/blog",
  },
  {
    title: "GitHub Pages 部署指南",
    date: "2026-03-13",
    excerpt:
      "详细讲解如何将静态网站部署到 GitHub Pages，并配置自定义域名和 HTTPS。",
    link: "https://github.com/lwlpyl/blog",
  },
];

// ==================== DOM 元素 ====================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const projectGrid = document.getElementById("projectGrid");
const blogList = document.getElementById("blogList");

// ==================== 导航功能 ====================
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ==================== 项目渲染 ====================
function renderProjects() {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
    <div class="project-card">
      <div class="project-image">${project.emoji}</div>
      <div class="project-info">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.link !== "#" ? `<a href="${project.link}" class="project-link" target="_blank">查看项目 →</a>` : ""}
          ${project.github !== "#" ? `<a href="${project.github}" class="project-link" target="_blank">GitHub →</a>` : ""}
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// ==================== 博客渲染 ====================
function renderBlogPosts() {
  blogList.innerHTML = blogPosts
    .map(
      (post) => `
    <div class="blog-card">
      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-meta">📅 ${post.date}</p>
      <p class="blog-excerpt">${post.excerpt}</p>
      <a href="${post.link}" class="blog-read-more" target="_blank" rel="noopener">阅读全文 →</a>
    </div>
  `,
    )
    .join("");
}

// ==================== 平滑滚动 ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ==================== 初始化 ====================
renderProjects();
renderBlogPosts();

console.log(`👋 ${siteConfig.name} 的博客已加载`);
