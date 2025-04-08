import React from 'react';
import { UsageEnvironment as EnvironmentType } from '../../../types/product';

interface UsageEnvironmentProps {
  environments: EnvironmentType[];
}

// Component hiển thị phần Môi Trường Sử Dụng
const UsageEnvironment: React.FC<UsageEnvironmentProps> = ({ environments }) => {
  return (
    <section className="usage-environment">
      <h2>Môi Trường Sử Dụng</h2>
      
      <p className="environment-intro">
        [CÂU MỞ ĐẦU VỀ PHẠM VI ỨNG DỤNG CỦA SẢN PHẨM]
      </p>
      
      <ul className="chevron-list">
        {environments.map((env, index) => (
          <li key={index}>
            <strong>{env.name}</strong>: {env.description}
          </li>
        ))}
      </ul>
      
      {/* Placeholder nếu chưa có dữ liệu */}
      {environments.length === 0 && (
        <ul className="chevron-list">
          <li><strong>[MÔI TRƯỜNG 1]</strong>: [MÔ TẢ NGẮN GỌN]</li>
          <li><strong>[MÔI TRƯỜNG 2]</strong>: [MÔ TẢ NGẮN GỌN]</li>
          <li><strong>[MÔI TRƯỜNG 3]</strong>: [MÔ TẢ NGẮN GỌN]</li>
          <li><strong>[MÔI TRƯỜNG 4]</strong>: [MÔ TẢ NGẮN GỌN]</li>
        </ul>
      )}
    </section>
  );
};

export default UsageEnvironment;