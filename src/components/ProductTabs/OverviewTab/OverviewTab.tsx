import React, { useEffect, useState } from 'react';
import { ProductInfo as ProductInfoType, FeatureDetail, Step } from '../../../types/product';
import icon10CSData from '../../../data/icon10CSData';
import UniqueFeature from './UniqueFeature';
import HowItWorks from './HowItWorks';
import KeyFeatures from './KeyFeatures';

interface OverviewTabProps {
  productData?: ProductInfoType;
  productId?: string;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ productData, productId }) => {
  const [product, setProduct] = useState<ProductInfoType | null>(productData || null);
  const [features, setFeatures] = useState<FeatureDetail[]>(icon10CSData.features);
  const [howItWorksSteps, setHowItWorksSteps] = useState<Step[]>([]);
  const [advantages, setAdvantages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (productData) {
      setProduct(productData);
      return;
    }
    if (productId && !productData) {
      setLoading(true);
      setProduct(icon10CSData.productInfo);
      setLoading(false);
    } else if (!product) {
      setProduct(icon10CSData.productInfo);
    }
  }, [productId, productData, product]);

  useEffect(() => {
    setProduct(productData || icon10CSData.productInfo);
    setTimeout(() => {
      setHowItWorksSteps([
        { id: 'step-1', title: "Tiếp xúc ban đầu", description: "Lambda-cyhalothrin tiếp xúc với côn trùng thông qua bề mặt đã được phun xịt, bắt đầu quá trình tác động" },
        { id: 'step-2', title: "Giải phóng hoạt chất", description: "Vi nang polymer từ từ giải phóng Lambda-cyhalothrin, đảm bảo hiệu quả liên tục kéo dài" },
        { id: 'step-3', title: "Tác động hệ thần kinh", description: "Hoạt chất tác động lên kênh natri của côn trùng, gây rối loạn dẫn truyền thần kinh" },
        { id: 'step-4', title: "Hiệu quả tồn lưu", description: "Công nghệ vi nang bảo vệ hoạt chất khỏi ánh sáng và độ ẩm, duy trì hiệu quả đến 3 tháng" }
      ]);
      setAdvantages([
        "Hiệu quả tồn lưu dài lâu đến 3 tháng", 
        "An toàn khi sử dụng đúng hướng dẫn", 
        "Công nghệ vi nang bảo vệ hoạt chất khỏi tác động môi trường"
      ]);
    }, 500);
  }, [productData]);

  if (loading) {
    return <div className="loading">Đang tải thông tin sản phẩm...</div>;
  }

  if (!product) {
    return <div className="error">Không thể tải thông tin sản phẩm.</div>;
  }

  return (
    <div className="overview-tab">
      <UniqueFeature
        productName={product?.name || 'Icon 10CS Gói 62.5ml'}
        uniqueFeature="Công nghệ vi nang (CS) tiên tiến"
        environment="Trong nhà"
        description={product?.description || 'Thuốc diệt muỗi và kiến ba khoang công nghệ vi nang, hiệu quả đến 3 tháng'}
        quote="Lambda-cyhalothrin CS đã được WHO khuyến cáo sử dụng trong các chiến dịch phun tồn lưu trong nhà (IRS) nhằm kiểm soát muỗi truyền bệnh"
        quoteSource="World Health Organization, 2021"
      />
      <KeyFeatures features={features} />
      <HowItWorks steps={howItWorksSteps} advantages={advantages} />
    </div>
  );
};

export default OverviewTab;