import React, { useEffect, useState } from 'react';
import { MainProduct, ProductFeature, HowItWorksStep } from '../../../types/product';
import UniqueFeature from './UniqueFeature';
import HowItWorks from './HowItWorks';
import KeyFeatures from './KeyFeatures';

interface OverviewTabProps {
  productId: string;
}

// Tab Tổng Quan - Chứa thông tin chung về sản phẩm, tính năng và cách hoạt động
const OverviewTab: React.FC<OverviewTabProps> = ({ productId }) => {
  // State để lưu dữ liệu
  const [product, setProduct] = useState<MainProduct | null>(null);
  const [features, setFeatures] = useState<ProductFeature[]>([]);
  const [howItWorksSteps, setHowItWorksSteps] = useState<HowItWorksStep[]>([]);
  const [advantages, setAdvantages] = useState<string[]>([]);

  // Giả lập việc lấy dữ liệu
  useEffect(() => {
    // PLACEHOLDER: Dữ liệu mẫu - trong thực tế sẽ là API call
    setTimeout(() => {
      // Dữ liệu mẫu cho sản phẩm chính
      setProduct({
        id: 'product-1',
        name: '[TÊN SẢN PHẨM]',
        tagline: '[KHẨU HIỆU SẢN PHẨM - MỘT CÂU NGẮN GỌN VỀ ĐIỂM MẠNH]',
        description: '[MÔ TẢ CHI TIẾT VỀ SẢN PHẨM - 3-5 DÒNG]',
        primaryImage: '/images/product-main.jpg',
        category: '[DANH MỤC]',
        status: 'Đang kinh doanh',
        composition: '[THÀNH PHẦN]',
        chemicalFamily: '[HỌ THUỐC]',
        activityGroup: '[NHÓM HOẠT ĐỘNG]',
        formulation: '[DẠNG THUỐC]',
        modeOfAction: '[CƠ CHẾ TÁC ĐỘNG]'
      });

      // Dữ liệu mẫu cho các tính năng chính
      setFeatures([
        {
          id: 'feature-1',
          title: '[TÍNH NĂNG 1]',
          description: '[MÔ TẢ NGẮN GỌN]',
          icon: 'icon-feature-1'
        },
        {
          id: 'feature-2',
          title: '[TÍNH NĂNG 2]',
          description: '[MÔ TẢ NGẮN GỌN]',
          icon: 'icon-feature-2'
        },
        {
          id: 'feature-3',
          title: '[TÍNH NĂNG 3]',
          description: '[MÔ TẢ NGẮN GỌN]',
          icon: 'icon-feature-3'
        },
        {
          id: 'feature-4',
          title: '[TÍNH NĂNG 4]',
          description: '[MÔ TẢ NGẮN GỌN]',
          icon: 'icon-feature-4'
        }
      ]);

      // Dữ liệu mẫu cho các bước hoạt động
      setHowItWorksSteps([
        {
          id: 'step-1',
          title: '[BƯỚC 1]',
          description: '[MÔ TẢ CHI TIẾT VỀ BƯỚC NÀY]',
          image: '/images/how-it-works-1.jpg'
        },
        {
          id: 'step-2',
          title: '[BƯỚC 2]',
          description: '[MÔ TẢ CHI TIẾT VỀ BƯỚC NÀY]',
          image: '/images/how-it-works-2.jpg'
        },
        {
          id: 'step-3',
          title: '[BƯỚC 3]',
          description: '[MÔ TẢ CHI TIẾT VỀ BƯỚC NÀY]',
          image: '/images/how-it-works-3.jpg'
        }
      ]);

      // Dữ liệu mẫu cho các ưu điểm
      setAdvantages([
        '[ƯU ĐIỂM 1]',
        '[ƯU ĐIỂM 2]',
        '[ƯU ĐIỂM 3]'
      ]);
    }, 500);
  }, [productId]);

  return (
    <div className="overview-tab">
      {/* Phần Tính Năng Đặc Biệt */}
      <UniqueFeature 
        productName={product?.name || '[TÊN SẢN PHẨM]'}
        uniqueFeature="[ĐẶC ĐIỂM NỔI BẬT]"
        environment="[MÔI TRƯỜNG SỬ DỤNG]"
        description={product?.description || '[MÔ TẢ CHI TIẾT]'}
        quote="[TRÍCH DẪN TỪ CHUYÊN GIA HOẶC KHÁCH HÀNG]"
        quoteSource="[NGUỒN TRÍCH DẪN]"
      />
      
      {/* Phần Tính Năng Chính */}
      <KeyFeatures features={features} />
      
      {/* Phần Cách Thức Hoạt Động */}
      <HowItWorks steps={howItWorksSteps} advantages={advantages} />
    </div>
  );
};

export default OverviewTab;