import React, { useEffect, useState } from 'react';
import { ProductInfo, UserGroup, UsageProcess, UsageEnvironment as UsageEnvironmentType, FAQ } from '../../../types/product';
import UserBenefits from './UserBenefits';
import UsageGuide from './UsageGuide';
import UsageEnvironment from './UsageEnvironment';
import FrequentlyAskedQuestions from './FAQ';
import icon10CSData from '../../../data/icon10CSData';

interface ApplicationTabProps {
  productId: string;
}

// Tab Ứng Dụng - Chứa thông tin về cách sử dụng và lợi ích cho người dùng
const ApplicationTab: React.FC<ApplicationTabProps> = ({ productId }) => {
  // State để lưu dữ liệu
  const [userGroups, setUserGroups] = useState<UserGroup[]>([]);
  const [usageProcesses, setUsageProcesses] = useState<UsageProcess[]>([]);
  const [environments, setEnvironments] = useState<UsageEnvironmentType[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  // Giả lập việc lấy dữ liệu - sử dụng productId khi cần thiết
  useEffect(() => {
    // Sử dụng dữ liệu thực tế từ Icon 10CS
    if (productId === 'icon-10cs-62-5ml') {
      setUserGroups(icon10CSData.userGroups);
      setUsageProcesses(icon10CSData.usageProcesses);
      setEnvironments(icon10CSData.environments);
      setFaqs(icon10CSData.faqs);
    } else {
      // Fallback nếu không tìm thấy ID sản phẩm
      setUserGroups(icon10CSData.userGroups);
      setUsageProcesses(icon10CSData.usageProcesses);
      setEnvironments(icon10CSData.environments);
      setFaqs(icon10CSData.faqs);
    }
  }, [productId]); // Thay đổi dependency để sử dụng productId

  return (
    <div className="application-tab" data-testid="application-tab">
      {/* Phần Lợi Ích Cho Người Dùng */}
      <UserBenefits userGroups={userGroups} />
      
      {/* Phần Hướng Dẫn Sử Dụng */}
      <UsageGuide processes={usageProcesses} />
      
      {/* Phần Môi Trường Sử Dụng */}
      <UsageEnvironment environments={environments} />
      
      {/* Phần Câu Hỏi Thường Gặp */}
      <FrequentlyAskedQuestions faqs={faqs} />
    </div>
  );
};

export default ApplicationTab;