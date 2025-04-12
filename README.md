# Template Trang Web Giới Thiệu Sản Phẩm Syngenta

Đây là template cho trang web giới thiệu sản phẩm theo mẫu Syngenta Professional Pest Management, với các placeholder và cấu trúc linh hoạt để dễ dàng tùy chỉnh cho nhiều sản phẩm khác nhau.

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
│   │   ├── productData.ts     # Template với placeholder và chú thích
│   │   └── productTemplateData.ts # File để tạo sản phẩm mới (copy từ productData.ts)
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

## Template & Thay Đổi Nội Dung

Dự án đã được cấu trúc lại thành template với các placeholder, giúp dễ dàng điều chỉnh cho các sản phẩm khác nhau:

- **File dữ liệu template**: `src/data/productData.ts` chứa tất cả placeholder với cấu trúc và chú thích rõ ràng
- **Component template**: Các component như `OverviewTab.tsx`, `ApplicationTab.tsx`, v.v. đã được cập nhật để sử dụng placeholder

### Cách sử dụng template:

1. **Xác định cấu trúc nội dung sản phẩm** dựa trên 3 tab chính: Tổng Quan, Ứng Dụng, Tài Liệu
2. **Tạo file dữ liệu sản phẩm mới**:
   - Copy `productData.ts` thành file mới (ví dụ: `myProductData.ts`)
   - Đổi tên biến từ `productTemplateXxx` thành tên phù hợp với sản phẩm
3. **Điền thông tin sản phẩm thực tế** bằng cách thay thế các placeholder (văn bản trong dấu [ ])
4. **Thêm hình ảnh sản phẩm** vào thư mục `/public/images/`
5. **Cập nhật các component** để sử dụng file dữ liệu mới
6. **Kiểm tra hiển thị** trên các kích thước màn hình khác nhau

### Quy ước đặt tên:

- Các placeholder được đặt trong dấu ngoặc vuông ([ ]) và kèm theo chú thích giải thích
- Mỗi placeholder có tên ngắn gọn, rõ ràng về nội dung cần điền
- Sử dụng dấu gạch dưới (_) để ngăn cách các từ trong placeholder, giúp dễ đọc

### Ví dụ tạo sản phẩm mới:

```typescript
// Tạo file mới: src/data/myProductData.ts
import { ProductInfo, ... } from '../types/product';

export const myProductInfo: ProductInfo = {
  id: 'my-product-123',
  name: 'Sản Phẩm Tuyệt Vời',
  tagline: 'Giải pháp hiệu quả cho vấn đề X',
  // ... điền các thông tin khác
};

// Tương tự cho các mảng dữ liệu khác
export const myProductFeatures: FeatureDetail[] = [ ... ];

// Export mặc định
export default {
  productInfo: myProductInfo,
  features: myProductFeatures,
  // ... các dữ liệu khác
};
```

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

## Lưu Ý Quan Trọng

Đây là template với các placeholder được thiết kế cẩn thận. Để triển khai thực tế, cần:

1. Thay thế các placeholder bằng nội dung sản phẩm cụ thể theo hướng dẫn trong file `productData.ts`
2. Thêm hình ảnh sản phẩm thật vào thư mục `/public/images/` và cập nhật đường dẫn
3. Kiểm tra hiển thị trên các thiết bị khác nhau (desktop, tablet, mobile)
4. Tích hợp với hệ thống backend nếu cần

Template này được thiết kế để có thể tái sử dụng hoàn toàn cho nhiều sản phẩm khác nhau mà không cần sửa code của các component.

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

## Lịch Sử Cập Nhật

### Phiên Bản 2.0.0 (12-04-2025)
- **Chuyển đổi từ prototype sang template**: Tái cấu trúc dự án để dễ tái sử dụng
- **Chuẩn hóa placeholder**: Thêm định dạng nhất quán với dấu [ ] và chú thích
- **Thêm hướng dẫn sử dụng chi tiết**: Bổ sung tài liệu về quy trình tạo sản phẩm mới từ template
- **Cải thiện cấu trúc dữ liệu**: Sắp xếp lại các file dữ liệu với cách đặt tên thống nhất hơn

### Phiên Bản 1.0.0 (01-03-2025)
- Phát hành prototype đầu tiên cho trang web giới thiệu sản phẩm
- Tạo mẫu demo với sản phẩm Icon 10CS
- Thiết lập UI cơ bản với cấu trúc 3 tab