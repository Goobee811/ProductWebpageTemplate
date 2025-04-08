import React, { useEffect, useState } from 'react';
import { RelatedProduct } from '../../types/product';

// Component hiển thị phần Sản Phẩm Liên Quan
const RelatedProducts: React.FC = () => {
  // State để lưu danh sách sản phẩm liên quan
  const [products, setProducts] = useState<RelatedProduct[]>([]);
  
  // Giả lập việc lấy dữ liệu
  useEffect(() => {
    // PLACEHOLDER: Dữ liệu mẫu - trong thực tế sẽ là API call
    setTimeout(() => {
      setProducts([
        {
          id: 'actellic-300cs',
          name: 'Actellic 300CS',
          category: 'INSECTICIDE',
          composition: '300 gr/L Methyl pirimiphos CS (Microencapsulated)',
          imageUrl: '/images/actellic-300cs.png',
          status: 'ACTIVE',
          url: '/product/crop-protection/actellic-300cs'
        },
        {
          id: 'advion-cockroach',
          name: 'Advion Cockroach 0,6 RB',
          category: 'INSECTICIDE',
          composition: '0.6% Indoxacarb Ready Bait',
          imageUrl: '/images/advion-cockroach.png',
          status: 'ACTIVE',
          url: '/product/crop-protection/advion-cockroach-06-rb'
        },
        {
          id: 'zyroxfly',
          name: 'ZyroxFly 0,5RB',
          category: 'INSECTICIDE',
          composition: '0.5% Cyantraniliprole Ready Bait',
          imageUrl: '/images/zyroxfly.png',
          status: 'ACTIVE',
          url: '/product/crop-protection/zyroxfly-05rb'
        },
        {
          id: 'optigard-cockroach',
          name: 'Optigard Cockroach Gel Bait',
          category: 'INSECTICIDE',
          composition: '0.1% Emamectin Benzoat Gel Bait',
          imageUrl: '/images/optigard-cockroach.png',
          status: 'ACTIVE',
          url: '/product/crop-protection/optigard-cockroach-gel-bait'
        }
      ]);
    }, 500);
  }, []);

  return (
    <section className="related-products">
      <h2>Related products</h2>
      
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="card-image">
              {/* Placeholder cho hình ảnh sản phẩm */}
              <div className="image-placeholder">
                {product.name}
              </div>
            </div>
            <div className="card-content">
              <p className="card-category">{product.category}</p>
              <h3 className="card-title">{product.name}</h3>
              <span className="card-status">{product.status}</span>
              <p className="card-detail">{product.composition}</p>
              <a href={product.url} className="card-button">Read more →</a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Placeholder nếu chưa có dữ liệu */}
      {products.length === 0 && (
        <div className="product-cards">
          <div className="product-card placeholder">
            [SẢN PHẨM LIÊN QUAN 1]
          </div>
          <div className="product-card placeholder">
            [SẢN PHẨM LIÊN QUAN 2]
          </div>
          <div className="product-card placeholder">
            [SẢN PHẨM LIÊN QUAN 3]
          </div>
          <div className="product-card placeholder">
            [SẢN PHẨM LIÊN QUAN 4]
          </div>
        </div>
      )}
    </section>
  );
};

export default RelatedProducts;