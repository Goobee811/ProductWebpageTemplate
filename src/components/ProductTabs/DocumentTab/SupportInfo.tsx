import React from 'react';

// Component hiển thị phần Thông Tin Hỗ Trợ
const SupportInfo: React.FC = () => {
  return (
    <section className="support-info">
      <h2>Thông Tin Hỗ Trợ</h2>
      
      <div className="support-content">
        <p>
          Để được tư vấn chi tiết về [sản phẩm], vui lòng liên hệ:
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span className="contact-label">Email:</span>
            <span className="contact-value">[ĐỊA CHỈ EMAIL]</span>
          </div>
          
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-label">Điện thoại:</span>
            <span className="contact-value">[SỐ ĐIỆN THOẠI]</span>
          </div>
          
          <div className="contact-item">
            <span className="contact-icon">💬</span>
            <span className="contact-label">Hotline/Zalo:</span>
            <span className="contact-value">[SỐ HOTLINE]</span>
          </div>
        </div>
        
        {/* Placeholder cho form liên hệ */}
        <div className="contact-form">
          <h3>Gửi yêu cầu tư vấn</h3>
          <div className="form-placeholder">
            [FORM LIÊN HỆ]
          </div>
        </div>
        
        {/* Placeholder cho thông tin chuyên viên tư vấn */}
        <div className="support-team">
          <h3>Đội ngũ chuyên gia</h3>
          <div className="support-team-members">
            <div className="team-member">
              <div className="member-avatar placeholder">
                [ẢNH CHUYÊN GIA 1]
              </div>
              <div className="member-info">
                <h4>[TÊN CHUYÊN GIA 1]</h4>
                <p>[CHỨC DANH]</p>
                <p>[THÔNG TIN LIÊN HỆ]</p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-avatar placeholder">
                [ẢNH CHUYÊN GIA 2]
              </div>
              <div className="member-info">
                <h4>[TÊN CHUYÊN GIA 2]</h4>
                <p>[CHỨC DANH]</p>
                <p>[THÔNG TIN LIÊN HỆ]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportInfo;