import React from 'react';
import { 
  Home, 
  Film, 
  PenTool, 
  Trash2, 
  Settings, 
  FolderOpen, 
  Plus,
  ChevronRight
} from 'lucide-react';

/**
 * 侧边栏组件
 * 显示应用程序的主导航、文件夹和订阅选项
 */
const Sidebar = () => {
  return (
    <div className="w-56 h-screen bg-sidebar border-r border-yanghoo-border flex flex-col shadow-sm">
      {/* 应用程序Logo和标题 */}
      <div className="flex items-center p-4 border-b border-yanghoo-border">
        <div className="w-8 h-8 bg-gradient-to-br from-yanghoo-purple to-yanghoo-blue rounded-lg flex items-center justify-center text-white mr-3 shadow-sm">
          <span className="font-bold">Y</span>
        </div>
        <div>
          <div className="flex items-center">
            <span className="font-medium text-yanghoo-text">YanghooVedio</span>
            <button className="ml-auto text-gray-400 hover:text-gray-600 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
          <span className="text-xs text-gray-500">Pro</span>
        </div>
      </div>

      {/* 主导航菜单 */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin">
        <ul className="space-y-1 px-2">
          {/* 当前选中的菜单项 */}
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors">
              <Home size={18} className="mr-3" />
              Memo
            </a>
          </li>
          {/* 其他菜单项 */}
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-yanghoo-text-secondary hover:bg-sidebar-hover transition-colors">
              <Film size={18} className="mr-3 text-gray-500" />
              媒体
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-yanghoo-text-secondary hover:bg-sidebar-hover transition-colors">
              <PenTool size={18} className="mr-3 text-gray-500" />
              笔记
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-yanghoo-text-secondary hover:bg-sidebar-hover transition-colors">
              <Trash2 size={18} className="mr-3 text-gray-500" />
              回收站
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-yanghoo-text-secondary hover:bg-sidebar-hover transition-colors">
              <Settings size={18} className="mr-3 text-gray-500" />
              设置
            </a>
          </li>
        </ul>

        {/* 文件夹部分 */}
        <div className="mt-8 px-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Folders (2)</h3>
            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
              <Plus size={14} />
            </button>
          </div>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-yanghoo-text-secondary hover:bg-sidebar-hover group transition-colors">
                <FolderOpen size={16} className="mr-2 text-gray-400 group-hover:text-yanghoo-blue transition-colors" />
                <span className="truncate">2024-04-01-你</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-yanghoo-text-secondary hover:bg-sidebar-hover group transition-colors">
                <FolderOpen size={16} className="mr-2 text-gray-400 group-hover:text-yanghoo-blue transition-colors" />
                <span className="truncate">2024-03-30</span>
              </a>
            </li>
          </ul>
        </div>

        {/* 订阅部分 */}
        <div className="mt-8 px-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">订阅</h3>
            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
              <Plus size={14} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar; 