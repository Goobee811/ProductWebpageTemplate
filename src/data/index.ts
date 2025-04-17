// src/data/index.ts

// Import all the product data files
import productTemplateData from './productTemplateData';
import icon10CSData from './icon10CSData';

// Import these individually if you need direct access to them
export { default as productTemplateData } from './productTemplateData';
export { default as icon10CSData } from './icon10CSData';

// Create a registry of all product data that can be accessed by product ID
const productRegistry = {
  'template': productTemplateData,
  'icon-10cs-62-5ml': icon10CSData,
};

// Helper function to get product data by ID
export const getProductById = (productId: string) => {
  return productRegistry[productId] || null;
};

// Export the active products - makes it easy to map through all products
export const activeProducts = [
  icon10CSData,
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
