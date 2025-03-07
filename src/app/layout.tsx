import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 加载Inter字体，设置拉丁文子集
const inter = Inter({ subsets: ["latin"] });

// 网站元数据
export const metadata: Metadata = {
  title: "YanghooVedio - 语音转文字",
  description: "YanghooVedio 是一款强大的语音转文字工具，支持YouTube、Podcast链接和本地录音。",
};

/**
 * 根布局组件
 * 包含所有页面的基本HTML结构
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
