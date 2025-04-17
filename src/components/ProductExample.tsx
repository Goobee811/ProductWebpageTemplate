import React from 'react';
import dataModules, { getProductById, ProductDataType } from '../data';
import { FAQ, FeatureDetail } from '../types/product';

// Example 1: Access via named imports
const ProductExampleComponent1: React.FC = () => {
  // Get Icon 10CS data directly
  const icon10CS = dataModules.icon10CSData;
  
  return (
    <div className="product-example">
      <h2>Ví dụ 1: Truy cập trực tiếp</h2>
      <h3>{icon10CS.productInfo.name}</h3>
      <p>{icon10CS.productInfo.tagline}</p>
      
      <h4>Đặc tính sản phẩm:</h4>
      <ul>
        {icon10CS.features.map((feature: FeatureDetail) => (
          <li key={feature.id}>{feature.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Example 2: Access via product ID
const ProductExampleComponent2: React.FC = () => {
  // Use the helper function to get product by ID
  const icon10CS = getProductById('icon-10cs-62-5ml');
  
  if (!icon10CS) {
    return <div>Không tìm thấy sản phẩm</div>;
  }
  
  return (
    <div className="product-example">
      <h2>Ví dụ 2: Truy cập qua ID</h2>
      <h3>{icon10CS.productInfo.name}</h3>
      <p>{icon10CS.productInfo.description}</p>
      
      <h4>Câu hỏi thường gặp:</h4>
      {icon10CS.faqs.slice(0, 2).map((faq: FAQ) => (
        <div key={faq.id}>
          <h5>{faq.question}</h5>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

// Example 3: Dynamic product switching
const ProductSwitcher: React.FC = () => {
  const [currentProductId, setCurrentProductId] = React.useState('icon-10cs-62-5ml');
  const currentProduct = getProductById(currentProductId);
  
  if (!currentProduct) {
    return <div>Không tìm thấy sản phẩm</div>;
  }
  
  return (
    <div className="product-switcher">
      <h2>Ví dụ 3: Chuyển đổi sản phẩm động</h2>
      <div>
        <button onClick={() => setCurrentProductId('icon-10cs-62-5ml')}>
          Icon 10CS
        </button>
        <button onClick={() => setCurrentProductId('template')}>
          Mẫu sản phẩm
        </button>
      </div>
      
      <h3>{currentProduct.productInfo.name}</h3>
      <p>{currentProduct.productInfo.tagline}</p>
      
      <h4>Thông tin chi tiết:</h4>
      <p><strong>Thành phần:</strong> {currentProduct.productInfo.composition}</p>
      <p><strong>Đóng gói:</strong> {currentProduct.productInfo.packSize}</p>
    </div>
  );
};

export { ProductExampleComponent1, ProductExampleComponent2, ProductSwitcher };

// Default export with all components
const ProductExample: React.FC = () => {
  return (
    <div className="product-examples-container">
      <h1>Ví dụ về cách sử dụng dữ liệu sản phẩm</h1>
      <ProductExampleComponent1 />
      <hr />
      <ProductExampleComponent2 />
      <hr />
      <ProductSwitcher />
    </div>
  );
};

export default ProductExample;