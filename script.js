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

// ==================== DOM 元素 ====================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const projectGrid = document.getElementById("projectGrid");

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

console.log(`👋 ${siteConfig.name} 的个人主页已加载`);
