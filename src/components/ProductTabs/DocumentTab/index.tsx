import React, { useEffect, useState } from 'react';
import { ResearchProof, ProductDocument } from '../../../types/product';
import EffectivenessProof from './EffectivenessProof';
import QualityCommitment from './QualityCommitment';
import PurchaseInfo from './PurchaseInfo';
import SupportInfo from './SupportInfo';
import References from './References';

interface DocumentTabProps {
  productId: string;
}

// Tab Tài Liệu - Chứa các thông tin về nghiên cứu, chứng nhận và tài liệu tham khảo
const DocumentTab: React.FC<DocumentTabProps> = ({ productId }) => {
  // State để lưu dữ liệu
  const [researchProofs, setResearchProofs] = useState<ResearchProof[]>([]);
  const [documents, setDocuments] = useState<ProductDocument[]>([]);
  
  // Giả lập việc lấy dữ liệu
  useEffect(() => {
    // PLACEHOLDER: Dữ liệu mẫu - trong thực tế sẽ là API call
    setTimeout(() => {
      // Dữ liệu mẫu cho nghiên cứu hiệu quả
      setResearchProofs([
        { 
          id: "research-1",
          title: '[NGHIÊN CỨU/THÍ NGHIỆM 1]', 
          results: '[KẾT QUẢ VỚI SỐ LIỆU CỤ THỂ]',
          link: '/research/study-1.pdf'
        },
        { 
          id: "research-2",
          title: '[NGHIÊN CỨU/THÍ NGHIỆM 2]', 
          results: '[KẾT QUẢ VỚI SỐ LIỆU CỤ THỂ]',
          link: '/research/study-2.pdf'
        },
        { 
          id: "research-3",
          title: '[NGHIÊN CỨU/THÍ NGHIỆM 3]', 
          results: '[KẾT QUẢ VỚI SỐ LIỆU CỤ THỂ]',
          link: '/research/study-3.pdf'
        }
      ]);
      
      // Dữ liệu mẫu cho tài liệu tham khảo
      setDocuments([
        {
          id: "doc-1",
          title: 'Brochure',
          filename: 'icon-100cs_brochure.pdf',
          fileSize: '1.34 MB',
          url: '/documents/icon-100cs_brochure.pdf'
        },
        {
          id: "doc-2",
          title: 'Nhãn sản phẩm',
          filename: 'Icon_100CS_label.pdf',
          fileSize: '441.88 KB',
          url: '/documents/Icon_100CS_label.pdf'
        },
        {
          id: "doc-3",
          title: 'MSDS',
          filename: 'msds_icon_100cs_2018.pdf',
          fileSize: '131.26 KB',
          url: '/documents/msds_icon_100cs_2018.pdf'
        }
      ]);
    }, 500);
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