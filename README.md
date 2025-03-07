# YanghooVedio UI Clone

这个项目是YanghooVedio应用程序的UI克隆，它是一个用于将语音转换为文本的工具，支持YouTube、播客和本地录音等多种来源。

## 复制的功能

- 带有文件夹和菜单项的侧边栏导航
- 带有欢迎信息的主内容区域
- YouTube/Podcast链接、文本转语音和录音的功能卡片
- 媒体过滤选项
- 带有缩略图和元数据的视频网格
- 响应式设计

## 使用的技术

- Next.js
- TypeScript
- Tailwind CSS
- Lucide React 图标库

## 开始使用

首先，安装依赖项：

```bash
npm install
```

然后，运行开发服务器：

```bash
npm run dev
```

用浏览器打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 项目结构

- `src/components/` - UI组件
  - `Sidebar.tsx` - 左侧导航栏
  - `MainContent.tsx` - 带有视频的主内容区域
  - `VideoCard.tsx` - 用于显示视频的卡片组件

- `src/app/` - Next.js应用路由页面
  - `page.tsx` - 组合组件的主页面
  - `layout.tsx` - 带有元数据的根布局

## 注意

这是一个用于演示目的的静态UI克隆。功能（如播放视频或将语音转换为文本）未实现。
