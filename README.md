# Prototype Trang Web Giới Thiệu Sản Phẩm Syngenta

Đây là prototype cho trang web giới thiệu sản phẩm theo mẫu Syngenta Professional Pest Management, tuân thủ yêu cầu "vibe coding".

## Đặc Điểm Nổi Bật

- **Code thân thiện với AI**: Các file mã nguồn được tổ chức nhỏ gọn, dễ đọc và dễ sửa đổi
- **Sử dụng TypeScript**: Giúp phát hiện lỗi sớm ở compile time
- **Thiết kế hướng test**: Cấu trúc component dễ dàng áp dụng các framework test như Jest/Vitest
- **Tuân thủ Brand Guidelines**: Áp dụng đúng bảng màu, typography và yếu tố visual identity của Syngenta

## Cấu Trúc Trang Web

Trang web được tổ chức theo cấu trúc 3 tab chính:

1. **Tab Tổng Quan**:
   - Công Nghệ Độc Đáo
   - Cách Thức Hoạt Động
   - Đặc Tính Nổi Bật

2. **Tab Ứng Dụng**:
   - Lợi Ích Cho Người Dùng
   - Hướng Dẫn Sử Dụng
   - Môi Trường Sử Dụng
   - Câu Hỏi Thường Gặp

3. **Tab Tài Liệu**:
   - Chứng Minh Hiệu Quả
   - Cam Kết Chất Lượng
   - Thông Tin Mua Hàng
   - Thông Tin Hỗ Trợ
   - Tài Liệu Tham Khảo

## Cấu Trúc Dự Án

```
src/
├── components/           # Các thành phần UI
│   ├── Header/           # Phần header trang web
│   ├── ProductTabs/      # Hệ thống tab sản phẩm
│   │   ├── TabNavigation.tsx
│   │   ├── OverviewTab/  # Tab Tổng Quan
│   │   │   ├── index.tsx
│   │   │   ├── UniqueFeature.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   └── KeyFeatures.tsx
│   │   ├── ApplicationTab/ # Tab Ứng Dụng
│   │   │   ├── index.tsx
│   │   │   ├── UserBenefits.tsx
│   │   │   ├── UsageGuide.tsx
│   │   │   ├── UsageEnvironment.tsx
│   │   │   └── FAQ.tsx
│   │   └── DocumentTab/  # Tab Tài Liệu
│   │       ├── index.tsx
│   │       ├── EffectivenessProof.tsx
│   │       ├── QualityCommitment.tsx
│   │       ├── PurchaseInfo.tsx
│   │       ├── SupportInfo.tsx
│   │       └── References.tsx
│   ├── RelatedProducts/  # Phần sản phẩm liên quan
│   └── Footer/           # Phần footer
├── types/                # TypeScript definitions
├── styles/               # CSS files
├── data/                 # Sample data
└── App.tsx               # Component chính
```

## Hướng Dẫn Phát Triển

1. Clone repository:
```bash
git clone <repository-url>
cd product-webpage-template
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy ứng dụng ở môi trường development:
```bash
npm start
```

4. Build cho môi trường production:
```bash
npm run build
```

## Thay Đổi Nội Dung

Tất cả nội dung mẫu được lưu trữ trong thư mục `src/data/productData.ts`. Để thay đổi nội dung, chỉ cần cập nhật file này với thông tin sản phẩm thực tế.

## Lưu Ý

Đây là prototype với các placeholders. Để triển khai thực tế, cần:

1. Thay thế tất cả placeholders bằng nội dung thực tế
2. Thêm hình ảnh sản phẩm thật
3. Tích hợp với hệ thống backend nếu cần

## Tuân Thủ Brand Guidelines

Prototype này tuân thủ nghiêm ngặt Syngenta Professional Pest Management Brand Guidelines:

- **Brand Essence**: "Life uninterrupted" (cuộc sống không bị gián đoạn)
- **Brand Differentiator**: Sự kết hợp giữa hiểu biết sâu sắc về khách hàng và sản phẩm hàng đầu
- **Brand Personality**: Tò mò, Tháo vát, Chu đáo
- **Positioning Statement**: Kinh doanh toàn cầu chuyên loại bỏ sự phiền nhiễu và gián đoạn do côn trùng