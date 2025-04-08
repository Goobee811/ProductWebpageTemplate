// TypeScript interfaces for the Product Showcase Website

export interface MainProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  primaryImage: string;
  category: string;
  status: string;
  composition: string;
  chemicalFamily: string;
  activityGroup: string;
  formulation: string;
  modeOfAction: string;
}

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksStep {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface UserBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UserGroup {
  name: string;
  description: string;
  benefits: {
    title: string;
    details: string;
  }[];
}

export interface UsageProcess {
  title: string;
  steps: {
    title: string;
    instruction: string;
  }[];
}

export interface UsageEnvironment {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ResearchProof {
  id: string;
  title: string;
  results: string;
  link: string;
}

export interface QualityCertification {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface RegistrationInfo {
  licenseNumber: string;
  issuingAuthority: string;
  issueDate: string;
  expiryDate: string;
}

export interface PackagingInfo {
  id: string;
  size: string;
  price: string;
  description: string;
}

export interface SupportTeamMember {
  id: string;
  name: string;
  title: string;
  contactInfo: string;
  avatar: string;
}

export interface ProductDocument {
  id: string;
  title: string;
  filename: string;
  fileSize: string;
  url: string;
}

export interface RelatedProduct {
  id: string;
  name: string;
  category: string;
  composition: string;
  imageUrl: string;
  status: string;
  url: string;
}