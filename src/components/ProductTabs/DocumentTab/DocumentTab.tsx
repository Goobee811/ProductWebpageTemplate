import React, { useEffect, useState } from 'react';
import { ProductInfo, ResearchProof, Document, ProductDocument } from '../../../types/product';
import EffectivenessProof from './EffectivenessProof';
import QualityCommitment from './QualityCommitment';
import PurchaseInfo from './PurchaseInfo';
import SupportInfo from './SupportInfo';
import References from './References';
import icon10CSData from '../../../data/icon10CSData';

interface DocumentTabProps {
  productData?: ProductInfo;
  productId: string;
}

// Tab Tài Liệu - Chứa các thông tin về nghiên cứu, chứng nhận và tài liệu tham khảo
const DocumentTab: React.FC<DocumentTabProps> = ({ productData, productId }) => {
  // State để lưu dữ liệu
  const [researchProofs, setResearchProofs] = useState<ResearchProof[]>([]);
  const [documents, setDocuments] = useState<ProductDocument[]>([]);
  
  // Giả lập việc lấy dữ liệu
  useEffect(() => {
    // Sử dụng dữ liệu thực tế từ Icon 10CS
    if (productId === 'icon-10cs-62-5ml') {
      setResearchProofs(icon10CSData.researchProofs);
      setDocuments(icon10CSData.documents);
    } else {
      // Fallback nếu không tìm thấy ID sản phẩm
      setResearchProofs(icon10CSData.researchProofs);
      setDocuments(icon10CSData.documents);
    }
  }, [productId]);

  return (
    <div className="document-tab">
      {/* Phần Chứng Minh Hiệu Quả */}
      <EffectivenessProof researchProofs={researchProofs} />
      
      {/* Phần Cam Kết Chất Lượng */}
      <QualityCommitment />
      
      {/* Phần Thông Tin Mua Hàng */}
      <PurchaseInfo />
      
      {/* Phần Thông Tin Hỗ Trợ */}
      <SupportInfo />
      
      {/* Phần Tài Liệu Tham Khảo */}
      <References documents={documents} />
    </div>
  );
};

export default DocumentTab;