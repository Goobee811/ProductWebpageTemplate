import React from 'react';

// Component hiển thị phần Thông Tin Mua Hàng
const PurchaseInfo: React.FC = () => {
  return (
    <section className="purchase-info">
      <h2>Thông Tin Mua Hàng</h2>
      
      <div className="purchase-content">
        <p>
          [MÔ TẢ VỀ HỆ THỐNG PHÂN PHỐI, CÁCH TIẾP CẬN SẢN PHẨM]
        </p>
        
        {/* Placeholder cho thông tin đóng gói */}
        <div className="packaging-info">
          <h3>Quy Cách Đóng Gói</h3>
          <ul className="packaging-list">
            <li><strong>[KÍCH THƯỚC 1]</strong>: [GIÁ NIÊM YẾT HOẶC THÔNG TIN KHÁC]</li>
            <li><strong>[KÍCH THƯỚC 2]</strong>: [GIÁ NIÊM YẾT HOẶC THÔNG TIN KHÁC]</li>
            <li><strong>[KÍCH THƯỚC 3]</strong>: [GIÁ NIÊM YẾT HOẶC THÔNG TIN KHÁC]</li>
          </ul>
        </div>
        
        {/* Placeholder cho hệ thống phân phối */}
        <div className="distribution-system">
          <h3>Hệ Thống Phân Phối</h3>
          <div className="distribution-map placeholder">
            [BẢN ĐỒ HOẶC DANH SÁCH CÁC NHÀ PHÂN PHỐI]
          </div>
          
          {/* Placeholder cho form tìm nhà phân phối */}
          <div className="distributor-finder">
            <h4>Tìm nhà phân phối gần bạn</h4>
            <div className="finder-form placeholder">
              [FORM TÌM NHÀ PHÂN PHỐI]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseInfo;