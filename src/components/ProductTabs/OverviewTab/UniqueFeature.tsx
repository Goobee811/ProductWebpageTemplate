import React from 'react';

interface UniqueFeatureProps {
  productName: string;
  uniqueFeature: string;
  environment: string;
  description: string;
  quote: string;
  quoteSource: string;
}

// Component hiển thị phần Công Nghệ Độc Đáo
const UniqueFeature: React.FC<UniqueFeatureProps> = ({
  productName,
  uniqueFeature,
  environment,
  description,
  quote,
  quoteSource
}) => {
  return (
    <section className="unique-feature line-of-optimism">
      <h2>Công Nghệ Độc Đáo</h2>
      
      {/* Dòng đầu tiên theo mẫu "[TÊN SẢN PHẨM] tạo nên một [ĐẶC ĐIỂM NỔI BẬT] trên [MÔI TRƯỜNG SỬ DỤNG]" */}
      <p>
        <strong>{productName}</strong> tạo nên một <strong>{uniqueFeature}</strong> trên {environment}. {description}
      </p>
      
      {/* Phần trích dẫn */}
      <blockquote>
        <p><em>"{quote}"</em></p>
        <cite>— <strong>{quoteSource}</strong></cite>
      </blockquote>
    </section>
  );
};

export default UniqueFeature;