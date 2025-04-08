import React from 'react';
import { ResearchProof } from '../../../types/product';

interface EffectivenessProofProps {
  researchProofs: ResearchProof[];
}

// Component hiển thị phần Chứng Minh Hiệu Quả
const EffectivenessProof: React.FC<EffectivenessProofProps> = ({ researchProofs }) => {
  return (
    <section className="effectiveness-proof line-of-optimism">
      <h2>Chứng Minh Hiệu Quả</h2>
      
      <p className="research-intro">
        [CÂU MỞ ĐẦU VỀ TÍNH KHOA HỌC VÀ THỰC TIỄN CỦA SẢN PHẨM]
      </p>
      
      <ul className="chevron-list">
        {researchProofs.map((proof, index) => (
          <li key={index}>
            <strong>{proof.title}</strong>: {proof.results}
          </li>
        ))}
      </ul>
      
      {/* Placeholder nếu chưa có dữ liệu */}
      {researchProofs.length === 0 && (
        <ul className="chevron-list">
          <li><strong>[NGHIÊN CỨU/THÍ NGHIỆM 1]</strong>: [KẾT QUẢ VỚI SỐ LIỆU CỤ THỂ]</li>
          <li><strong>[NGHIÊN CỨU/THÍ NGHIỆM 2]</strong>: [KẾT QUẢ VỚI SỐ LIỆU CỤ THỂ]</li>
          <li><strong>[NGHIÊN CỨU/THÍ NGHIỆM 3]</strong>: [KẾT QUẢ VỚI SỐ LIỆU CỤ THỂ]</li>
        </ul>
      )}
    </section>
  );
};

export default EffectivenessProof;