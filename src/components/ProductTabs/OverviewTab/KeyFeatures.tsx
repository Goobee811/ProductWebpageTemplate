import React from 'react';
import { ProductFeature } from '../../../types/product';

interface KeyFeaturesProps {
  features: ProductFeature[];
}

// Component hiển thị phần Đặc Tính Nổi Bật
const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => {
  return (
    <section className="key-features">
      <h2>Đặc Tính Nổi Bật</h2>
      
      {/* Bảng đặc tính theo mẫu */}
      <table className="feature-table">
        <thead>
          <tr>
            <th>Đặc tính</th>
            <th>Chi tiết</th>
            <th>Lợi ích</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td><strong>{feature.title}</strong></td>
              <td>{feature.description}</td>
              <td>{feature.icon}</td>
            </tr>
          ))}
          
          {/* Placeholder rows nếu dữ liệu thật chưa đủ */}
          {features.length < 5 && (
            <>
              <tr>
                <td><strong>[ĐẶC TÍNH 3]</strong></td>
                <td>[MÔ TẢ KỸ THUẬT]</td>
                <td>[LỢI ÍCH CHO NGƯỜI DÙNG]</td>
              </tr>
              <tr>
                <td><strong>[ĐẶC TÍNH 4]</strong></td>
                <td>[MÔ TẢ KỸ THUẬT]</td>
                <td>[LỢI ÍCH CHO NGƯỜI DÙNG]</td>
              </tr>
              <tr>
                <td><strong>[ĐẶC TÍNH 5]</strong></td>
                <td>[MÔ TẢ KỸ THUẬT]</td>
                <td>[LỢI ÍCH CHO NGƯỜI DÙNG]</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default KeyFeatures;