import React from 'react';

// Component hiển thị phần Header
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="secondary-nav">
          <a href="#" className="nav-link">ABOUT US</a>
          <a href="#" className="nav-link">SEARCH</a>
          <a href="#" className="nav-link">SYNGENTA GLOBAL</a>
          <a href="#" className="nav-link">LOG IN</a>
          <div className="language-selector">
            <span>EN</span>
            <span className="dropdown-icon">▼</span>
          </div>
        </div>
        
        <div className="logo-container">
          {/* Logo Syngenta PPM và logo Indonesia */}
          <img src="/logo-ppm.png" alt="Syngenta PPM" className="logo" />
          <img src="/logo-indonesia.png" alt="Indonesia" className="logo-country" />
        </div>
      </div>
      
      <nav className="main-navigation">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link home-link">
              <span className="home-icon">🏠</span>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Business</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Solutions</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">News & Articles</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Videos</a>
          </li>
        </ul>
      </nav>
      
      <div className="breadcrumb">
        <ul className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="#" className="breadcrumb-link">HOME</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="breadcrumb-link">PRODUCTS</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="breadcrumb-link">INSECTICIDE</a>
          </li>
          <li className="breadcrumb-item">
            <span className="breadcrumb-current">ICON 100CS</span>
          </li>
        </ul>
      </div>
      
      {/* Phần thông tin sản phẩm đầu trang */}
      <div className="product-header">
        <div className="product-info">
          <h1 className="product-title">Icon 100CS</h1>
          <p className="product-tagline">Long lasting residual insecticide</p>
          <span className="product-status">ACTIVE</span>
          
          <div className="product-details">
            <div className="detail-item">
              <span className="detail-label">Last Updated:</span>
              <span className="detail-value">29.08.2019</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Category:</span>
              <span className="detail-value">INSECTICIDE</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Purpose:</span>
              <span className="detail-value">PROFESSIONAL PEST MANAGEMENT, VECTOR CONTROL</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Authorisation Number:</span>
              <span className="detail-value">RL 08090120062425</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Pack Size:</span>
              <span className="detail-value">250 ml; 1 Litre</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Composition:</span>
              <span className="detail-value">100 g/L Lambda-cyhalothrin</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Chemical Family:</span>
              <span className="detail-value">Pyrethroid</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Activity Group:</span>
              <span className="detail-value">Group 3A Insecticide</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Formulation:</span>
              <span className="detail-value">CS (Microencapsulated)</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Mode of Action:</span>
              <span className="detail-value">contact</span>
            </div>
          </div>
        </div>
        
        <div className="product-image">
          {/* Placeholder cho hình ảnh sản phẩm */}
          <div className="image-placeholder">
            [HÌNH ẢNH SẢN PHẨM]
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;