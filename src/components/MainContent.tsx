import React from 'react';
import { Globe, FileText, Mic, Grid2X2, LayoutGrid } from 'lucide-react';
import VideoCard from './VideoCard';

/**
 * 主内容区域组件
 * 显示欢迎信息、功能卡片和视频网格
 */
const MainContent = () => {
  // 示例视频数据，基于截图内容
  const videos = [
    {
      id: 1,
      title: 'Learn Docker NOW! From Hero...',
      thumbnail: '/thumbnails/docker.jpg',
      duration: '16:41',
      daysAgo: 1,
      source: 'YouTube',
      description: "hey I'm Dave welcome to my shop today inhey I'm Dave welcome to..."
    },
    {
      id: 2,
      title: 'NotebookLM 智全教程: AI...',
      thumbnail: '/thumbnails/notebooklm.jpg',
      duration: '26:36',
      daysAgo: 5,
      source: 'YouTube',
      description: "你好, 欢迎回到艾克斯帮, 这才是真正的第二大脑啊, 谷歌最新升级了..."
    },
    {
      id: 3,
      title: 'I use this everyday [aMzdeZ...',
      thumbnail: '/thumbnails/copy.jpg',
      duration: '06:25',
      daysAgo: 7,
      source: 'YouTube',
      description: "This is one of those things you didn't know you needed,but you'll..."
    },
    {
      id: 4,
      title: 'An Artificial Intelligence Con...',
      thumbnail: '/thumbnails/ai.jpg',
      duration: '59:38',
      daysAgo: 7,
      source: 'YouTube',
      description: "[MUSIC]Welcome to FYI, the four-year innovation podcast.This sho..."
    },
    {
      id: 5,
      title: '这个概念彻底颠覆了我的英语...',
      thumbnail: '/thumbnails/english.jpg',
      duration: '09:06',
      daysAgo: 9,
      source: 'YouTube',
      description: ""
    },
    {
      id: 6,
      title: '160.对话玉柱: 宇宙是我在网...',
      thumbnail: '/thumbnails/podcast.jpg',
      duration: '01:29:55',
      daysAgo: 9,
      source: '播客网站',
      description: ""
    },
    {
      id: 7,
      title: 'The Math behind QR code w...',
      thumbnail: '/thumbnails/qr.jpg',
      duration: '14:43',
      daysAgo: 9,
      source: 'YouTube',
      description: ""
    },
    {
      id: 8,
      title: 'Fei Fei Li Professor Stanford ...',
      thumbnail: '/thumbnails/feifei.jpg',
      duration: '18:26',
      daysAgo: 9,
      source: 'YouTube',
      description: ""
    }
  ];

  return (
    <div className="flex-1 overflow-auto bg-white scrollbar-thin">
      {/* 欢迎标题 */}
      <div className="p-8 pb-4">
        <h1 className="text-2xl font-medium text-yanghoo-text">欢迎使用 <span className="text-yanghoo-blue font-semibold">Yanghoo Vedio</span> 语音转文字。</h1>
      </div>

      {/* 功能卡片区域 */}
      <div className="px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* YouTube和播客链接卡片 */}
        <div className="bg-yanghoo-gray rounded-xl p-4 flex items-center hover:shadow-card transition-all hover:bg-white border border-transparent hover:border-yanghoo-border">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <Globe className="text-yanghoo-blue" size={20} />
          </div>
          <span className="text-sm text-yanghoo-text-secondary">支持 YouTube、Podcast 链接</span>
        </div>

        {/* 文本转语音卡片 */}
        <div className="bg-yanghoo-gray rounded-xl p-4 flex items-center hover:shadow-card transition-all hover:bg-white border border-transparent hover:border-yanghoo-border">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
            <FileText className="text-indigo-600" size={20} />
          </div>
          <span className="text-sm text-yanghoo-text-secondary">文本转语音</span>
        </div>

        {/* 录音转文字卡片 */}
        <div className="bg-yanghoo-gray rounded-xl p-4 flex items-center hover:shadow-card transition-all hover:bg-white border border-transparent hover:border-yanghoo-border">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
            <Mic className="text-purple-600" size={20} />
          </div>
          <span className="text-sm text-yanghoo-text-secondary">本地实时录音转换文字</span>
        </div>
      </div>

      {/* 媒体选择栏 */}
      <div className="sticky top-0 z-10 bg-white px-8 py-4 flex items-center border-b border-yanghoo-border">
        <div className="flex space-x-2">
          <button className="px-4 py-1.5 text-sm font-medium rounded-full bg-yanghoo-gray text-yanghoo-text shadow-sm hover:shadow transition-shadow">全部</button>
          <button className="px-4 py-1.5 text-sm font-medium rounded-full text-gray-500 hover:bg-yanghoo-gray transition-colors">视频</button>
          <button className="px-4 py-1.5 text-sm font-medium rounded-full text-gray-500 hover:bg-yanghoo-gray transition-colors">音频</button>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <button className="p-1.5 rounded hover:bg-yanghoo-gray transition-colors">
            <LayoutGrid size={18} className="text-gray-400" />
          </button>
          <button className="p-1.5 rounded bg-yanghoo-gray shadow-sm">
            <Grid2X2 size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* 视频网格 */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default MainContent; 