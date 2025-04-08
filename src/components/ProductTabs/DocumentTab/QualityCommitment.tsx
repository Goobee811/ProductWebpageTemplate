import React from 'react';

// Component hiển thị phần Cam Kết Chất Lượng
const QualityCommitment: React.FC = () => {
  return (
    <section className="quality-commitment">
      <h2>Cam Kết Chất Lượng</h2>
      
      <div className="quality-content">
        <p>
          [THÔNG TIN VỀ NHÀ SẢN XUẤT, CHỨNG NHẬN CHẤT LƯỢNG, ĐĂNG KÝ CHÍNH THỨC]
        </p>
        
        {/* Placeholder cho các chứng nhận chất lượng */}
        <div className="certifications">
          <div className="certification-item">
            <div className="certification-logo placeholder">
              [LOGO CHỨNG NHẬN 1]
            </div>
            <p className="certification-name">[TÊN CHỨNG NHẬN 1]</p>
          </div>
          
          <div className="certification-item">
            <div className="certification-logo placeholder">
              [LOGO CHỨNG NHẬN 2]
            </div>
            <p className="certification-name">[TÊN CHỨNG NHẬN 2]</p>
          </div>
          
          <div className="certification-item">
            <div className="certification-logo placeholder">
              [LOGO CHỨNG NHẬN 3]
            </div>
            <p className="certification-name">[TÊN CHỨNG NHẬN 3]</p>
          </div>
        </div>
        
        {/* Placeholder cho thông tin đăng ký */}
        <div className="registration-info">
          <h3>Thông Tin Đăng Ký</h3>
          <ul className="registration-list">
            <li><strong>Số Giấy Phép</strong>: [SỐ GIẤY PHÉP]</li>
            <li><strong>Cơ Quan Cấp Phép</strong>: [CƠ QUAN CẤP PHÉP]</li>
            <li><strong>Ngày Cấp</strong>: [NGÀY CẤP]</li>
            <li><strong>Hiệu Lực Đến</strong>: [NGÀY HẾT HIỆU LỰC]</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;