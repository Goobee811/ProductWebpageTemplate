import React from 'react';
import { UserGroup } from '../../../types/product';

interface UserBenefitsProps {
  userGroups: UserGroup[];
}

// Component hiển thị phần Lợi Ích Cho Người Dùng
const UserBenefits: React.FC<UserBenefitsProps> = ({ userGroups }) => {
  return (
    <section className="user-benefits">
      <h2>Lợi Ích Cho Người Dùng</h2>
      
      {userGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="user-group">
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          
          <ul className="chevron-list">
            {group.benefits.map((benefit, benefitIndex) => (
              <li key={benefitIndex}>
                <strong>{benefit.title}</strong>: {benefit.details}
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      {/* Placeholder nếu chưa có dữ liệu */}
      {userGroups.length === 0 && (
        <>
          <div className="user-group">
            <h3>[NHÓM NGƯỜI DÙNG 1]</h3>
            <p>[MÔ TẢ NGẮN VỀ NHÓM ĐỐI TƯỢNG NÀY]</p>
            
            <ul className="chevron-list">
              <li><strong>[LỢI ÍCH 1]</strong>: [CHI TIẾT]</li>
              <li><strong>[LỢI ÍCH 2]</strong>: [CHI TIẾT]</li>
              <li><strong>[LỢI ÍCH 3]</strong>: [CHI TIẾT]</li>
              <li><strong>[LỢI ÍCH 4]</strong>: [CHI TIẾT]</li>
            </ul>
          </div>
          
          <div className="user-group">
            <h3>[NHÓM NGƯỜI DÙNG 2]</h3>
            <p>[MÔ TẢ NGẮN VỀ NHÓM ĐỐI TƯỢNG NÀY]</p>
            
            <ul className="chevron-list">
              <li><strong>[LỢI ÍCH 1]</strong>: [CHI TIẾT]</li>
              <li><strong>[LỢI ÍCH 2]</strong>: [CHI TIẾT]</li>
              <li><strong>[LỢI ÍCH 3]</strong>: [CHI TIẾT]</li>
              <li><strong>[LỢI ÍCH 4]</strong>: [CHI TIẾT]</li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default UserBenefits;