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
    name: "爱心树",
    emoji: "❤️",
    github: "https://github.com/lwlpyl/love",
  },
  {
    name: "李释佛器",
    emoji: "🙏",
    github: "https://github.com/lwlpyl/dxlsfq",
  },
  {
    name: "圣诞树",
    emoji: "🎄",
    github: "https://github.com/lwlpyl/tree",
  },
  {
    name: "AI 塔罗牌",
    emoji: "🔮",
    github: "https://github.com/lwlpyl/ai-tarot",
  },
  {
    name: "照片集",
    emoji: "📸",
    github: "https://github.com/lwlpyl/photo",
  },
];

// ==================== DOM 元素 ====================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const projectList = document.getElementById("projectList");

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
  projectList.innerHTML = `
    <ul class="project-list-items">
      ${projects
        .map(
          (project) => `
        <li class="project-list-item">
          <span class="project-emoji">${project.emoji}</span>
          <span class="project-name">${project.name}</span>
          <a href="${project.github}" class="project-link" target="_blank" rel="noopener">GitHub →</a>
        </li>
      `,
        )
        .join("")}
    </ul>
  `;
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
