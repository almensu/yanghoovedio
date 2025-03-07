import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

/**
 * 主页面组件
 * 组合侧边栏和主内容区域
 */
export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Sidebar />
      <MainContent />
    </main>
  );
}
