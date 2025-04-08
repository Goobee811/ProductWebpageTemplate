import React, { useState } from 'react';
import OverviewTab from './OverviewTab';
import ApplicationTab from './ApplicationTab';
import DocumentTab from './DocumentTab';

interface TabNavigationProps {
  productId: string;
}

// Component chính quản lý các tab sản phẩm
const TabNavigation: React.FC<TabNavigationProps> = ({ productId }) => {
  // State quản lý tab hiện tại
  const [activeTab, setActiveTab] = useState<'overview' | 'application' | 'document'>('overview');

  return (
    <div className="product-tabs">
      {/* Phần điều hướng tab - luôn cố định khi kéo xuống */}
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Tổng Quan
        </button>
        <button 
          className={`tab-button ${activeTab === 'application' ? 'active' : ''}`}
          onClick={() => setActiveTab('application')}
        >
          Ứng Dụng
        </button>
        <button 
          className={`tab-button ${activeTab === 'document' ? 'active' : ''}`}
          onClick={() => setActiveTab('document')}
        >
          Tài Liệu
        </button>
      </div>

      {/* Nội dung tab */}
      <div className="tab-content">
        {activeTab === 'overview' && <OverviewTab productId={productId} />}
        {activeTab === 'application' && <ApplicationTab productId={productId} />}
        {activeTab === 'document' && <DocumentTab productId={productId} />}
      </div>
    </div>
  );
};

export default TabNavigation;