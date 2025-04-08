import React, { useState } from 'react';
import { ProductDocument } from '../../../types/product';

interface ReferencesProps {
  documents: ProductDocument[];
}

// Component hiển thị phần Tài Liệu Tham Khảo
const References: React.FC<ReferencesProps> = ({ documents }) => {
  // State để quản lý việc mở/đóng danh sách tài liệu
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <section className="references">
      <h2>Tài Liệu Tham Khảo</h2>
      
      <div className="references-note">
        <p>
          <strong>Lưu ý:</strong> Phần tài liệu tham khảo này có thể khá dài và ít người đọc chi tiết. 
          Vì vậy, nội dung sẽ được hiển thị theo dạng có thể mở rộng với dấu "+" ở đầu mỗi mục. 
          Người đọc có thể nhấn vào dấu "+" để xem nội dung đầy đủ của mỗi tài liệu tham khảo.
        </p>
      </div>
      
      <div className="toggle-references">
        <button 
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Thu gọn tài liệu' : 'Xem danh sách tài liệu'}
          <span className="toggle-icon">{isExpanded ? '−' : '+'}</span>
        </button>
      </div>
      
      {isExpanded && (
        <div className="documents-list">
          {documents.map((doc, index) => (
            <div key={index} className="document-item">
              <div className="document-icon">
                {doc.filename.endsWith('.pdf') && '📄'}
                {doc.filename.endsWith('.doc') && '📝'}
                {doc.filename.endsWith('.xls') && '📊'}
              </div>
              <div className="document-info">
                <h4>{doc.title}</h4>
                <p className="document-meta">
                  <span className="filename">{doc.filename}</span>
                  <span className="filesize">({doc.fileSize})</span>
                </p>
              </div>
              <a href={doc.url} className="download-button" download>
                Tải xuống
              </a>
            </div>
          ))}
          
          {/* Placeholder cho các nguồn tham khảo khoa học */}
          <div className="scientific-references">
            <h3>Nguồn tham khảo khoa học</h3>
            <ul className="references-list">
              <li><strong>[^1]:</strong> [NGUỒN THAM KHẢO 1]</li>
              <li><strong>[^2]:</strong> [NGUỒN THAM KHẢO 2]</li>
              <li><strong>[^3]:</strong> [NGUỒN THAM KHẢO 3]</li>
              <li><strong>[^n]:</strong> [NGUỒN THAM KHẢO n]</li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Placeholder nếu chưa có dữ liệu */}
      {documents.length === 0 && isExpanded && (
        <div className="documents-list">
          <div className="document-item placeholder">
            <div className="document-icon">📄</div>
            <div className="document-info">
              <h4>[TÊN TÀI LIỆU 1]</h4>
              <p className="document-meta">
                <span className="filename">[TÊN FILE].pdf</span>
                <span className="filesize">([KÍCH THƯỚC])</span>
              </p>
            </div>
            <a href="#" className="download-button">Tải xuống</a>
          </div>
          
          <div className="document-item placeholder">
            <div className="document-icon">📄</div>
            <div className="document-info">
              <h4>[TÊN TÀI LIỆU 2]</h4>
              <p className="document-meta">
                <span className="filename">[TÊN FILE].pdf</span>
                <span className="filesize">([KÍCH THƯỚC])</span>
              </p>
            </div>
            <a href="#" className="download-button">Tải xuống</a>
          </div>
          
          <div className="document-item placeholder">
            <div className="document-icon">📄</div>
            <div className="document-info">
              <h4>[TÊN TÀI LIỆU 3]</h4>
              <p className="document-meta">
                <span className="filename">[TÊN FILE].pdf</span>
                <span className="filesize">([KÍCH THƯỚC])</span>
              </p>
            </div>
            <a href="#" className="download-button">Tải xuống</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default References;