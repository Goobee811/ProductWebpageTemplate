// src/data/index.ts

import { ProductInfo, FeatureDetail, UserGroup, UsageProcess, UsageEnvironment, FAQ, ResearchProof, ProductDocument } from '../types/product';

// Import các file dữ liệu sản phẩm
import productTemplateData from './productTemplateData';
import icon10CSData from './icon10CSData';

// Định nghĩa kiểu dữ liệu cho sản phẩm
export interface ProductDataType {
  productInfo: ProductInfo;
  features: FeatureDetail[];
  userGroups: UserGroup[];
  usageProcesses: UsageProcess[];
  environments: UsageEnvironment[];
  faqs: FAQ[];
  researchProofs: ResearchProof[];
  documents: ProductDocument[];
  [key: string]: any; // Cho phép các thuộc tính bổ sung
}

// Re-export các module để sử dụng trực tiếp
export { default as productTemplateData } from './productTemplateData';
export { default as icon10CSData } from './icon10CSData';

// Tạo registry cho các sản phẩm - dễ dàng truy cập theo ID
const productRegistry: Record<string, ProductDataType> = {
  'template': productTemplateData as ProductDataType,
  'icon-10cs-62-5ml': icon10CSData as ProductDataType,
};

// Định nghĩa ProductId để đảm bảo type safety
export type ProductId = keyof typeof productRegistry;

// Hàm trợ giúp lấy dữ liệu sản phẩm theo ID
export const getProductById = (productId: string): ProductDataType | null => {
  return productRegistry[productId as ProductId] || null;
};

// Danh sách các sản phẩm đang hoạt động - tiện lợi để hiển thị trong UI
export const activeProducts: ProductDataType[] = [
  icon10CSData as ProductDataType,
];

// Export registry để truy cập trực tiếp nếu cần
export { productRegistry };

// Export mặc định tất cả dữ liệu và các hàm trợ giúp
export default {
  productTemplateData,
  icon10CSData,
  getProductById,
  activeProducts,
  productRegistry
};