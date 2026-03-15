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
    website: "https://love.wenlong.site",
    github: "https://github.com/lwlpyl/love",
  },
  {
    name: "圣诞树",
    emoji: "🎄",
    website: "https://tree.wenlong.site",
    github: "https://github.com/lwlpyl/tree",
  },
  {
    name: "旋转相册",
    emoji: "📸",
    website: "https://photo.wenlong.site",
    github: "https://github.com/lwlpyl/photo",
  },
  {
    name: "AI 塔罗牌",
    emoji: "🔮",
    website: "https://tarot.wenlong.site",
    github: "https://github.com/lwlpyl/ai-tarot",
  },
  {
    name: "李释佛器",
    emoji: "🙏",
    website: "https://dxlsfq.wenlong.site",
    github: "https://github.com/lwlpyl/dxlsfq",
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
          <div class="project-links">
            <a href="${project.website}" class="project-link" target="_blank" rel="noopener">网站 →</a>
            <a href="${project.github}" class="project-link" target="_blank" rel="noopener">GitHub →</a>
          </div>
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
