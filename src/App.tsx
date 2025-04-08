import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { OverviewTab, ApplicationTab, DocumentTab } from './components/ProductTabs';
import RelatedProducts from './components/RelatedProducts';
import './styles/global.css';
import './styles/theme.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'application' | 'document'>('overview');
  // Add a productId to pass to tab components
  const productId = "product-123"; // This could be dynamic in a real application

  return (
    <div className="app-container">
      <Header />
      
      <main>
        <div className="container">
          {/* Tab Navigation */}
          <div className="product-tabs">
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
            
            <div className="tab-content">
              {activeTab === 'overview' && <OverviewTab productId={productId} />}
              {activeTab === 'application' && <ApplicationTab productId={productId} />}
              {activeTab === 'document' && <DocumentTab productId={productId} />}
            </div>
          </div>
          
          {/* Related Products */}
          <RelatedProducts />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;