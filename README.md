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

## Cấu Trúc Dự Án Chi Tiết

```
/                             # Root directory
├── public/                   # Public assets
│   ├── favicon.ico           # Website favicon
│   ├── index.html            # Main HTML file
│   ├── logo192.png           # Small logo for PWA
│   ├── logo512.png           # Large logo for PWA
│   ├── manifest.json         # PWA manifest file
│   └── images/               # Product images folder
│       └── syngenta-icon10cs-thuoc-bay-muoi-gian-kien-ba-khoang-gia-dinh-62-5ml.webp  # Product image
├── src/                      # Source code
│   ├── components/           # UI components
│   │   ├── Header/           # Site header
│   │   │   ├── Header.css    # Header styles
│   │   │   └── Header.tsx    # Header component
│   │   ├── Footer/           # Site footer
│   │   │   ├── Footer.css    # Footer styles
│   │   │   └── Footer.tsx    # Footer component
│   │   ├── ProductTabs/      # Tab system for product info
│   │   │   ├── index.tsx     # Main tab container
│   │   │   ├── TabNavigation.tsx        # Tab navigation component
│   │   │   ├── TabNavigation.css        # Tab navigation styles
│   │   │   ├── TabNavigation.test.tsx   # Tests for tab navigation
│   │   │   ├── OverviewTab/   # Tab 1: Product Overview
│   │   │   │   ├── OverviewTab.tsx      # Overview tab component
│   │   │   │   ├── HowItWorks.tsx       # How product works component
│   │   │   │   ├── KeyFeatures.tsx      # Key features component
│   │   │   │   ├── ProductInfo.tsx      # Product info component
│   │   │   │   ├── ProductInfo.css      # Product info styles
│   │   │   │   ├── UniqueFeature.tsx    # Unique feature component
│   │   │   │   └── UniqueFeature.test.tsx # Tests for unique feature
│   │   │   ├── ApplicationTab/ # Tab 2: Application Info
│   │   │   │   ├── ApplicationTab.tsx   # Application tab component
│   │   │   │   ├── UserBenefits.tsx     # User benefits component
│   │   │   │   ├── UsageGuide.tsx       # Usage guide component
│   │   │   │   ├── UsageEnvironment.tsx # Usage environment component
│   │   │   │   └── FAQ.tsx              # FAQ component
│   │   │   └── DocumentTab/   # Tab 3: Documentation
│   │   │       ├── DocumentTab.tsx      # Document tab component
│   │   │       ├── EffectivenessProof.tsx # Effectiveness proof component
│   │   │       ├── QualityCommitment.tsx # Quality commitment component
│   │   │       ├── PurchaseInfo.tsx     # Purchase info component
│   │   │       ├── SupportInfo.tsx      # Support info component
│   │   │       └── References.tsx       # References component
│   │   └── RelatedProducts/   # Related products section
│   │       ├── RelatedProducts.tsx    # Related products component
│   │       └── RelatedProducts.css    # Related products styles
│   ├── data/                  # Data files
│   │   ├── productData.ts     # General product information
│   │   └── icon10csData.ts    # Specific Icon 10CS product data
│   ├── services/              # Service layer
│   │   ├── api.ts             # API service for data fetching
│   │   └── productService.ts  # Product service for data handling
│   ├── styles/                # CSS styles
│   │   ├── App.css            # App component styles
│   │   ├── global.css         # Global styles
│   │   └── theme.css          # Theme variables and settings
│   ├── types/                 # TypeScript type definitions
│   │   └── product.ts         # Product-related type definitions
│   ├── App.tsx                # Main application component
│   └── index.tsx              # Application entry point
├── .gitignore                 # Git ignore configuration
├── package.json               # NPM package configuration
├── package-lock.json          # NPM package lock
├── preview.html               # Preview HTML file
└── tsconfig.json              # TypeScript configuration
```

## Công Nghệ Sử Dụng

- **React 18.3.1**: Framework JavaScript cho UI
- **TypeScript 5.8.3**: Superset của JavaScript với static typing
- **Jest 29.7.0** & **React Testing Library 14.3.1**: Môi trường test và thư viện kiểm thử
- **Vitest 0.34.6**: Framework test hiệu năng cao thay thế cho Jest
- **Lucide React 0.487.0**: Thư viện icon chất lượng cao, nhẹ, và linh hoạt

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

4. Chạy tests:
```bash
npm test
```

5. Build cho môi trường production:
```bash
npm run build
```

## Thay Đổi Nội Dung

Tất cả nội dung mẫu được lưu trữ trong thư mục `src/data/`:

- Cấu trúc dữ liệu chung: `productData.ts`
- Dữ liệu sản phẩm Icon 10CS: `icon10csData.ts`

Để thay đổi nội dung, chỉ cần cập nhật các file này với thông tin sản phẩm thực tế.

## Cấu Trúc Component

Dự án được thiết kế theo mô hình component-based, với mỗi thành phần chức năng được tách thành các component riêng biệt. Điều này giúp:

- **Tái sử dụng code**: Các component có thể được tái sử dụng ở nhiều nơi khác nhau
- **Dễ bảo trì**: Mỗi component chỉ phụ trách một chức năng cụ thể
- **Dễ test**: Mỗi component có thể được test độc lập

Các component được tổ chức theo cấu trúc thư mục phân cấp, phản ánh mối quan hệ giữa chúng trong ứng dụng.

## Hệ Thống Test

Dự án sử dụng Jest và React Testing Library để viết và chạy các test. Các file test có đuôi `.test.tsx`. Hiện tại đã có một số test mẫu (như `UniqueFeature.test.tsx` và `TabNavigation.test.tsx`) để làm ví dụ về cách viết test.

## Styling System

Dự án sử dụng CSS thuần với cấu trúc module hóa:

- `theme.css`: Chứa các biến CSS (như màu sắc, font, spacing) và các style chung
- `global.css`: Style toàn cục áp dụng cho toàn bộ ứng dụng
- Component-level CSS: Mỗi component có file CSS riêng (ví dụ: `Header.css`, `Footer.css`)

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

## Responsive Design

Trang web được thiết kế để hiển thị tốt trên mọi kích thước màn hình:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Các media queries được định nghĩa trong file CSS tương ứng của từng component.