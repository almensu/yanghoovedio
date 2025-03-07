import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

/**
 * 视频卡片组件的属性接口
 */
interface VideoProps {
  video: {
    id: number;        // 视频ID
    title: string;     // 视频标题
    thumbnail: string; // 缩略图路径
    duration: string;  // 视频时长
    daysAgo: number;   // 发布天数
    source: string;    // 视频来源
    description: string; // 视频描述
  }
}

/**
 * 视频卡片组件
 * 显示视频的缩略图、标题、时长、来源和描述
 */
const VideoCard: React.FC<VideoProps> = ({ video }) => {
  // 根据视频ID生成随机背景颜色
  const getBackgroundColor = (id: number) => {
    const colors = [
      'from-blue-700 to-blue-900',
      'from-red-700 to-red-900',
      'from-green-700 to-green-900',
      'from-yellow-700 to-yellow-900',
      'from-purple-700 to-purple-900',
      'from-pink-700 to-pink-900',
      'from-indigo-700 to-indigo-900',
      'from-gray-700 to-gray-900',
    ];
    return colors[id % colors.length];
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-yanghoo-border group">
      {/* 缩略图区域 */}
      <div className="relative">
        <div className={`aspect-video bg-gradient-to-br ${getBackgroundColor(video.id)} relative overflow-hidden`}>
          {/* 缩略图占位符 - 实际应用中这里会是真实图片 */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-xs p-2 text-center">
            {video.title}
          </div>
          
          {/* 播放按钮覆盖层 - 鼠标悬停时显示 */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
              <Play size={24} className="text-white fill-white ml-1" />
            </div>
          </div>
        </div>
        
        {/* 时长标签 */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1.5 py-0.5 rounded backdrop-blur-sm">
          {video.duration}
        </div>
        
        {/* 来源标签 */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1.5 py-0.5 rounded flex items-center backdrop-blur-sm">
          <span>来自 {video.source}</span>
          <ExternalLink size={12} className="ml-1" />
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="p-3">
        <h3 className="font-medium text-sm text-yanghoo-text line-clamp-1 group-hover:text-yanghoo-blue transition-colors">{video.title}</h3>
        <div className="text-xs text-gray-500 mt-1">{video.daysAgo} 个日前</div>
        <p className="text-xs text-yanghoo-text-secondary mt-2 line-clamp-2">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard; 