import React from 'react';
import { UsageProcess } from '../../../types/product';

interface UsageGuideProps {
  processes: UsageProcess[];
}

// Component hiển thị phần Hướng Dẫn Sử Dụng
const UsageGuide: React.FC<UsageGuideProps> = ({ processes }) => {
  return (
    <section className="usage-guide line-of-optimism">
      <h2>Hướng Dẫn Sử Dụng</h2>
      
      {processes.map((process, processIndex) => (
        <div key={processIndex} className="usage-process">
          <h3>{process.title}</h3>
          
          <ol className="process-steps">
            {process.steps.map((step, stepIndex) => (
              <li key={stepIndex}>
                <strong>{step.title}</strong>: {step.instruction}
              </li>
            ))}
          </ol>
        </div>
      ))}
      
      {/* Placeholder cho hình ảnh minh họa */}
      <div className="usage-image-placeholder">
        <p>[Hình ảnh minh họa hướng dẫn]</p>
        <p className="image-caption">Hình minh họa quy trình sử dụng sản phẩm</p>
      </div>
      
      {/* Placeholder nếu chưa có dữ liệu */}
      {processes.length === 0 && (
        <>
          <div className="usage-process">
            <h3>[QUY TRÌNH 1]</h3>
            
            <ol className="process-steps">
              <li><strong>[BƯỚC 1]</strong>: [HƯỚNG DẪN NGẮN GỌN]</li>
              <li><strong>[BƯỚC 2]</strong>: [HƯỚNG DẪN NGẮN GỌN]</li>
              <li><strong>[BƯỚC 3]</strong>: [HƯỚNG DẪN NGẮN GỌN]</li>
            </ol>
          </div>
          
          <div className="usage-process">
            <h3>[QUY TRÌNH 2]</h3>
            
            <ol className="process-steps">
              <li><strong>[BƯỚC 1]</strong>: [HƯỚNG DẪN NGẮN GỌN]</li>
              <li><strong>[BƯỚC 2]</strong>: [HƯỚNG DẪN NGẮN GỌN]</li>
              <li><strong>[BƯỚC 3]</strong>: [HƯỚNG DẪN NGẮN GỌN]</li>
            </ol>
          </div>
        </>
      )}
    </section>
  );
};

export default UsageGuide;