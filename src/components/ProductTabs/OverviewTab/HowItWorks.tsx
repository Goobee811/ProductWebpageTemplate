import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
  advantages: string[];
}

// Component hiển thị phần Cách Thức Hoạt Động
const HowItWorks: React.FC<HowItWorksProps> = ({ steps, advantages }) => {
  return (
    <section className="how-it-works">
      <h2>Cách Thức Hoạt Động</h2>
      
      {/* Danh sách các bước */}
      <ol className="steps-list">
        {steps.map((step, index) => (
          <li key={index}>
            <strong>{step.title}</strong>: {step.description}
          </li>
        ))}
      </ol>
      
      {/* Phần ưu điểm bổ sung */}
      <p>
        Sản phẩm mang lại hiệu quả vượt trội nhờ các ưu điểm: {' '}
        {advantages.map((advantage, index) => (
          <React.Fragment key={index}>
            <strong>{advantage}</strong>
            {index < advantages.length - 1 && ', '}
            {index === advantages.length - 2 && 'và '}
          </React.Fragment>
        ))}.
      </p>
    </section>
  );
};

export default HowItWorks;