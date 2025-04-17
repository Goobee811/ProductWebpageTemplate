// src/data/index.ts

// Import named exports from productData
import productData from './productData';

// Import named exports from productTemplateData
import productTemplateData from './productTemplateData';

// Import named exports from icon10CSData
import {
  productInfo as icon10CSProductInfo,
  productFeatures as icon10CSFeatures,
  productUserGroups as icon10CSUserGroups,
  productUsageProcesses as icon10CSUsageProcesses,
  productEnvironments as icon10CSEnvironments,
  productFAQs as icon10CSFAQs,
  productResearchProofs as icon10CSResearchProofs,
  productDocuments as icon10CSDocuments
} from './icon10CSData';
import icon10CSData from './icon10CSData';

// Re-export the specific imports with unique names
export {
  icon10CSProductInfo,
  icon10CSFeatures,
  icon10CSUserGroups,
  icon10CSUsageProcesses,
  icon10CSEnvironments,
  icon10CSFAQs,
  icon10CSResearchProofs,
  icon10CSDocuments
};

// Export all the default imports
export default {
  productData,
  productTemplateData,
  icon10CSData
};
