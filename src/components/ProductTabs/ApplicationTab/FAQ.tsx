import React, { useState } from 'react';
import { FAQ } from '../../../types/product';

interface FAQProps {
  faqs: FAQ[];
}

// Component hiển thị phần Câu Hỏi Thường Gặp
const FrequentlyAskedQuestions: React.FC<FAQProps> = ({ faqs }) => {
  // State để quản lý câu hỏi đang mở
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Hàm xử lý đóng/mở câu hỏi
  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <section className="faq-section">
      <h2>Câu Hỏi Thường Gặp</h2>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openQuestion === index ? 'open' : ''}`}
          >
            <h3 
              className="faq-question"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span className="toggle-icon">{openQuestion === index ? '−' : '+'}</span>
            </h3>
            
            {openQuestion === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Placeholder nếu chưa có dữ liệu */}
      {faqs.length === 0 && (
        <div className="faq-list">
          <div className="faq-item">
            <h3 className="faq-question">
              [CÂU HỎI 1]?
              <span className="toggle-icon">+</span>
            </h3>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">
              [CÂU HỎI 2]?
              <span className="toggle-icon">+</span>
            </h3>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">
              [CÂU HỎI 3]?
              <span className="toggle-icon">+</span>
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default FrequentlyAskedQuestions;