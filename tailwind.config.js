/** @type {import('tailwindcss').Config} */
module.exports = {
  // 内容路径配置
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 自定义颜色系统
      colors: {
        'primary': '#4F46E5',           // 主要按钮颜色
        'primary-hover': '#4338CA',     // 主要按钮悬停颜色
        'sidebar': '#F9FAFB',           // 侧边栏背景色
        'sidebar-hover': '#F3F4F6',     // 侧边栏项目悬停色
        'yanghoo-blue': '#3B82F6',       // YanghooVedio蓝色
        'yanghoo-purple': '#4338CA',     // YanghooVedio紫色
        'yanghoo-gray': '#F3F4F6',       // YanghooVedio灰色
        'yanghoo-gray-dark': '#E5E7EB',  // YanghooVedio深灰色
        'yanghoo-text': '#111827',       // 主要文本颜色
        'yanghoo-text-secondary': '#4B5563', // 次要文本颜色
        'yanghoo-border': '#E5E7EB',     // 边框颜色
      },
      // 自定义阴影
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.05)',       // 卡片阴影
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08)', // 卡片悬停阴影
      },
      // 自定义圆角
      borderRadius: {
        'xl': '0.75rem',
      },
      // 自定义过渡属性
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
} 