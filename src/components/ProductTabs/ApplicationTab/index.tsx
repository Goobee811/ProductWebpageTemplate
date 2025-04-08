import React, { useEffect, useState } from 'react';
import { UserGroup, UsageProcess, UsageEnvironment as UsageEnvironmentType, FAQ } from '../../../types/product';
import UserBenefits from './UserBenefits';
import UsageGuide from './UsageGuide';
import UsageEnvironment from './UsageEnvironment';
import FrequentlyAskedQuestions from './FAQ';

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

  // Giả lập việc lấy dữ liệu
  useEffect(() => {
    // PLACEHOLDER: Dữ liệu mẫu - trong thực tế sẽ là API call
    setTimeout(() => {
      // Dữ liệu mẫu cho các nhóm người dùng
      setUserGroups([
        {
          name: '[NHÓM NGƯỜI DÙNG 1]',
          description: '[MÔ TẢ NGẮN VỀ NHÓM ĐỐI TƯỢNG NÀY]',
          benefits: [
            { title: '[LỢI ÍCH 1]', details: '[CHI TIẾT]' },
            { title: '[LỢI ÍCH 2]', details: '[CHI TIẾT]' },
            { title: '[LỢI ÍCH 3]', details: '[CHI TIẾT]' },
            { title: '[LỢI ÍCH 4]', details: '[CHI TIẾT]' }
          ]
        },
        {
          name: '[NHÓM NGƯỜI DÙNG 2]',
          description: '[MÔ TẢ NGẮN VỀ NHÓM ĐỐI TƯỢNG NÀY]',
          benefits: [
            { title: '[LỢI ÍCH 1]', details: '[CHI TIẾT]' },
            { title: '[LỢI ÍCH 2]', details: '[CHI TIẾT]' },
            { title: '[LỢI ÍCH 3]', details: '[CHI TIẾT]' },
            { title: '[LỢI ÍCH 4]', details: '[CHI TIẾT]' }
          ]
        }
      ]);

      // Dữ liệu mẫu cho quy trình sử dụng
      setUsageProcesses([
        {
          title: '[QUY TRÌNH 1]',
          steps: [
            { title: '[BƯỚC 1]', instruction: '[HƯỚNG DẪN NGẮN GỌN]' },
            { title: '[BƯỚC 2]', instruction: '[HƯỚNG DẪN NGẮN GỌN]' },
            { title: '[BƯỚC 3]', instruction: '[HƯỚNG DẪN NGẮN GỌN]' }
          ]
        },
        {
          title: '[QUY TRÌNH 2]',
          steps: [
            { title: '[BƯỚC 1]', instruction: '[HƯỚNG DẪN NGẮN GỌN]' },
            { title: '[BƯỚC 2]', instruction: '[HƯỚNG DẪN NGẮN GỌN]' },
            { title: '[BƯỚC 3]', instruction: '[HƯỚNG DẪN NGẮN GỌN]' }
          ]
        }
      ]);

      // Dữ liệu mẫu cho môi trường sử dụng
      setEnvironments([
        { 
          id: "env-1",
          name: '[MÔI TRƯỜNG 1]', 
          description: '[MÔ TẢ NGẮN GỌN]',
          image: '/images/environment-1.jpg'
        },
        { 
          id: "env-2",
          name: '[MÔI TRƯỜNG 2]', 
          description: '[MÔ TẢ NGẮN GỌN]',
          image: '/images/environment-2.jpg'
        },
        { 
          id: "env-3",
          name: '[MÔI TRƯỜNG 3]', 
          description: '[MÔ TẢ NGẮN GỌN]',
          image: '/images/environment-3.jpg'
        },
        { 
          id: "env-4",
          name: '[MÔI TRƯỜNG 4]', 
          description: '[MÔ TẢ NGẮN GỌN]',
          image: '/images/environment-4.jpg'
        }
      ]);

      // Dữ liệu mẫu cho các câu hỏi thường gặp
      setFaqs([
        { 
          id: "faq-1",
          question: '[CÂU HỎI 1]?', 
          answer: '[CÂU TRẢ LỜI CHI TIẾT VỚI 3-5 CÂU]' 
        },
        { 
          id: "faq-2",
          question: '[CÂU HỎI 2]?', 
          answer: '[CÂU TRẢ LỜI CHI TIẾT VỚI 3-5 CÂU]' 
        },
        { 
          id: "faq-3",
          question: '[CÂU HỎI 3]?', 
          answer: '[CÂU TRẢ LỜI CHI TIẾT VỚI 3-5 CÂU]' 
        }
      ]);
    }, 500);
  }, [productId]);

  return (
    <div className="application-tab">
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