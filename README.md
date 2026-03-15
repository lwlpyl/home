# 李文龙 | 个人博客

纯前端个人博客网站，用于个人介绍、项目分享和技术博客。

---

## 文件结构

```
blog/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # 交互逻辑
└── README.md       # 说明文档
```

---

## 快速开始

双击 `index.html` 即可在浏览器中预览

---

## 功能特点

- ✅ 响应式设计（手机/平板/桌面）
- ✅ 个人介绍展示
- ✅ 项目作品展示
- ✅ 博客文章列表
- ✅ 联系方式展示
- ✅ 平滑滚动导航
- ✅ 移动端汉堡菜单

---

## 自定义配置

### 修改个人信息

编辑 `script.js` 中的 `siteConfig`：

```javascript
const siteConfig = {
  name: "李文龙",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  location: "你的城市",
};
```

### 添加项目

编辑 `script.js` 中的 `projects` 数组：

```javascript
const projects = [
  {
    name: "项目名称",
    emoji: "🚀",
    description: "项目描述",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://your-project.com",
    github: "https://github.com/yourusername/project",
  },
];
```

### 添加博客文章

编辑 `script.js` 中的 `blogPosts` 数组：

```javascript
const blogPosts = [
  {
    title: "文章标题",
    date: "2026-03-15",
    excerpt: "文章摘要...",
    link: "文章链接",
  },
];
```

---

## 部署到 GitHub Pages

### 1. 推送代码

```bash
cd D:\workspace\blog
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/lwlpyl/blog.git
git push -u origin main
```

### 2. 启用 GitHub Pages

1. 访问 https://github.com/lwlpyl/blog/settings/pages
2. Source: Deploy from a branch
3. Branch: main / Folder: / (root)
4. Save

### 3. 访问地址

```
https://lwlpyl.github.io/blog/
```

---

## 配色方案

| 颜色     | 值        | 用途     |
| -------- | --------- | -------- |
| 主蓝色   | `#2563eb` | 主色调   |
| 深蓝色   | `#1e293b` | 深色背景 |
| 浅蓝色   | `#3b82f6` | 强调色   |
| 文字深色 | `#334155` | 主要文字 |
| 文字浅色 | `#64748b` | 次要文字 |

---

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和动画
- **JavaScript** - 交互逻辑
- **GitHub Pages** - 免费托管

---

## 许可证

MIT License

---

**创建时间**: 2026-03-15  
**作者**: 李文龙
