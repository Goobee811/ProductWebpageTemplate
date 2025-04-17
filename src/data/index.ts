// src/data/index.ts
import { ProductInfo, FeatureDetail, UserGroup, UsageProcess, UsageEnvironment, FAQ, ResearchProof, ProductDocument } from '../types/product';

// Import all the product data files
import productTemplateData from './productTemplateData';
import icon10CSData from './icon10CSData';

// Import these individually if you need direct access to them
export { default as productTemplateData } from './productTemplateData';
export { default as icon10CSData } from './icon10CSData';

// Define a ProductDataType interface to represent the structure of product data
export interface ProductDataType {
  productInfo: ProductInfo;
  features: FeatureDetail[];
  userGroups: UserGroup[];
  usageProcesses: UsageProcess[];
  environments: UsageEnvironment[];
  faqs: FAQ[];
  researchProofs: ResearchProof[];
  documents: ProductDocument[];
  [key: string]: any; // Allow for additional properties
}

// Create a registry of all product data that can be accessed by product ID
// Use Record type to ensure TypeScript knows this is an object with string keys and ProductDataType values
const productRegistry: Record<string, ProductDataType> = {
  'template': productTemplateData as ProductDataType,
  'icon-10cs-62-5ml': icon10CSData as ProductDataType,
};

// Define valid product IDs for type safety
export type ProductId = keyof typeof productRegistry;

// Helper function to get product data by ID with proper typing
export const getProductById = (productId: string): ProductDataType | null => {
  return productRegistry[productId as ProductId] || null;
};

// Export the active products - makes it easy to map through all products
export const activeProducts: ProductDataType[] = [
  icon10CSData as ProductDataType,
];

// Export the registry for direct access if needed
export { productRegistry };

// Export a default object with all data and helpers
export default {
  productTemplateData,
  icon10CSData,
  getProductById,
  activeProducts,
  productRegistry
};
